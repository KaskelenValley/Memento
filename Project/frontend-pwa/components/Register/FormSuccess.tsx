import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";

import { ArrowIcon } from "../../icons";
import passwordIcon from "../../public/icons/password.svg";

export const FormSuccess = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "onChange" });

  const [values, setValues] = useState({
    textmask: "(100) 000-0000",
    numberformat: "1320",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <section></section>
      <StyledBox>
        <Typography
          sx={{
            fontFamily: "Georgia",
            fontSize: 24,
            fontWeight: 700,
            mt: 4.375,
            mb: 1.5,
          }}
          textAlign="center"
        >
          Successful!
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            color: "#8F8F8F",
            mb: 3.5,
          }}
          textAlign="center"
        >
          Password has been successfully
          <br />
          changed!
        </Typography>
      </StyledBox>
      <StyledButton id="btn" href="main" variant="contained">
        To main page
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
