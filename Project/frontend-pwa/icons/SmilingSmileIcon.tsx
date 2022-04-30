import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const SmilingSmileIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 24 24"
      sx={{ width: 14, height: 14, fill: "none" }}
    >
      <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
      <path
        d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z"
        stroke="#333333"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 15.5C15.5 15.5 14.5 17.5 12 17.5C9.5 17.5 8.5 15.5 8.5 15.5"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 9V11"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9V11"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
