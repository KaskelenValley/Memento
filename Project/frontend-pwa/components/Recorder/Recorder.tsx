import { useEffect, useRef, useState } from "react";
import { Button, styled } from "@mui/material";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

import { Recorder } from "../../hooks/useRecorder";
import useTimer from "../../hooks/useTimer";
import { WaveIcon } from "../../icons";
import { StopIcon } from "../../icons/StopIcon";
import {
  StyledContainer,
  TitleContainer,
  TextFlow,
  VoiceNoteTitle,
  SecondaryTitle,
  RoundButton,
  ButtonLabel,
} from "./Recorder.styles";
import { formatTime } from "../../utils";
import RecordPreview from "./RecordPreview";
import { auth } from "../../utils/firebase";

interface Props {}

const App: React.FC<Props> = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [title, setTitle] = useState("");
  const [result, setResult] = useState("");
  const recorder = useRef(null);
  const textFlow = useRef(null);
  const { timer, isPaused, handleStart, handlePause, handleReset } =
    useTimer(0);
  const { query } = useRouter();
  const [user] = useAuthState(auth);
  const type = query.type || "default";

  useEffect(() => {
    fetch("https://memento-srs-node-dev.herokuapp.com/healthcheck")
      .then((res) => res.json())
      .then((res) => {
        recorder.current = new Recorder();
        recorder.current.setOnResult((res) => {
          setResult(res);
          textFlow.current.scrollTop = textFlow.current.scrollHeight;
        });
        recorder.current.init();

        if (res.status === "OK") {
          recorder.current.setIsStream(true);
        } else {
          recorder.current.setIsStream(false);
        }
      });
  }, []);

  const handleRecord = () => {
    if (!recorder.current) return;

    if (isRecording) {
      recorder.current.stopRecording();
      handlePause();
      setIsRecording(false);
    } else {
      recorder.current.startRecording();
      setIsRecording(true);
      if (isPaused) {
        handleReset();
      }
      handleStart();
    }
  };

  return !isDone ? (
    <StyledContainer>
      <TitleContainer>
        {isRecording || isPaused ? (
          <TextFlow ref={textFlow}>{result || "Start speaking..."}</TextFlow>
        ) : (
          <>
            <VoiceNoteTitle>Voice Note</VoiceNoteTitle>
            <SecondaryTitle>What’s on your mind?</SecondaryTitle>
          </>
        )}
      </TitleContainer>
      <RoundButton
        aria-label="record"
        $isrecording={isRecording}
        onClick={handleRecord}
      >
        {isRecording ? (
          <StopIcon fontSize="inherit" />
        ) : (
          <WaveIcon fontSize="inherit" />
        )}
      </RoundButton>
      <ButtonLabel>
        {isRecording
          ? formatTime(timer)
          : isPaused
          ? "Rerecord"
          : "Tap to speak"}
      </ButtonLabel>
      <StyledButton
        disabled={!(!isRecording && result)}
        onClick={() => setIsDone(true)}
      >
        Done
      </StyledButton>
    </StyledContainer>
  ) : (
    <RecordPreview
      result={result}
      setTitle={setTitle}
      setResult={setResult}
      save={() => recorder.current.saveRecord(user.uid, title, result, type)}
    />
  );
};

export default App;

const StyledButton = styled(Button)`
  background: #000000;
  border-radius: 12px;
  color: #fff;
  width: 100%;
  height: 49px;
  text-transform: none;

  :disabled {
    background: #f3f3f3;
    color: #8f8f8f;
  }
`;
