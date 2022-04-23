import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const CheckboxCheckedIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="white" />
        <rect width="24" height="24" rx="8" fill="#2C2C2C" />
        <path
          d="M7 12.3333L10.3333 15.6667L17 9"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
