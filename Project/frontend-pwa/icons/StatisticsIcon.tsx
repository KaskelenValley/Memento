import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const StatisticsIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
        <path
          d="M8.5 9H2V21H8.5V9Z"
          stroke="#ACCEC8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 3H8.5V21H15V3Z"
          stroke="#ACCEC8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M21.5 13H15V21H21.5V13Z"
          stroke="#ACCEC8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
