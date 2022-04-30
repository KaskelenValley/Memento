import styled from "@emotion/styled";
import { Typography, Container, IconButton } from "@mui/material";

export const TextFlow = styled(Typography)`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 30px;
  text-align: center;

  color: #000000;

  overflow-y: auto;
  scroll-behavior: smooth;
  padding-top: 6px;

  &::-webkit-scrollbar {
    display: none;
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
  margin-bottom: 81px;
`;

export const RoundButton = styled(IconButton)<{ $isrecording: boolean }>`
  width: 89px;
  height: 89px;
  background: ${({ $isrecording }) =>
    $isrecording ? "rgba(172, 206, 200, 0.15)" : "#accec8"};
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
  -webkit-mask-image: linear-gradient(0deg, #000 60%, transparent);
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
