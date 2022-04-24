import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const StopIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2Z"
        fill="#ACCEC8"
      />
    </SvgIcon>
  );
};
