import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const PlayIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 6 10" sx={{ width: 9, height: 10 }}>
      <path
        d="M6 4.99984L0.750002 0.958386L0.750001 9.04129L6 4.99984Z"
        fill="#69696A"
      />
    </SvgIcon>
  );
};
