import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const LeaveIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 24 24"
      sx={{ width: 14, height: 14, fill: "none" }}
    >
      <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
      <path
        d="M15.5 21.5C15.5 21.5 9 22 5.5 18C2 14 2 2 2 2C2 2 14 1.5 18 4.5C22 7.5 21 16 21 16"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 22C22 22 16.4104 17.7757 13 14C9.58965 10.2243 8 6.5 8 6.5"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 14L13.5 7.5"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 14L8 13.5"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
