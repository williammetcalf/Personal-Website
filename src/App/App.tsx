import { Box } from "@material-ui/core";
import React, { FC } from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import ContentSection from "../components/ContentSection";
import Header from "../components/Header/Header";
import PortfolioSection from "../components/PortfolioSection";
import useTabState from "./useTabState";

const App: FC = () => {
  const [tab, setTabVisually, scrollToSection] = useTabState();

  return (
    <Box style={{ minHeight: "100vh" }} id="main">
      <Header tab={tab} onTabClick={scrollToSection} />
      <ContentSection
        value={"t1"}
        style={{ backgroundColor: "#333333" }}
        onViewEnter={() => setTabVisually("t1")}
      >
        <AboutSection />
      </ContentSection>
      <ContentSection
        value={"t2"}
        style={{ backgroundColor: "gray" }}
        onViewEnter={() => setTabVisually("t2")}
      >
        <PortfolioSection />
      </ContentSection>
      <ContentSection
        value={"t3"}
        style={{ backgroundColor: "lightgray" }}
        onViewEnter={() => setTabVisually("t3")}
      >
        <AboutSection />
      </ContentSection>
      <ContentSection
        value={"t4"}
        style={{ backgroundColor: "#333333" }}
        onViewEnter={() => setTabVisually("t4")}
      >
        <AboutSection />
      </ContentSection>
    </Box>
  );
};

export default App;
