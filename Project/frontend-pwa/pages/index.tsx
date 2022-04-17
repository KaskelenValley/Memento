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
  Modal,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import NumberFormat from "react-number-format";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  linkWithCredential,
  EmailAuthProvider,
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";

import mementoIcon from "../public/memento.svg";
import passwordIcon from "../public/icons/password.svg";
import arrowDownIcon from "../public/icons/arrow-down.svg";
import { countries } from "../utils/countries";
import { auth, db } from "../utils/firebase";
import { FacebookIcon, GoogleIcon } from "../icons";

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

  const [open, setOpen] = useState(false);
  const [code, setCode] = useState();
  const [confirm, setConfirm] = useState<any>();
  const [login, setLogin] = useState<boolean>(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const appVerifier =
    typeof window !== "undefined" ? (window as any).recaptchaVerifier : [];

  useEffect(() => {
    (window as any).recaptchaVerifier = new RecaptchaVerifier(
      "btn",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      },
      auth
    );
  }, []);

  const onSubmit = (data) => {
    // signInWithPhoneNumber(auth, `+7${data.phone}`, appVerifier)
    //   .then((confirmationResult) => {
    //     // SMS sent. Prompt user to type the code from the message, then sign the
    //     // user in with confirmationResult.confirm(code).
    //     (window as any).confirmationResult = confirmationResult;
    //     // ...
    //     console.log(confirmationResult);
    //     setConfirm(confirmationResult);
    //   })
    //   .catch((error) => {
    //     // Error; SMS not sent
    //     // ...
    //     console.log(error);
    //   });

    login
      ? signInWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            router.push("/main");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          })
      : createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            setDoc(doc(db, "users", user.uid), {
              id: user.uid,
              emailAddress: user.email,
              verified: user.emailVerified,
            });
            setLogin(true);
            alert("Account created! Please sign in");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
          });
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  console.log(errors, isValid, isDirty);

  return (
    <StyledContainer>
      <StyledBox>
        <Image src={mementoIcon} priority />
        <Typography
          sx={{ fontWeight: 600, fontSize: 22, margin: "64px 0 24px" }}
        >
          {login ? "Sign in" : "Sign up"}
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
            //onClick={handleOpen}
          >
            {login ? "Sign in" : "Sign up"}
          </StyledButton>
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Controller
                name="phone"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <NumberFormat
                    {...field}
                    customInput={StyledTextField}
                    format="### ### ## ##"
                    placeholder="Phone number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <StyledSelect
                            variant="standard"
                            defaultValue={mainCountry.code}
                            IconComponent={() => <Image src={arrowDownIcon} />}
                          >
                            {countries.map((c) => (
                              <MenuItem key={c.code} value={c.code}>
                                +{c.phone}
                              </MenuItem>
                            ))}
                          </StyledSelect>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Введите код
              </Typography>
              <TextField onChange={(e: any) => setCode(e.target.value)} />
              <StyledButton
                id="btn"
                type="submit"
                variant="contained"
                onClick={() => {
                  confirm
                    .confirm(code)
                    .then((result) => {
                      // User signed in successfully.
                      const user = result.user;
                      // ...
                      console.log(result);
                      linkWithCredential(auth.currentUser, credential)
                        .then((usercred) => {
                          const user = usercred.user;
                          console.log("Account linking success", user);
                        })
                        .catch((error) => {
                          console.log("Account linking error", error);
                        });
                      console.log(user);
                      // if (user) {
                      //   router.push("main");
                      // }
                    })
                    .catch((error) => {
                      // User couldn't sign in (bad verification code?)
                      // ...
                    });
                }}
              >
                Verify
              </StyledButton>
              <StyledIconButton
                variant="outlined"
                sx={{ margin: 0 }}
                onClick={handleClose}
              >
                Close
              </StyledIconButton>
            </Box>
          </Modal> */}
        </form>
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
              signInWithPopup(auth, provider)
                .then((result) => {
                  const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                  const token = credential.accessToken;
                  const user = result.user;
                  setDoc(doc(db, "users", user.uid), {
                    id: user.uid,
                    emailAddress: user.email,
                    verified: user.emailVerified,
                  });
                  router.push("main");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  const email = error.email;
                  const credential =
                    GoogleAuthProvider.credentialFromError(error);
                  alert(errorMessage);
                });
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
          onClick={() => setLogin(!login)}
        >
          {login ? (
            <>
              No account? <span style={{ color: "#1D2022" }}>Registration</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span style={{ color: "#1D2022" }}>Login</span>
            </>
          )}
        </Typography>
      </Box>
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
