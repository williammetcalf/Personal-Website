import "../config/style.css";

import React, { FC, useState } from "react";

import { Box, styled } from "@material-ui/core";

import ContentSection from "../components/ContentSection";
import Header from "../components/Header/Header";

const HomePage: FC = () => {
  const [tab, setTab] = useState("1");

  return (
    <Box style={{ minHeight: "100vh" }} id="main">
      <Header tab={tab} />
      <ContentSection
        value={"1"}
        style={{ backgroundColor: "darkgray" }}
        onViewEnter={() => setTab("1")}
      />
      <ContentSection
        value={"2"}
        style={{ backgroundColor: "gray" }}
        onViewEnter={() => setTab("2")}
      />
      <ContentSection
        value={"3"}
        style={{ backgroundColor: "lightgray" }}
        onViewEnter={() => setTab("3")}
      />
    </Box>
  );
};

const Section = styled(Box)({
  height: "100vh",
});
export default HomePage;
