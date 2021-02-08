import { createMuiTheme, ThemeOptions } from "@material-ui/core";

export const theme: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#481e90",
    },
    background: {
      paper: "#000000",
    },
  },
};

export default createMuiTheme(theme);
