import { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  css,
  styled,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  HomeIcon,
  EditIcon,
  PlusIcon,
  StatisticsIcon,
  ProfileIcon,
} from "../../icons";

export const Navbar = () => {
  const { pathname } = useRouter();
  const [value, setValue] = useState(pathname);

  return (
    <StyledNav
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(pathname);
      }}
    >
      <Link href="main">
        <StyledBottomNavigationAction
          icon={<HomeIcon />}
          $isactive={pathname === "/main"}
        />
      </Link>
      <Link href="records">
        <StyledBottomNavigationAction
          icon={<StatisticsIcon isActive={pathname === "/records"} />}
          $isactive={pathname === "/records"}
        />
      </Link>
      <Link href="recording">
        <StyledBottomNavigationAction icon={<PlusIcon />} className="center" />
      </Link>
      <Link href="statistics">
        <StyledBottomNavigationAction
          icon={<EditIcon />}
          $isactive={pathname === "/statistics"}
        />
      </Link>
      <Link href="profile">
        <StyledBottomNavigationAction
          icon={<ProfileIcon isActive={pathname === "/profile"} />}
          $isactive={pathname === "/profile"}
        />
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

const StyledBottomNavigationAction = styled(BottomNavigationAction)<{
  $isactive?: boolean;
}>`
  ${({ theme, $isactive }) => css`
    margin: ${theme.spacing(3)} ${theme.spacing(2.5)} ${theme.spacing(5.75)};
    padding: 0;
    min-width: auto;
    color: ${$isactive ? "#2c2c2c" : "#accec8"};

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
      /* border: 6px solid #fff; */
      min-width: 52px;
      min-height: 52px;
      max-height: 52px;
      max-width: 52px;
      margin: 0;
      transform: translate(0, -25px);

      /* &:after {
        content: "";
        width: 52px;
        height: 52px;
        box-shadow: 0px -10px 10px rgba(140, 154, 163, 0.3) inset;
        border-radius: 50%;
        position: absolute;
      } */

      &.Mui-selected {
        color: #2c2c2c;
        padding: 0;
      }
    }
  `}
`;
