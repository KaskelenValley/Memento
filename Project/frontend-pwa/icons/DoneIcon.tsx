import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const DoneIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 40 40"
      sx={{ width: 40, height: 40, fill: "none" }}
    >
      <path
        d="M11.6667 20.5556L17.2222 26.1111L28.3333 15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
