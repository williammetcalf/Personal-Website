import "../config/style.css";

import React, { FC } from "react";
import { Parallax } from "react-parallax";

import { Box, styled } from "@material-ui/core";

import Header from "../components/Header/Header";

const HomePage: FC = () => {
  return (
    <Box style={{ minHeight: "100vh" }}>
      <Header />
      <Parallax blur={{ min: -15, max: 15 }} strength={-200}>
        <Section style={{ backgroundColor: "red" }}></Section>
        <Section style={{ backgroundColor: "blue" }}></Section>
        <Section style={{ backgroundColor: "green" }}></Section>
        <Section style={{ backgroundColor: "yellow" }}></Section>
      </Parallax>
    </Box>
  );
};

const Section = styled(Box)({
  height: "100vh",
});
export default HomePage;
