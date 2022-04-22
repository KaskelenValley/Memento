import { useEffect, useRef, useState } from "react";
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

interface Props {}

const App: React.FC<Props> = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState("");
  const recorder = useRef(null);
  const { timer, isPaused, handleStart, handlePause, handleReset } =
    useTimer(0);

  useEffect(() => {
    recorder.current = new Recorder();
    recorder.current.setOnResult((res) => setResult(res));
    recorder.current.init();
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

  return (
    <StyledContainer>
      <TitleContainer>
        {isRecording || isPaused ? (
          <TextFlow>{result || "Start speaking..."}</TextFlow>
        ) : (
          <>
            <VoiceNoteTitle>Voice Note</VoiceNoteTitle>
            <SecondaryTitle>What’s on your mind?</SecondaryTitle>
          </>
        )}
      </TitleContainer>
      <RoundButton
        aria-label="record"
        isRecording={isRecording}
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
    </StyledContainer>
  );
};

export default App;
