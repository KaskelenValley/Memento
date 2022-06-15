import { FC } from "react";
import { Button, Container, OutlinedInput, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

import { ArrowIcon } from "../icons";
import { auth } from "../utils/firebase";

const RecoverPage: FC = () => {
  const { push } = useRouter();
  const {
    register,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "onChange" });

  return (
    <StyledContainer>
      <StyledBox>
        <StyledLink href="/" as={"a"}>
          <ArrowIcon />
        </StyledLink>
        <Typography
          sx={{
            fontFamily: "Georgia",
            fontSize: 24,
            fontWeight: 700,
            mt: 4.375,
            mb: 1.5,
          }}
        >
          Enter email to recover password
        </Typography>
        <Typography sx={{ fontSize: 14, color: "#8F8F8F", mb: 6.25 }}>
          We will send to your email address
          <br />A 6-digit code that you can use to restore access to your
          account.
        </Typography>
        <StyledInput
          {...register("email", { required: true })}
          type="mail"
          error={!!errors.email}
          placeholder="Email"
        />
      </StyledBox>
      <StyledButton
        id="btn"
        variant="contained"
        disabled={!isDirty || !isValid}
        onClick={() => {
          sendPasswordResetEmail(auth, getValues("email"))
            .then(() => {
              toast.success("Password reset email sent!");
              push("/");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        }}
      >
        Continue
      </StyledButton>
    </StyledContainer>
  );
};

export default RecoverPage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  padding: 56px 24px 48px;
`;

const StyledBox = styled("div")`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
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
