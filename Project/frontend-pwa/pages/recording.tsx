import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { FC } from "react";

import CloseButton from "../components/Buttons/CloseButton";
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

const App: FC = () => {
  const { push } = useRouter();
  return (
    <StyledContainer>
      <CloseButton position="top-right" onClick={() => push("/main")} />
      <Recorder />
    </StyledContainer>
  );
};

export default App;
