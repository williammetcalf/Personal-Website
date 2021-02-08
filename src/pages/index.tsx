import "../config/style.css";

import React, { FC, useCallback, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { Box, styled } from "@material-ui/core";

import AboutSection from "../components/AboutSection/AboutSection";
import ContentSection from "../components/ContentSection";
import Header, { TAB_VALUE } from "../components/Header/Header";

const HomePage: FC = () => {
  const [tab, setTab] = useState<TAB_VALUE>("t1");
  const setTabAndScroll = useCallback(
    (value: TAB_VALUE) => {
      setTab(value);
      const el: HTMLElement = document.querySelector(`#${value}`);
      el && window.scrollTo({ behavior: "smooth", top: el.offsetTop });
    },
    [setTab]
  );

  return (
    <ParallaxProvider>
      <Box style={{ minHeight: "100vh" }} id="main">
        <Header tab={tab} onTabClick={setTabAndScroll} />
        <ContentSection
          value={"t1"}
          style={{ backgroundColor: "darkgray" }}
          onViewEnter={() => setTab("t1")}
        >
          <AboutSection />
        </ContentSection>
        <ContentSection
          value={"t2"}
          style={{ backgroundColor: "gray" }}
          onViewEnter={() => setTab("t2")}
        >
          <AboutSection />
        </ContentSection>
        <ContentSection
          value={"t3"}
          style={{ backgroundColor: "lightgray" }}
          onViewEnter={() => setTab("t3")}
        >
          <AboutSection />
        </ContentSection>
      </Box>
    </ParallaxProvider>
  );
};

const Section = styled(Box)({
  height: "100vh",
});
export default HomePage;
