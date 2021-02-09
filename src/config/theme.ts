import { createMuiTheme, ThemeOptions } from "@material-ui/core";

export const theme: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#481e90",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    allVariants: { color: "#eee" },
  },
};

export default createMuiTheme(theme);
