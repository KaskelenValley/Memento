import { FC, useState } from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import { FormDetails } from "../components/Register/FormDetails";
import { FormPassword } from "../components/Register/FormPassword";
import { FormSuccess } from "../components/Register/FormSuccess";

const RegisterPage: FC = () => {
  const [state, setState] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [step, setStep] = useState(0);

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const stepPage = (step) => {
    switch (step) {
      case 0:
        return <FormDetails nextStep={nextStep} setState={setState} />;
      case 1:
        return (
          <FormPassword state={state} nextStep={nextStep} prevStep={prevStep} />
        );
      case 2:
        return <FormSuccess />;
      default:
    }
  };

  return <StyledContainer>{stepPage(step)}</StyledContainer>;
};

export default RegisterPage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  padding: 56px 24px 48px;

  & > div {
    display: none;
  }
`;
