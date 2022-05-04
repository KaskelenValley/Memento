import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const WritingIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 68 66"
      sx={{ width: 68, height: 66, fill: "none" }}
    >
      <rect
        x="0.5"
        y="0.5"
        width="66"
        height="65"
        rx="32.5"
        fill="#E9F3F0"
        fillOpacity="0.5"
        stroke="#D8F1ED"
      />
      <path d="M49 17H17V49H49V17Z" fill="white" fillOpacity="0.01" />
      <path
        d="M20.55 46.0001L26.2067 46.0002L46.9485 25.2584L41.2916 19.6016L20.5498 40.3433L20.55 46.0001Z"
        stroke="#2C2C2C"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M35.6348 25.2583L41.2916 30.9152"
        stroke="#2C2C2C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
