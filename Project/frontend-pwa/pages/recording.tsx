import { Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC } from "react";
import CloseButton from "../components/Button/CloseButton";
import Recorder from "../components/Recorder/Recorder";

export const StyledContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
  padding: 25px 25px 50px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  background: #000000;
  border-radius: 12px;
  color: #fff;
  width: 325px;
  height: 49px;

  :disabled {
    background: #f3f3f3;
    color: #8f8f8f;
  }
`;

const App: FC = () => {
  return (
    <StyledContainer>
      <CloseButton position="top-right" onClick={() => console.log("Hello")} />
      <Recorder />
      <StyledButton disabled>Done</StyledButton>
    </StyledContainer>
  );
};

export default App;
