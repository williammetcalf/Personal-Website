import { AppBar, Box, styled, Tab, Tabs, Toolbar } from "@material-ui/core";
import React, { FC } from "react";
import Logo from "../Logo/Logo";

export type TAB_VALUE = "t1" | "t2" | "t3";

interface Props {
  tab: TAB_VALUE;
  onTabClick: (value: TAB_VALUE) => void;
}

const Header: FC<Props> = (props) => {
  const { tab, onTabClick } = props;

  return (
    <AppBar
      style={{
        backgroundColor: "unset",
        background:
          "linear-gradient(180deg, rgba(9,9,9,0.3) 0%, rgba(255,255,255,0) 100%)",
        border: "none",
        boxShadow: "none",
      }}
    >
      <StyledToolbar>
        <Logo />
        <Box flex={0.5} />
        <Tabs value={tab} indicatorColor="secondary">
          <StyledTab
            label="About"
            value={"t1"}
            onClick={() => onTabClick("t1")}
          />
          <StyledTab
            label="Services"
            value={"t2"}
            onClick={() => onTabClick("t2")}
          />
          <StyledTab
            label="Contact"
            value={"t3"}
            onClick={() => onTabClick("t3")}
          />
        </Tabs>
      </StyledToolbar>
    </AppBar>
  );
};

const StyledToolbar = styled(Toolbar)({
  justifyContent: "center",
});

const StyledTab = styled(Tab)({
  paddingLeft: 10,
  paddingRight: 10,
});
export default Header;
