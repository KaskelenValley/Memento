import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const PlusIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C12.789 2 13.4286 2.63959 13.4286 3.42857V20.5714C13.4286 21.3604 12.789 22 12 22C11.211 22 10.5714 21.3604 10.5714 20.5714V3.42857C10.5714 2.63959 11.211 2 12 2Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 11.211 2.63959 10.5714 3.42857 10.5714H20.5714C21.3604 10.5714 22 11.211 22 12C22 12.789 21.3604 13.4286 20.5714 13.4286H3.42857C2.63959 13.4286 2 12.789 2 12Z"
        fill="white"
      />
    </SvgIcon>
  );
};
