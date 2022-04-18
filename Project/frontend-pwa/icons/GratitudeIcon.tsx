import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const GratitudeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 67 66"
      sx={{ width: 67, height: 66, fill: "none" }}
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
      <path d="M49 17H17V49H49V17Z" fill="white" fill-opacity="0.01" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.3334 33.6668C46.3334 26.303 40.3639 20.3335 33.0001 20.3335C25.6363 20.3335 19.6667 26.303 19.6667 33.6668H46.3334Z"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.3333 38.3335C26.3333 42.0154 29.3181 45.0002 32.9999 45.0002C36.6818 45.0002 39.6666 42.0154 39.6666 38.3335H26.3333Z"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
