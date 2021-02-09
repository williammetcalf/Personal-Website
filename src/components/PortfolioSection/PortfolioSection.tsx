import { Box, Container, Grid, styled, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { Parallax } from "react-scroll-parallax";
import Item from "./Item";

export interface PortfolioSectionProps {}

const PortfolioSection: FC<PortfolioSectionProps> = (props) => {
  const {} = props;

  return (
    <Container maxWidth={"lg"}>
      <Parallax x={[-5, 15]}>
        <Typography variant="h3">Portfolio</Typography>
      </Parallax>
      <StyledBox>
        <Item imgSrc="" text="" />
        <Item imgSrc="" text="" />
        <Item imgSrc="" text="" />
        <Item imgSrc="" text="" />
      </StyledBox>
    </Container>
  );
};

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  "&>*": {
    width: "40%",
    margin: "1em 0",
  },
});

export default PortfolioSection;
