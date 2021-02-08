import React, { FC } from "react";

import { AppBar, Box, styled, Tab, Tabs, Toolbar, Typography } from "@material-ui/core";

interface Props {
  tab: string;
  style?: React.SVGAttributes<SVGSVGElement>["style"];
}

const Header: FC<Props> = (props) => {
  const { tab, style } = props;

  return (
    <AppBar
      style={{
        backgroundColor: "unset",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
        border: "none",
        boxShadow: "none",
      }}
    >
      <StyledToolbar>
        <svg
          width={42}
          height={50}
          viewBox="0 0 85 100"
          preserveAspectRatio="none"
          style={{
            stroke: "gray",
            strokeWidth: 3,
            fill: "transparent",
            ...style,
          }}
        >
          <path
            d={`M 10 0 l -10 100 l 20 -50 l 5 50 l 20 -100`}
            fill="transparent"
          />
          <path
            d={`M 30 100 l 20 -100 l 5 50 l 25 -50 l -20 100`}
            fill="transparent"
          />
        </svg>
        <Box flex={0.5} />
        <Tabs value={tab} indicatorColor="secondary">
          <StyledTab label="About" value={"1"} />
          <StyledTab label="Services" value={"2"} />
          <StyledTab label="Contact" value={"3"} />
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
