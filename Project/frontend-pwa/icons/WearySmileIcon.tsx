import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const WearySmileIcon = (props: SvgIconProps | any) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{ width: 14, height: 14, fill: "none" }}
      {...props}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
        <path
          d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z"
          stroke={props.fillStroke ? props.fillStroke : "#333333"}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 14.5C14.5 14.5 15.5 16.5 15.5 16.5H8.5C8.5 16.5 9.5 14.5 12 14.5Z"
          stroke={props.fillStroke ? props.fillStroke : "#333333"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 9L7.5 10"
          stroke={props.fillStroke ? props.fillStroke : "#333333"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 9L16.5 10"
          stroke={props.fillStroke ? props.fillStroke : "#333333"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
