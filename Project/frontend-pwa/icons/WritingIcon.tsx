import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const WritingIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 68 66"
      sx={{ width: 68, height: 66, fill: "none" }}
    >
      <rect
        x="0.0817871"
        width="67.4214"
        height="66"
        rx="33"
        fill="#FEF2D5"
        fillOpacity="0.2"
      />
      <rect
        x="0.581787"
        y="0.5"
        width="66.4214"
        height="65"
        rx="32.5"
        stroke="#EFBA37"
        strokeOpacity="0.3"
      />
      <g clip-path="url(#clip0_443_1136)">
        <path
          d="M49.39 17H17.1887V49H49.39V17Z"
          fill="white"
          fillOpacity="0.01"
        />
        <path
          d="M20.7609 46.0001L26.4532 46.0002L47.3254 25.2584L41.633 19.6016L20.7607 40.3433L20.7609 46.0001Z"
          stroke="#333333"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M35.9407 25.2583L41.6331 30.9152"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_443_1136">
          <rect
            width="32.2013"
            height="32"
            fill="white"
            transform="translate(17.1887 17)"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
