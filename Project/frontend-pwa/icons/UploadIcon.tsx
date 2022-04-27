import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const UploadIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20" sx={{ width: 20, height: 20 }}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 4.4C0 3.07452 1.11929 2 2.5 2H17.5C18.8807 2 20 3.07452 20 4.4V15.6C20 16.9255 18.8807 18 17.5 18H2.5C1.11929 18 0 16.9255 0 15.6V4.4ZM2.5 3.6C2.03976 3.6 1.66667 3.95817 1.66667 4.4V8.86863L3.82149 6.8C4.47236 6.17516 5.52764 6.17516 6.17851 6.8L10.8333 11.2686L12.1548 10C12.8057 9.37516 13.861 9.37516 14.5118 10L18.3333 13.6686V4.4C18.3333 3.95817 17.9602 3.6 17.5 3.6H2.5ZM18.2806 15.8807L13.3333 11.1314L10.8333 13.5314L5 7.93137L1.66667 11.1314V15.6C1.66667 16.0418 2.03976 16.4 2.5 16.4H17.5C17.8573 16.4 18.1621 16.1841 18.2806 15.8807ZM13.3333 6.8C13.3333 5.91634 14.0795 5.2 15 5.2C15.9205 5.2 16.6667 5.91634 16.6667 6.8C16.6667 7.68366 15.9205 8.4 15 8.4C14.0795 8.4 13.3333 7.68366 13.3333 6.8Z"
        fill="#293644"
      />
    </SvgIcon>
  );
};
