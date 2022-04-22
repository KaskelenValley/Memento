import { useEffect, useRef, useState } from "react";
import MediaRecorder from "opus-media-recorder";
import useTimer from "../hooks/useTimer";

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

    const data = [e.data];

    if (!this.isStream) {
      const formData = new FormData();
      formData.append("file", data[data.length - 1]);
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
      const blob = new Blob(data, {
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
    if (json.text) {
      this.result += " " + json.text.trim();
    }

    if (this.callback) this.callback(this.result);

    if (typeof e.data === "object" && JSON.parse(e.data).isFinal === "true") {
      this.ws.close();
    }
  }

  startRecording() {
    if (this.isStream) this.mediaRecorder.start(400);
    else this.mediaRecorder.start();
  }

  stopRecording() {
    this.mediaRecorder.stop();
  }

  setOnResult(callback: (result: string) => void) {
    this.callback = callback;
  }
}

// export const useRecorder = () => {
//   const [recording, setRecording] = useState({
//     active: false,
//     available: false,
//     url: "",
//   });
//   const [stream, setStream] = useState({
//     access: false,
//     recorder: null,
//     error: "",
//   });
//   const [data, setData] = useState([]);
//   const chunks = useRef([]);
//   const [isStream, setIsStream] = useState(true);
//   const [audioSrc, setAudioSrc] = useState<string>();
//   const [result, setResult] = useState("");
//   const ws = useRef(null);
//   const {
//     timer,
//     isActive,
//     isPaused,
//     handleStart,
//     handlePause,
//     handleResume,
//     handleReset,
//   } = useTimer(0);

//   useEffect(() => {
//     ws.current = new WebSocket("wss://memento-srs-node-dev.herokuapp.com");
//     ws.current.onmessage = (event) => {
//       console.log(JSON.parse(event.data));
//       const json = JSON.parse(event.data);
//       let st = "";
//       console.log(st);
//       if (json.isFinal === "false") {
//         st += json.text;
//         setResult(json.text);
//       } else {
//         setResult(`${st} ${json.result}`);
//       }

//       if (
//         typeof event.data === "object" &&
//         JSON.parse(event.data).isFinal === "true"
//       ) {
//         ws.current.close();
//       }
//     };
//     ws.current.onopen = () => {};

//     navigator.mediaDevices.getUserMedia({ audio: true }).then((mic) => {
//       let mediaRecorder;
//       try {
//         mediaRecorder = new MediaRecorder(
//           mic,
//           { mimeType: "audio/ogg" },
//           workerOptions
//         );
//       } catch (err) {
//         console.log(err);
//       }

//       mediaRecorder.onstart = () => {
//         console.log("recorder start");
//         setRecording({
//           active: true,
//           available: false,
//           url: "",
//         });
//       };

//       mediaRecorder.ondataavailable = async (e) => {
//         console.log("data available");
//         chunks.current.push(e.data);

//         //   setLoadingState(true);
//         const data = [e.data];
//         setData(data);

//         const formData = new FormData();
//         formData.append("file", data[data.length - 1]);

//         if (!isStream) {
//           await fetch(
//             "https://memento-speech-recognition-dev.herokuapp.com/ogg_to_wav/",
//             {
//               method: "POST",
//               body: formData,
//             }
//           ).then((response) =>
//             response.blob().then((blob) => {
//               const objectURL = URL.createObjectURL(blob);
//               setAudioSrc(objectURL);
//             })
//           );

//           const res = await fetch(
//             "https://memento-speech-recognition-dev.herokuapp.com/stt_sync/",
//             {
//               method: "POST",
//               body: formData,
//             }
//           );
//           const json = await res.json();

//           // setResult(json.result);
//           // setText(json.result);
//           // setSaveStatus(true);
//         } else {
//           const blob = new Blob(data, {
//             type: "audio/ogg; codecs=opus",
//           });
//           if (blob.size !== 0 && ws.current.readyState === 1)
//             ws.current.send(blob);
//         }
//       };

//       mediaRecorder.onstop = async () => {
//         console.log("stopped");

//         const url = URL.createObjectURL(new Blob(chunks.current));
//         chunks.current = [];

//         mic.getTracks().forEach((track) => track.stop());

//         setRecording({
//           active: false,
//           available: true,
//           url,
//         });
//       };

//       setStream({
//         ...stream,
//         access: true,
//         recorder: mediaRecorder,
//       });
//     });
//   }, []);

//   const startRecording = () => {
//     if (!stream.recorder) return;

//     stream.recorder.start();
//     handleReset();
//     handleStart();
//   };

//   const stopRecording = () => {
//     if (!stream.recorder) return;

//     handlePause();
//     stream.recorder.stop();
//   };

//   return {
//     result,
//     recording,
//     setRecording,
//     timer,
//     startRecording,
//     stopRecording,
//   };
// };
