import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const SlySmileIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 14 14"
      sx={{ width: 14, height: 14, fill: "none" }}
    >
      <path d="M14 0H0V14H14V0Z" fill="white" fill-opacity="0.01" />
      <path
        d="M7.00008 12.8332C10.2217 12.8332 12.8334 10.2215 12.8334 6.99984C12.8334 3.77817 10.2217 1.1665 7.00008 1.1665C3.77842 1.1665 1.16675 3.77817 1.16675 6.99984C1.16675 10.2215 3.77842 12.8332 7.00008 12.8332Z"
        stroke="#69696A"
        stroke-linejoin="round"
      />
      <path
        d="M9.91667 6.12484L8.75 5.5415"
        stroke="#69696A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.54167 5.5415L4.375 6.12484"
        stroke="#69696A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.04159 9.0415C9.04159 9.0415 8.45825 10.2082 6.99992 10.2082C5.54159 10.2082 4.95825 9.0415 4.95825 9.0415"
        stroke="#69696A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
};
