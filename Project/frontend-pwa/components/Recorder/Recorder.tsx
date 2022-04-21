import { Container, IconButton, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { WaveIcon } from "../../icons";
import { StopIcon } from "../../icons/StopIcon";

export const TextFlow = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #000000;
`;

export const StyledContainer = styled(Container)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonLabel = styled(Typography)`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  /* identical to box height */
  text-align: center;
  text-transform: uppercase;

  color: #8f8f8f;
  margin-top: 32px;
`;

export const RoundButton = styled(IconButton)<{ isRecording: boolean }>`
  width: 89px;
  height: 89px;
  background: ${({ isRecording }) =>
    isRecording ? "rgba(172, 206, 200, 0.15)" : "#accec8"};
  border-radius: 50%;
  border: 1px solid #accec8;
`;

export const TitleContainer = styled(Container)`
  width: 325px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
  margin-bottom: 80px;
`;

export const VoiceNoteTitle = styled(Typography)`
  color: rgba(44, 44, 44, 0.1);
  font-style: normal;
  font-weight: 500;
  font-size: 54px;
  line-height: 64px;
`;

export const SecondaryTitle = styled(Typography)`
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  letter-spacing: 0.385714px;
`;

interface Props {}

const App: React.FC<Props> = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <StyledContainer>
      <TitleContainer>
        {isRecording ? (
          <TextFlow>Start speaking...</TextFlow>
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
        onClick={() => setIsRecording((prev) => !prev)}
      >
        {isRecording ? (
          <StopIcon fontSize="inherit" />
        ) : (
          <WaveIcon fontSize="inherit" />
        )}
      </RoundButton>
      <ButtonLabel>Tap to start</ButtonLabel>
    </StyledContainer>
  );
};

export default App;
