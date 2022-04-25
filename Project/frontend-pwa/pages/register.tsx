import { FC, useState } from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import { FormPhone } from "../components/Register/FormPhone";
import { FormOtp } from "../components/Register/FormOtp";
import { FormDetails } from "../components/Register/FormDetails";
import { FormPassword } from "../components/Register/FormPassword";
import { FormSuccess } from "../components/Register/FormSuccess";

const RegisterPage: FC = () => {
  const [state, setState] = useState({
    confirmationResult: "",
    email: "",
    name: "",
    password: "",
  });

  const [step, setStep] = useState(1);

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const stepPage = (step) => {
    switch (step) {
      case 1:
        return <FormPhone nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <FormOtp nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return (
          <FormDetails
            nextStep={nextStep}
            prevStep={prevStep}
            setState={setState}
          />
        );
      case 4:
        return (
          <FormPassword nextStep={nextStep} prevStep={prevStep} state={state} />
        );
      case 5:
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
