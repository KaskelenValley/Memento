import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const ArrowIcon = (props: SvgIconProps) => {
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
          d="M4 12.3335H20"
          stroke="#2C2C2C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33331 17.6667L4 12.3333L9.33331 7"
          stroke="#2C2C2C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
