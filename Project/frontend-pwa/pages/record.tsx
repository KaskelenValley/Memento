import { FC, useEffect, useRef, useState } from "react";
import {
  CardContent,
  Button,
  CircularProgress,
  Box,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import MediaRecorder from "opus-media-recorder";
import Router, { useRouter } from "next/router";

import { auth, db, storage } from "../utils/firebase";
import OpusMediaRecorderView from "../utils/OpusMediaRecorderView";
import { ArrowIcon, MicroIcon, TextIcon, TrashIcon } from "../icons";
import AudioAnalyser from "../utils/AudioAnalyser";
import useTimer from "../hooks/useTimer";
import { formatTime } from "../utils";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

const workerOptions = {
  encoderWorkerFactory: function () {
    return new Worker("/opus-media-recorder/encoderWorker.umd.js");
  },
  OggOpusEncoderWasmPath: "/opus-media-recorder/OggOpusEncoder.wasm",
  WebMOpusEncoderWasmPath: "/opus-media-recorder/WebMOpusEncoder.wasm",
};

const App: FC = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  const router = useRouter();

  const [state, setState] = useState<any>();
  const [result, setResult] = useState<string>();
  const [loadingState, setLoadingState] = useState(false);
  const [saveStatus, setSaveStatus] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string>();
  const [text, setText] = useState<string>();
  const [isStream, setIsStream] = useState(false);
  const [audio, setAudio] = useState();
  const [isNext, setIsNext] = useState(false);

  const [user, loading, error] = useAuthState(auth);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const id = new Date().valueOf().toString();
  const ws = useRef(null);
  const storageRef = ref(storage, id);

  useEffect(() => {
    setState({ data: [], blob: new Blob([]) });
  }, []);

  const saveRecord = async () => {
    const formData = new FormData();
    formData.append("file", state.data[state.data.length - 1]);
    await fetch(
      "https://memento-speech-recognition-dev.herokuapp.com/ogg_to_wav/",
      {
        method: "POST",
        body: formData,
      }
    ).then((response) =>
      response.blob().then((blob) => {
        uploadBytes(storageRef, blob).then((snapshot) => {
          getDownloadURL(storageRef).then((url) => {
            updateDoc(doc(db, "users", user.uid), {
              records: arrayUnion({ result: text, src: url, id }),
            });
          });
          alert("success");
          setSaveStatus(false);
          router.push("records");
        });
      })
    );
  };

  const [stream, setStream] = useState({
    access: false,
    recorder: null,
    error: "",
  });

  const [recording, setRecording] = useState({
    active: false,
    available: false,
    url: "",
  });

  let mediaRecorder;
  const chunks = useRef([]);

  return !isNext ? (
    <StyledContainer>
      <StyledBlock>
        <Link href="/main">
          <ArrowIcon />
        </Link>
        <Typography align="center" sx={{ fontSize: 24, fontWeight: 500 }}>
          Voice note
        </Typography>
      </StyledBlock>
      {recording.available && <audio controls src={audioSrc} />}
      <div>
        <Typography align="center" sx={{ fontSize: 32, fontWeight: 400 }}>
          {formatTime(timer)}
        </Typography>
        {audio && <AudioAnalyser audio={audio} />}
        <ButtonContainer>
          <IconButton
            variant="outlined"
            onClick={() => {
              handleReset();
              setRecording({ ...recording, url: "" });
            }}
            disabled={!recording.available}
          >
            <TrashIcon />
          </IconButton>
          <Button
            onClick={() => {
              if (recording.active) {
                handlePause();
                stream.recorder.stop();
              } else
                navigator.mediaDevices
                  .getUserMedia({ audio: true })
                  .then((mic) => {
                    try {
                      mediaRecorder = new MediaRecorder(
                        mic,
                        { mimeType: "audio/ogg" },
                        workerOptions
                      );
                    } catch (err) {
                      console.log(err);
                    }

                    const track = mediaRecorder.stream.getTracks()[0];
                    track.onended = () => console.log("ended");

                    mediaRecorder.onstart = () => {
                      setAudio(mediaRecorder.source.mediaStream);
                      setRecording({
                        active: true,
                        available: false,
                        url: "",
                      });
                    };

                    mediaRecorder.ondataavailable = async (e) => {
                      console.log("data available");
                      chunks.current.push(e.data);

                      setLoadingState(true);
                      const data = [e.data];
                      setState({
                        data: data,
                        blob: new Blob(data, {
                          type: "audio/ogg; codecs=opus",
                        }),
                      });

                      const formData = new FormData();
                      formData.append("file", data[data.length - 1]);
                      const blob = new Blob(data, {
                        type: "audio/ogg; codecs=opus",
                      });

                      if (!isStream) {
                        await fetch(
                          "https://memento-speech-recognition-dev.herokuapp.com/ogg_to_wav/",
                          {
                            method: "POST",
                            body: formData,
                          }
                        ).then((response) =>
                          response.blob().then((blob) => {
                            const objectURL = URL.createObjectURL(blob);
                            setAudioSrc(objectURL);
                          })
                        );

                        const res = await fetch(
                          "https://memento-speech-recognition-dev.herokuapp.com/stt_sync/",
                          {
                            method: "POST",
                            body: formData,
                          }
                        );
                        const json = await res.json();

                        setResult(json.result);
                        setText(json.result);
                        setSaveStatus(true);
                      } else {
                        if (blob.size !== 0 && ws.current.readyState === 1)
                          ws.current.send(blob);
                      }

                      setLoadingState(false);
                    };

                    mediaRecorder.onstop = async () => {
                      console.log("stopped");

                      const url = URL.createObjectURL(new Blob(chunks.current));
                      chunks.current = [];

                      mic.getTracks().forEach((track) => track.stop());
                      setAudio(null);

                      setRecording({
                        active: false,
                        available: true,
                        url,
                      });
                    };

                    setStream({
                      ...stream,
                      access: true,
                      recorder: mediaRecorder,
                    });

                    mediaRecorder.start();
                    handleReset();
                    handleStart();
                  })
                  .catch((error) => {
                    console.log(error);
                    setStream({ ...stream, error });
                  });

              //!recording.active &&
              // ws.current = new WebSocket(
              //   "wss://memento-srs-node-dev.herokuapp.com"
              // );
              // ws.current.onmessage = (event) => {
              //   console.log(JSON.parse(event.data));
              //   const json = JSON.parse(event.data);
              //   let st = "";
              //   console.log(st);
              //   if (json.isFinal === "false") {
              //     st += json.text;
              //     setResult(json.text);
              //   } else {
              //     setResult(`${st} ${json.result}`);
              //   }

              //   if (
              //     typeof event.data === "object" &&
              //     JSON.parse(event.data).isFinal === "true"
              //   ) {
              //     ws.current.close();
              //   }
              // };
              // ws.current.onopen = () => {};
            }}
          >
            {recording.active ? "Stop Recording" : "Start Recording"}
          </Button>
          <IconButton variant="outlined" onClick={() => setIsNext(true)}>
            <TextIcon />
          </IconButton>
        </ButtonContainer>
        <StyledButton
          id="btn"
          type="submit"
          variant="contained"
          disabled={!recording.available}
          onClick={saveRecord}
        >
          Save
        </StyledButton>
      </div>
    </StyledContainer>
  ) : (
    <Container sx={{ padding: "35px 20px 50px" }}>
      <StyledBlock sx={{ mb: 3 }}>
        <MicroIcon onClick={() => setIsNext(false)} />
        <Typography align="center" sx={{ fontSize: 22, fontWeight: 700 }}>
          Note
        </Typography>
      </StyledBlock>
      <StyledTextField
        multiline
        value={text}
        rows={12}
        onChange={handleChange}
      />
      <StyledButton
        id="btn"
        type="submit"
        variant="contained"
        disabled={!recording.available}
        sx={{ mt: 3 }}
        onClick={saveRecord}
      >
        Save
      </StyledButton>
    </Container>
  );
};

export default App;

const StyledContainer = styled(Container)`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 35px 20px 50px;
  justify-content: space-between;

  canvas {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  audio {
    width: 100%;
  }
`;

const StyledBlock = styled("div")`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;

  & > svg {
    position: absolute;
    left: 0;
  }
`;

const IconButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: none;
  padding: 14px 24px;
  font-size: 16px;
  border: 1px solid #d9d9d9;
`;

const StyledButton = styled(Button)`
  text-transform: none;
  background: #1d2022;
  width: 100%;
  border-radius: 12px;
  box-shadow: none;
  padding: 16px;
  font-size: 16px;

  &:disabled {
    background: #e2e5e8;
  }

  &:hover {
    background: #1d2022;
  }
`;

const ButtonContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;

const StyledTextField = styled(TextField)`
  background: #f8f8f8;
  border-radius: 34px;
  padding: 20px;
  width: 100%;

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  & > div {
    padding: 0;
  }
`;

export async function getServerSideProps() {
  return { props: {} };
}
