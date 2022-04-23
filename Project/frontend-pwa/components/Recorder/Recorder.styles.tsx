import styled from "@emotion/styled";
import { Typography, Container, IconButton } from "@mui/material";

export const TextFlow = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #000000;

  overflow-y: auto;
  scroll-behavior: smooth;
  padding-top: 6px;

  ::before {
    content: "";
    display: block;
    box-shadow: inset 0 10px 7px #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
  }
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
  margin: 0;
  margin-top: 56px;
  margin-bottom: 80px;
  position: relative;
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
