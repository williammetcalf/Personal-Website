import React, { FC } from "react";

import { AppBar, Box, styled, Toolbar, Typography } from "@material-ui/core";

interface Props {
  style?: React.SVGAttributes<SVGSVGElement>["style"];
}

const Header: FC<Props> = (props) => {
  const { style } = props;

  return (
    <AppBar style={{ backgroundColor: "transparent" }}>
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
        <Typography>About</Typography>
        <Typography>Work</Typography>
        <Typography>Services</Typography>
        <Typography>Blog</Typography>
        <Typography>News</Typography>
        <Typography>Contact</Typography>
      </StyledToolbar>
    </AppBar>
  );
};

const StyledToolbar = styled(Toolbar)({
  justifyContent: "center",
  "&>*": {
    marginRight: "3em",
  },
});

export default Header;
