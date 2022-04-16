import { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  css,
  styled,
} from "@mui/material";
import Link from "next/link";

import {
  BrightnessIcon,
  SearchIcon,
  WaveIcon,
  EditIcon,
  PlusIcon,
} from "../icons";

export const Navbar = () => {
  const [value, setValue] = useState(0);

  return (
    <StyledNav
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <StyledBottomNavigationAction icon={<BrightnessIcon />} />
      <Link href="records">
        <StyledBottomNavigationAction icon={<SearchIcon />} />
      </Link>
      <Link href="record">
        <StyledBottomNavigationAction icon={<PlusIcon />} className="center" />
      </Link>
      <StyledBottomNavigationAction icon={<WaveIcon />} />
      <StyledBottomNavigationAction icon={<EditIcon />} />
    </StyledNav>
  );
};

const StyledNav = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 30px rgba(140, 154, 163, 0.3);
  height: 106px;
`;

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  ${({ theme }) => css`
    margin: ${theme.spacing(3)} ${theme.spacing(2.5)} ${theme.spacing(5.75)};
    padding: 0;
    min-width: auto;

    &.Mui-selected {
      color: #2c2c2c;
      padding: 0 0 ${theme.spacing(0.75)};
    }

    span {
      width: 0;
    }

    &.center {
      background: black;
      border-radius: 50%;
      min-width: 52px;
      min-height: 52px;
      max-height: 52px;
      max-width: 52px;
      margin: 0;
      transform: translate(0, -25px);

      &.Mui-selected {
        color: #2c2c2c;
        padding: 0;
      }
    }
  `}
`;
