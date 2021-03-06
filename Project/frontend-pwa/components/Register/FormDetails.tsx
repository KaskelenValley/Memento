import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import { Typography, Button, OutlinedInput } from "@mui/material";

import { ArrowIcon } from "../../icons";

export const FormDetails = ({ nextStep, prevStep, setState }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "onChange" });
  console.log(errors);
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
          Fill in the information
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            color: "#8F8F8F",
            mb: 3.5,
          }}
        >
          Enter your information to
          <br />
          To sign up for the app
        </Typography>
        <StyledInput
          {...register("email", { required: true })}
          type="mail"
          error={!!errors.email}
          placeholder="Email"
        />
        <StyledInput
          {...register("name", { required: true })}
          error={!!errors.name}
          placeholder="Name"
        />
      </StyledBox>
      <StyledButton
        id="btn"
        disabled={!isDirty || !isValid}
        variant="contained"
        onClick={() => {
          setState((prev) => {
            return {
              ...prev,
              name: getValues("name"),
              email: getValues("email"),
            };
          });
          nextStep();
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

const StyledInput = styled(OutlinedInput)`
  border-radius: 12px;
  width: 100%;
  margin-bottom: 8px;

  .MuiOutlinedInput-input {
    padding: 16px;
  }
`;
