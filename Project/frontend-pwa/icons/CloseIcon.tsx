import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const CloseIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
      <path
        d="M7 7L17 17"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 17L17 7"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
