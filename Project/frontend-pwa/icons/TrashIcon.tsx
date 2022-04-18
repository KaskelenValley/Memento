import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const TrashIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.7481 9.33297V18.332C18.7481 19.989 17.4051 21.332 15.7481 21.332H8.41505C6.75805 21.332 5.41505 19.989 5.41505 18.332V9.33297M4.08105 5.33497H20.0811M10.7481 2.66797H13.4151M8.66205 10.667V17.332M12.0811 10.667V17.332M15.3721 10.667V17.332"
          stroke="black"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
