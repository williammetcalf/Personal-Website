import "../config/style.css";

import React, { FC } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { ThemeProvider } from "@material-ui/core";

import App from "../App";
import theme from "../config/theme";

const HomePage: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default HomePage;
