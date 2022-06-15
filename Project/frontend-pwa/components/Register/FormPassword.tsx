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
import { doc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
} from "firebase/auth";
import toast from "react-hot-toast";

import { ArrowIcon } from "../../icons";
import passwordIcon from "../../public/icons/password.svg";
import { auth, db } from "../../utils/firebase";

export const FormPassword = ({ nextStep, prevStep, state }) => {
  const {
    register,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "onChange" });
  const [user] = useAuthState(auth);

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
          Think of a password.
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            color: "#8F8F8F",
            mb: 3.5,
          }}
        >
          To keep your data safe, come up with a strong password. The password
          must be at least 6 characters long
        </Typography>
        <StyledInput
          {...register("password", {
            required: true,
            minLength: 6,
          })}
          error={!!errors.password}
          placeholder="Password"
          type={values.showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                <Image src={passwordIcon} />
              </IconButton>
            </InputAdornment>
          }
        />
        <StyledInput
          {...register("repeatPassword", {
            required: true,
            validate: (value) => value === getValues("password"),
          })}
          error={!!errors.repeatPassword}
          placeholder="Repeat password"
          type={values.showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                <Image src={passwordIcon} />
              </IconButton>
            </InputAdornment>
          }
        />
      </StyledBox>
      <StyledButton
        id="btn"
        disabled={!isDirty || !isValid}
        variant="contained"
        onClick={() => {
          setPersistence(auth, browserLocalPersistence).then(() =>
            createUserWithEmailAndPassword(
              auth,
              state.email,
              getValues("password")
            )
              .then((userCredential) => {
                const user = userCredential.user;

                setDoc(doc(db, "users", user.uid), {
                  id: user.uid,
                  verified: user.emailVerified,
                  emailAddress: state.email,
                  name: state.name,
                  mood: [],
                });

                nextStep();
              })
              .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
              })
          );
        }}
      >
        Continue
      </StyledButton>
    </>
  );
};

const StyledBox = styled("form")`
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
