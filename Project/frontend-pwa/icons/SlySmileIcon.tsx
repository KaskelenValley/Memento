import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const SlySmileIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 24 24"
      sx={{ width: 14, height: 14, fill: "none" }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 0H0V24H24V0Z" fill="white" fill-opacity="0.01" />
        <path
          d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z"
          stroke="#333333"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M15.5 9V9.5"
          stroke="#333333"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.5 9V9.5"
          stroke="#333333"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.5 15.5H15.5"
          stroke="#333333"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
