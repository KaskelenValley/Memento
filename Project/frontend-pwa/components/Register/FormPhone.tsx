import { useState, useEffect } from "react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import NumberFormat from "react-number-format";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Button,
  Select,
  InputAdornment,
  MenuItem,
  Checkbox,
  FormControlLabel,
  TextField,
  Modal,
  Box,
} from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { collection, getDocs, query } from "firebase/firestore";

import {
  ArrowIcon,
  CheckboxCheckedIcon,
  CheckboxIcon,
  ArrowDownIcon,
  ExclamationIcon,
} from "../../icons";
import { countries } from "../../utils/countries";
import { auth, db } from "../../utils/firebase";
import toast from "react-hot-toast";

export const FormPhone = ({ nextStep, prevStep }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const {
    getValues,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        },
      },
      auth
    );
  }, []);

  return (
    <>
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
            mb: 3.75,
          }}
        >
          Enter phone number
        </Typography>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: true,
            validate: (value) => value.split(" ").join("").length === 10,
          }}
          render={({ field }) => (
            <NumberFormat
              {...field}
              type="tel"
              error={!!errors.phone}
              customInput={StyledTextField}
              format="### ### ## ##"
              placeholder="Phone number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StyledSelect
                      variant="standard"
                      defaultValue={mainCountry.code}
                      IconComponent={() => <ArrowDownIcon />}
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
        <CheckboxContainer
          control={
            <Checkbox
              icon={<CheckboxIcon />}
              checkedIcon={<CheckboxCheckedIcon />}
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          }
          label={
            <Typography
              sx={{
                fontSize: 14,
                color: "#8F8F8F",
              }}
            >
              By continuing, you agree to the collection and processing of
              personal data
            </Typography>
          }
        />
      </StyledBox>
      <StyledButton
        id="btn"
        variant="contained"
        disabled={!checked || !isDirty || !isValid}
        onClick={async () => {
          let isExist = false;
          const q = query(collection(db, "users"));
          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((doc) => {
            const phoneAddress = doc.data().phoneAddress;

            if (phoneAddress) {
              const phone = phoneAddress.slice(0, phoneAddress.indexOf("@"));

              if (phone === `+7${getValues("phone").split(" ").join("")}`) {
                handleOpen();
                isExist = true;
              }
            }
          });

          if (!isExist)
            signInWithPhoneNumber(
              auth,
              `+7${getValues("phone").split(" ").join("")}`,
              appVerifier
            )
              .then((confirmationResult) => {
                (window as any).confirmationResult = confirmationResult;
                nextStep();
              })
              .catch((error) => {
                toast.error(error.message);
              });
        }}
      >
        Continue
      </StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalBox>
          <ExclamationIcon />
          <Typography
            sx={{ fontWeight: 500, fontSize: 12, mt: 1.75, mb: 3 }}
            textAlign="center"
          >
            A user with this phone
            <br />
            is already registered
          </Typography>
          <StyledHr />
          <Typography onClick={() => handleClose()}>OK</Typography>
        </StyledModalBox>
      </Modal>
    </>
  );
};

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

const CheckboxContainer = styled(FormControlLabel)`
  margin: 0;

  .MuiCheckbox-root {
    padding: 0;
    margin-right: 12px;
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

const StyledTextField = styled(TextField)`
  width: 100%;

  & > div {
    border-radius: 12px;
  }

  margin-bottom: 15px;

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

const StyledModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(147, 161, 169, 0.2);
  border-radius: 16px;
  padding: 25px 0 15px;
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledHr = styled("hr")`
  border: 1px solid #d4d4d4;
  width: 100%;
`;
