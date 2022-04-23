import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const ExclamationIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ width: 32, height: 32 }} viewBox="0 0 32 32">
      <path
        d="M17 8.53332C17 7.98103 16.5523 7.53332 16 7.53332C15.4477 7.53332 15 7.98103 15 8.53332H17ZM15 17.0666C15 17.6189 15.4477 18.0667 16 18.0667C16.5523 18.0667 17 17.6189 17 17.0666H15ZM17 22.4C17 21.8477 16.5523 21.4 16 21.4C15.4477 21.4 15 21.8477 15 22.4H17ZM15 22.4213C15 22.9736 15.4477 23.4213 16 23.4213C16.5523 23.4213 17 22.9736 17 22.4213H15ZM15 8.53332V17.0666H17V8.53332H15ZM15 22.4V22.4213H17V22.4H15ZM16 29.9333C8.30482 29.9333 2.06665 23.6951 2.06665 16H0.0666504C0.0666504 24.7997 7.20025 31.9333 16 31.9333V29.9333ZM29.9333 16C29.9333 23.6951 23.6951 29.9333 16 29.9333V31.9333C24.7997 31.9333 31.9333 24.7997 31.9333 16H29.9333ZM16 2.06665C23.6951 2.06665 29.9333 8.30482 29.9333 16H31.9333C31.9333 7.20025 24.7997 0.0666504 16 0.0666504V2.06665ZM16 0.0666504C7.20025 0.0666504 0.0666504 7.20025 0.0666504 16H2.06665C2.06665 8.30482 8.30482 2.06665 16 2.06665V0.0666504Z"
        fill="#E72B32"
      />
    </SvgIcon>
  );
};