import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const SettingsIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 32 32" sx={{ width: 32, height: 32 }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0002 2.66667C15.666 2.66667 15.335 2.67893 15.0074 2.703C14.6099 2.73222 14.1911 3.07667 14.1041 3.6761L13.9777 4.54688C13.7601 6.04583 12.7321 7.15835 11.5899 7.77207C11.418 7.86444 11.2493 7.96206 11.0839 8.06473C9.98086 8.7498 8.50243 9.08399 7.09502 8.52277L6.27539 8.19593C5.71347 7.97186 5.20569 8.16141 4.98088 8.49059C4.60797 9.03663 4.27471 9.61164 3.98515 10.2114C3.81255 10.569 3.90111 11.103 4.37659 11.4779L5.07288 12.0271C6.2605 12.9636 6.71165 14.4081 6.67146 15.7048C6.66843 15.8028 6.6669 15.9012 6.6669 16C6.6669 16.0988 6.66843 16.1972 6.67146 16.2952C6.71165 17.5919 6.2605 19.0364 5.07288 19.9729L4.37659 20.5221C3.90111 20.897 3.81255 21.431 3.98515 21.7886C4.27471 22.3884 4.60797 22.9634 4.98088 23.5094C5.20569 23.8386 5.71347 24.0281 6.27539 23.8041L7.09503 23.4772C8.50243 22.916 9.98086 23.2502 11.0839 23.9353C11.2493 24.0379 11.418 24.1356 11.5899 24.2279C12.7321 24.8417 13.7601 25.9542 13.9777 27.4531L14.1041 28.3239C14.1911 28.9233 14.6099 29.2678 15.0074 29.297C15.335 29.3211 15.666 29.3333 16.0002 29.3333C16.3343 29.3333 16.6654 29.3211 16.993 29.297C17.3905 29.2678 17.8093 28.9233 17.8963 28.3239L18.0228 27.4531C18.2404 25.9542 19.2684 24.8417 20.4106 24.2279C20.5825 24.1356 20.7512 24.0379 20.9165 23.9353C22.0196 23.2502 23.498 22.916 24.9054 23.4772L25.7249 23.804C26.2869 24.0281 26.7947 23.8385 27.0195 23.5094C27.3924 22.9633 27.7256 22.3883 28.0152 21.7885C28.1878 21.4309 28.0992 20.8969 27.6238 20.522L26.9276 19.973C25.74 19.0364 25.2888 17.5919 25.329 16.2952C25.332 16.1972 25.3336 16.0988 25.3336 16C25.3336 15.9012 25.332 15.8028 25.329 15.7048C25.2888 14.4081 25.74 12.9636 26.9276 12.027L27.6238 11.478C28.0992 11.1031 28.1878 10.5691 28.0152 10.2115C27.7256 9.61172 27.3924 9.0367 27.0195 8.49064C26.7947 8.16146 26.2869 7.97191 25.7249 8.19598L24.9054 8.52277C23.498 9.08399 22.0196 8.7498 20.9165 8.06473C20.7512 7.96206 20.5825 7.86444 20.4106 7.77207C19.2684 7.15835 18.2403 6.04583 18.0228 4.54688L17.8963 3.67611C17.8093 3.07669 17.3905 2.73223 16.993 2.70302C16.6654 2.67894 16.3343 2.66667 16.0002 2.66667ZM14.812 0.0435096C15.2045 0.014662 15.6007 0 16.0002 0C16.3996 0 16.7959 0.0146671 17.1885 0.0435247C19.0344 0.179208 20.2992 1.66636 20.5353 3.29301L20.6618 4.16379C20.7283 4.62223 21.0726 5.10058 21.6727 5.42302C21.8939 5.54186 22.1109 5.6674 22.3234 5.79939C22.9011 6.15819 23.4872 6.21743 23.9177 6.04578L24.7372 5.71899C26.262 5.11095 28.1794 5.46073 29.2216 6.98675C29.6689 7.64175 30.0689 8.33188 30.4167 9.05224C31.221 10.7184 30.564 12.5554 29.275 13.5719L28.5789 14.1209C28.2152 14.4077 27.9734 14.9441 27.9944 15.6222C27.9983 15.7477 28.0002 15.8736 28.0002 16C28.0002 16.1264 27.9983 16.2523 27.9944 16.3778C27.9734 17.0559 28.2152 17.5923 28.5789 17.8791L29.275 18.4281C30.564 19.4446 31.221 21.2816 30.4167 22.9478C30.0689 23.6681 29.6689 24.3583 29.2216 25.0133C28.1794 26.5393 26.262 26.8891 24.7372 26.281L23.9177 25.9542C23.4872 25.7826 22.9011 25.8418 22.3234 26.2006C22.1109 26.3326 21.8939 26.4581 21.6727 26.577C21.0726 26.8994 20.7283 27.3778 20.6618 27.8362L20.5354 28.707C20.2992 30.3336 19.0344 31.8208 17.1885 31.9565C16.7959 31.9853 16.3996 32 16.0002 32C15.6007 32 15.2045 31.9853 14.812 31.9565C12.9661 31.8208 11.7013 30.3337 11.4651 28.707L11.3387 27.8362C11.2722 27.3778 10.9278 26.8994 10.3277 26.577C10.1066 26.4581 9.88957 26.3326 9.67705 26.2006C9.09932 25.8418 8.51322 25.7826 8.08276 25.9542L7.26313 26.2811C5.73831 26.8891 3.8209 26.5393 2.77875 25.0133C2.33144 24.3583 1.93142 23.6682 1.58367 22.9479C0.779348 21.2817 1.4363 19.4447 2.72531 18.4282L3.42161 17.8791C3.78529 17.5923 4.02709 17.0559 4.00608 16.3778C4.00219 16.2523 4.00023 16.1264 4.00023 16C4.00023 15.8736 4.00219 15.7477 4.00608 15.6222C4.02709 14.9441 3.78529 14.4078 3.42161 14.1209L2.72531 13.5718C1.4363 12.5553 0.779348 10.7183 1.58367 9.05212C1.93142 8.33178 2.33144 7.64167 2.77875 6.98669C3.8209 5.46068 5.73831 5.1109 7.26312 5.71894L8.08276 6.04578C8.51322 6.21743 9.09932 6.15819 9.67705 5.79939C9.88957 5.6674 10.1065 5.54185 10.3277 5.42302C10.9278 5.10058 11.2722 4.62223 11.3387 4.16379L11.4651 3.293C11.7013 1.66634 12.9661 0.179171 14.812 0.0435096ZM16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20C18.2092 20 20 18.2091 20 16C20 13.7909 18.2092 12 16 12ZM9.33338 16C9.33338 12.3181 12.3181 9.33333 16 9.33333C19.6819 9.33333 22.6667 12.3181 22.6667 16C22.6667 19.6819 19.6819 22.6667 16 22.6667C12.3181 22.6667 9.33338 19.6819 9.33338 16Z"
        fill="#ACCEC8"
      />
    </SvgIcon>
  );
};