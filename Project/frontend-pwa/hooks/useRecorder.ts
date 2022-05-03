import MediaRecorder from "opus-media-recorder";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

import { db, storage } from "../utils/firebase";

const workerOptions = {
  encoderWorkerFactory: function () {
    return new Worker("/opus-media-recorder/encoderWorker.umd.js");
  },
  OggOpusEncoderWasmPath: "/opus-media-recorder/OggOpusEncoder.wasm",
  WebMOpusEncoderWasmPath: "/opus-media-recorder/WebMOpusEncoder.wasm",
};

export class Recorder {
  private mediaRecorder = null;
  private isStream = true;
  private ws: WebSocket = null;
  private result = "";
  private callback: (res: string) => void;
  private data;
  private streamData = [];

  async init() {
    this.ws = new WebSocket("wss://memento-srs-node-dev.herokuapp.com");
    this.ws.onmessage = (e) => this.onMessage(e);

    const mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    this.mediaRecorder = new MediaRecorder(
      mediaStream,
      { mimeType: "audio/ogg" },
      workerOptions
    );

    this.mediaRecorder.onstart = () => this.onRecorderStart();
    this.mediaRecorder.ondataavailable = (e) => this.onRecorderDataAvailable(e);
    this.mediaRecorder.onstop = () => this.onRecorderStop(mediaStream);
  }

  private onRecorderStart() {
    console.log("recorder started");
  }

  private async onRecorderDataAvailable(e) {
    console.log("data available");

    this.data = [e.data];
    this.streamData.push(e.data);

    if (!this.isStream) {
      const formData = new FormData();
      formData.append("file", this.data[this.data.length - 1]);
      await fetch(
        "https://memento-speech-recognition-dev.herokuapp.com/ogg_to_wav/",
        {
          method: "POST",
          body: formData,
        }
      );
      const res = await fetch(
        "https://memento-speech-recognition-dev.herokuapp.com/stt_sync/",
        {
          method: "POST",
          body: formData,
        }
      );
      const json = await res.json();
      console.log(json.result);
      this.result = json.result;
      if (this.callback) this.callback(this.result);
    } else {
      const blob = new Blob(this.data, {
        type: "audio/ogg; codecs=opus",
      });
      if (blob.size !== 0 && this.ws.readyState === 1) {
        console.log("Sending message");
        this.ws.send(blob);
      } else {
        console.error("couldn't send message");
      }
    }
  }

  private onRecorderStop(ms: MediaStream) {
    console.log("stopped");

    ms.getTracks().forEach((track) => track.stop());
  }

  private onMessage(e) {
    const json = JSON.parse(e.data);
    if (!json.text) {
      return;
    }

    let result = "";
    result = this.result + " " + json.text;
    if (json?.isFinal === "true") {
      this.result = result;
    }

    if (this.callback) this.callback(result);

    // if (typeof e.data === "object" && JSON.parse(e.data).isFinal === "true") {
    //   this.ws.close();
    // }
  }

  startRecording() {
    if (this.isStream) this.mediaRecorder?.start(400);
    else this.mediaRecorder?.start();
  }

  stopRecording() {
    this.mediaRecorder?.stop();
  }

  setOnResult(callback: (result: string) => void) {
    this.callback = callback;
  }

  setIsStream(isStream) {
    this.isStream = isStream;
  }

  async saveRecord(uid, title, result, type) {
    const b = new Blob(this.streamData, {
      type: "audio/ogg; codecs=opus",
    });
    const id = new Date().valueOf().toString();
    const storageRef = ref(storage, id);
    const formData = new FormData();
    formData.append("file", b);

    const response = await fetch(
      "https://tasty-olives-fry-159-223-3-201.loca.lt/predict_mood",
      {
        method: "POST",
        body: JSON.stringify({ text: result }),
        headers: {
          "Content-Type": "application/json",
          "Bypass-Tunnel-Reminder": "true",
        },
      }
    );
    const moodRes = await response.json();

    fetch("https://memento-speech-recognition-dev.herokuapp.com/ogg_to_wav/", {
      method: "POST",
      body: formData,
    }).then((response) =>
      response.blob().then((blob) =>
        uploadBytes(storageRef, blob).then(() => {
          getDownloadURL(storageRef).then((url) => {
            updateDoc(doc(db, "users", uid), {
              records: arrayUnion({
                id,
                type,
                title,
                result,
                src: url,
                date: new Date(),
                mood: moodRes.mood,
                mood_score: moodRes.mood_score,
              }),
            });
          });
        })
      )
    );
  }
}
