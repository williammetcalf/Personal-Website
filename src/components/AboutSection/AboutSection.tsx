import React, { FC } from "react";
import { Parallax } from "react-scroll-parallax";

import { Box, Typography } from "@material-ui/core";

interface Props {}

const AboutSection: FC<Props> = (props) => {
  const {} = props;

  return (
    <Box>
      <Parallax x={[-39, 0]}>
        <Typography variant="h1">About</Typography>
      </Parallax>
    </Box>
  );
};

export default AboutSection;
