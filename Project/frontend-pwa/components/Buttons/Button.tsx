import { Button as MuiButton, styled, Typography } from "@mui/material";

export const Button = (props) => {
  return (
    <StyledMuiButton variant="contained" {...props}>
      <ButtonTypography>{props.children}</ButtonTypography>
    </StyledMuiButton>
  );
};

const StyledMuiButton = styled(MuiButton)`
  background: #2c2c2c;
  border-radius: 12px;
  box-shadow: none;
  width: 100%;
  padding: 15px 0;
  text-transform: none;

  &:hover {
    background: #2c2c2c;
  }
`;

const ButtonTypography = styled(Typography)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;
