import React, { FC } from "react";

import { Box, styled, Typography } from "@material-ui/core";

interface Props {
  style?: React.SVGAttributes<SVGSVGElement>["style"];
}

const Header: FC<Props> = (props) => {
  const { style } = props;

  return (
    <StyledBox display="flex">
      <svg
        width={85}
        height={100}
        viewBox="0 0 85 100"
        preserveAspectRatio="none"
        style={{ stroke: "gray", ...style }}
      >
        <path
          d={`M 10 0 l -10 100 l 20 -50 l 5 50 l 20 -100`}
          fill="transparent"
          strokeWidth={3}
        />
        <path
          d={`M 30 100 l 20 -100 l 5 50 l 25 -50 l -20 100`}
          fill="transparent"
          strokeWidth={3}
        />
      </svg>
      <Box flex={1} />
      <Typography>About</Typography>
      <Typography>Work</Typography>
      <Typography>Services</Typography>
      <Typography>Blog</Typography>
      <Typography>News</Typography>
      <Typography>Contact</Typography>
    </StyledBox>
  );
};

const StyledBox = styled(Box)({
  "&>*": {
    marginRight: "3em",
  },
});

export default Header;
