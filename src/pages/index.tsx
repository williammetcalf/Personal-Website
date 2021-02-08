import React, { FC } from "react";
import { AppBar, Box, Paper, ThemeProvider, Toolbar } from "@material-ui/core";
import theme from "../config/theme";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "../config/style.css";

const HomePage: FC = () => {
  const windowHeight = useWindowDimensions();

  return (
    <ThemeProvider theme={theme}>
      <Box style={{ minHeight: windowHeight }}>
        <AppBar>
          <Toolbar>test</Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
