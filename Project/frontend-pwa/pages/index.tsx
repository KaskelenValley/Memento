import { FC, useState } from "react";
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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import NumberFormat from "react-number-format";

import mementoIcon from "../public/memento.svg";
import googleIcon from "../public/icons/google.svg";
import facebookIcon from "../public/icons/facebook.svg";
import passwordIcon from "../public/icons/password.svg";
import arrowDownIcon from "../public/icons/arrow-down.svg";
import { countries } from "../utils/countries";

const Index: FC = () => {
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

  const mainCountry = countries.find((c) => c.code === "KZ");

  return (
    <StyledContainer>
      <StyledBox>
        <Image src={mementoIcon} priority />
        <Typography
          sx={{ fontWeight: 600, fontSize: 22, margin: "64px 0 24px" }}
        >
          Sign in
        </Typography>
        <NumberFormat
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
        <StyledInput
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
        <StyledButton variant="contained" href="main">
          Sign in
        </StyledButton>
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
          <StyledIconButton variant="outlined">
            <Image src={googleIcon} />
          </StyledIconButton>
          <StyledIconButton variant="outlined">
            <Image src={facebookIcon} />
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
        >
          No account? <span style={{ color: "#1D2022" }}>Registration</span>
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
