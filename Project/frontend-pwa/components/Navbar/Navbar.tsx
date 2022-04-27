import { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  css,
  styled,
} from "@mui/material";
import Link from "next/link";

import {
  HomeIcon,
  EditIcon,
  PlusIcon,
  StatisticsIcon,
  ProfileIcon,
} from "../../icons";

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
      <StyledBottomNavigationAction icon={<HomeIcon />} />
      <Link href="records">
        <StyledBottomNavigationAction icon={<StatisticsIcon />} />
      </Link>
      <Link href="recording">
        <StyledBottomNavigationAction icon={<PlusIcon />} className="center" />
      </Link>
      <StyledBottomNavigationAction icon={<EditIcon />} />
      <Link href="profile">
        <StyledBottomNavigationAction icon={<ProfileIcon />} />
      </Link>
    </StyledNav>
  );
};

const StyledNav = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 30px rgba(140, 154, 163, 0.3);
  height: 12vh;
`;

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  ${({ theme }) => css`
    margin: ${theme.spacing(3)} ${theme.spacing(2.5)} ${theme.spacing(5.75)};
    padding: 0;
    min-width: auto;
    color: #accec8;

    &.Mui-selected {
      color: #2c2c2c;
      padding: 0;
    }

    span {
      width: 0;
    }

    &.center {
      background: black;
      border-radius: 50%;
      border: 6px solid #fff;
      min-width: 52px;
      min-height: 52px;
      max-height: 52px;
      max-width: 52px;
      margin: 0;
      transform: translate(0, -25px);

      &:after {
        content: "";
        width: 52px;
        height: 52px;
        box-shadow: 0px -10px 10px rgba(140, 154, 163, 0.3) inset;
        border-radius: 50%;
        position: absolute;
      }

      &.Mui-selected {
        color: #2c2c2c;
        padding: 0;
      }
    }
  `}
`;
