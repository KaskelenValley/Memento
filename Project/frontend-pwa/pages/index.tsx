import { FC, useEffect, useState } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  OutlinedInput,
  Button,
  IconButton,
  Select,
  InputAdornment,
  TextField,
  MenuItem,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import NumberFormat from "react-number-format";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";

import mementoIcon from "../public/memento.svg";
import passwordIcon from "../public/icons/password.svg";
import { countries } from "../utils/countries";
import { auth, db } from "../utils/firebase";
import { FacebookIcon, GoogleIcon } from "../icons";
import { ArrowDownIcon } from "../icons";
import Link from "next/link";

const Index: FC = () => {
  const [values, setValues] = useState({
    textmask: "(100) 000-0000",
    numberformat: "1320",
    showPassword: false,
  });

  const router = useRouter();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "onChange" });

  const [openBackdrop, setOpenBackdrop] = useState(true);

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

  const mainCountry = countries.find((c) => c.code === "KZ");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //router.push("main");
      }
      setOpenBackdrop(false);
    });

    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          const user = result.user;

          setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            emailAddress: user.email,
            verified: user.emailVerified,
          });

          router.push("main");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorMessage);
      });
  }, []);

  const onSubmit = (data) => {
    setPersistence(auth, browserLocalPersistence).then(() =>
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          router.push("/main");
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        })
    );
  };

  return (
    <StyledContainer>
      <StyledBox>
        <Image src={mementoIcon} priority />
        <Typography
          sx={{ fontWeight: 600, fontSize: 22, margin: "64px 0 24px" }}
        >
          Sign in
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            {...register("email", { required: true })}
            placeholder="Email"
            error={!!errors.email}
            type="mail"
          />
          <StyledInput
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Password"
            error={!!errors.password}
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
          <StyledButton
            id="btn"
            type="submit"
            variant="contained"
            disabled={!isDirty || !isValid}
          >
            Sign in
          </StyledButton>
        </form>
        <Link href="recover">
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: 12,
              fontWeight: 600,
              color: "#8C9AA3",
              textAlign: "center",
            }}
          >
            Forgot password?
          </Typography>
        </Link>
      </StyledBox>
      <Box>
        <Box display="flex" justifyContent="space-between">
          <StyledHr />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: 12,
              fontWeight: 500,
              color: "#C5CCD1",
            }}
          >
            Or
          </Typography>
          <StyledHr />
        </Box>
        <Box display="flex">
          <StyledIconButton
            variant="outlined"
            onClick={() => {
              setPersistence(auth, browserLocalPersistence).then(() =>
                signInWithRedirect(auth, provider)
              );
            }}
          >
            <GoogleIcon />
          </StyledIconButton>
          <StyledIconButton variant="outlined">
            <FacebookIcon />
          </StyledIconButton>
        </Box>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: 12,
            fontWeight: 600,
            color: "#8C9AA3",
            textAlign: "center",
          }}
          onClick={() => router.push("register")}
        >
          No account? <span style={{ color: "#1D2022" }}>Registration</span>
        </Typography>
      </Box>
      <Backdrop open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </StyledContainer>
  );
};

export default Index;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
  padding: 56px 24px 48px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const StyledInput = styled(OutlinedInput)`
  border-radius: 12px;
  width: 100%;
  margin-bottom: 8px;

  .MuiOutlinedInput-input {
    padding: 16px;
  }

  .MuiOutlinedInput-notchedOutline,
  &.MuiOutlinedInput-root.Mui-focused fieldset {
    border: 1px solid #c5ccd1;
  }
`;

const StyledTextField = styled(TextField)`
  width: 100%;

  & > div {
    border-radius: 12px;
  }

  margin-bottom: 8px;

  .MuiSelect-select {
    font-weight: 500;
  }

  .MuiOutlinedInput-input {
    padding: 16px;
  }

  .MuiOutlinedInput-notchedOutline,
  &.MuiOutlinedInput-root.Mui-focused fieldset {
    border: 1px solid #c5ccd1;
  }
`;

const StyledSelect = styled(Select)`
  border: none;
  width: 60px;

  &.MuiSelect-select,
  .MuiSelect-standard,
  .MuiInput-input {
    padding-right: 14px !important;
  }

  &::before,
  &::after {
    border: none;
  }
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

const StyledHr = styled("hr")`
  margin: 8px 0;
  background: #efefef;
  border: none;
  width: 64px;
`;

const StyledIconButton = styled(Button)`
  width: 100%;
  margin: 32px 0 24px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 12px;
  border: 1px solid #c5ccd1;

  &:first-of-type {
    margin-right: 8px;
  }
`;
