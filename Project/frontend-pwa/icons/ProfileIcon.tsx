import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const ProfileIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ fill: "none" }}>
      <path d="M24 0H0V24H24V0Z"  fillOpacity="0.01" />
      <path
        d="M12 10C13.933 10 15.5 8.433 15.5 6.5C15.5 4.56701 13.933 3 12 3C10.067 3 8.5 4.56701 8.5 6.5C8.5 8.433 10.067 10 12 10Z"
        stroke="#ACCEC8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 20.4V21H21V20.4C21 18.1598 21 17.0397 20.5641 16.184C20.1806 15.4314 19.5686 14.8195 18.816 14.436C17.9603 14 16.8402 14 14.6 14H9.4C7.1598 14 6.0397 14 5.18405 14.436C4.43139 14.8195 3.81947 15.4314 3.43598 16.184C3 17.0397 3 18.1598 3 20.4Z"
        stroke="#ACCEC8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
