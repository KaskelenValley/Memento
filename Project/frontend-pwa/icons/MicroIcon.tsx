import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const MicroIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.79995 3.8C9.79995 2.2536 8.54635 1 6.99995 1C5.45355 1 4.19995 2.2536 4.19995 3.8V9C4.19995 10.5464 5.45355 11.8 6.99995 11.8C8.54635 11.8 9.79995 10.5464 9.79995 9V3.8Z"
          stroke="#4F4F4F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M1 8.6001C1 11.9138 3.68628 14.6001 7 14.6001C10.3137 14.6001 13 11.9138 13 8.6001"
          stroke="#4F4F4F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 14.6001V17.0001"
          stroke="#4F4F4F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
