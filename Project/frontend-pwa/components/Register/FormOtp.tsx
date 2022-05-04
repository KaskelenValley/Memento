import { useState } from "react";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";
import OtpInput from "react-otp-input";
import { linkWithCredential } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { ArrowIcon } from "../../icons";
import { countries } from "../../utils/countries";
import { auth, db } from "../../utils/firebase";

export const FormOtp = ({ nextStep, prevStep }) => {
  const [otp, setOtp] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "onChange" });

  const handleChangeOtp = (otp) => setOtp(otp);

  return (
    <>
      <StyledBox>
        <ArrowContainer onClick={() => prevStep()}>
          <ArrowIcon />
        </ArrowContainer>
        <Typography
          sx={{
            fontFamily: "Georgia",
            fontSize: 24,
            fontWeight: 700,
            mt: 4.375,
            mb: 1.5,
          }}
        >
          Enter the code
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            color: "#8F8F8F",
            mb: 6,
          }}
        >
          Confirm phone number to your number was sent a text message with a
          code
        </Typography>
        <OtpInput
          value={otp}
          onChange={handleChangeOtp}
          numInputs={6}
          inputStyle="otp-input"
          containerStyle="otp-container"
          focusStyle="otp-focused"
          placeholder="------"
        />
      </StyledBox>
      <StyledButton
        id="btn"
        type="submit"
        variant="contained"
        disabled={!(otp.length === 6)}
        onClick={() => {
          (window as any).confirmationResult
            .confirm(otp)
            .then((result) => {
              const user = result.user;
              console.log(user);
              // setDoc(doc(db, "users", user.uid), {
              //   id: user.uid,
              //   phoneAddress: `${user.phoneNumber}@gmail.com`,
              //   verified: user.emailVerified,
              // });
              nextStep();
            })
            .catch((error) => {});
        }}
      >
        Continue
      </StyledButton>
    </>
  );
};

const StyledBox = styled("div")`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & .otp-container {
    justify-content: space-between;

    div {
      width: 100%;

      &:not(:first-of-type) {
        margin: 0 0 0 12px;
      }
    }
  }

  & .otp-focused input {
    border: 1px solid #2c2c2c;
  }

  & .otp-input {
    width: 100% !important;
    height: 48px;
    border: 1px solid #d4d4d4;
    border-radius: 10px;
    font-size: 24px;
  }
`;

const ArrowContainer = styled("div")`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: fit-content;
  padding: 8px;
  display: flex;
`;

const StyledButton = styled(Button)`
  text-transform: none;
  background: #1d2022;
  width: 100%;
  border-radius: 12px;
  box-shadow: none;
  padding: 16px;
  margin: 16px 0 24px;
  font-size: 16px;

  &:disabled {
    background: #e2e5e8;
  }

  &:hover {
    background: #1d2022;
  }
`;
