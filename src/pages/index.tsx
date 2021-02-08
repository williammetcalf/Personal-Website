import "../config/style.css";

import React, { FC } from "react";

import { Box, styled } from "@material-ui/core";

import Header from "../components/Header/Header";

const HomePage: FC = () => {
  return (
    <Box style={{ minHeight: "100vh" }}>
      <Header />
      <Section style={{ backgroundColor: "darkgray" }}></Section>
      <Section style={{ backgroundColor: "gray" }}></Section>
      <Section style={{ backgroundColor: "lightgray" }}></Section>
    </Box>
  );
};

const Section = styled(Box)({
  height: "100vh",
});
export default HomePage;
