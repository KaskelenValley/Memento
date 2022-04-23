import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const CheckboxIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="23"
          height="23"
          rx="7.5"
          stroke="#D4D4D4"
        />
      </svg>
    </SvgIcon>
  );
};
