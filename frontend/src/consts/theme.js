import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#bcddeb",
      main: "#87ceeb",
      dark: "#74b3cc",
      contrastText: "#000000"
    },
    secondary: {
      light: "#ebc9bc ",
      main: "#eba286",
      dark: "#eb865e ",
      contrastText: "#000000"
    },
    muted: {
      light: "#808080",
      main: "#595959",
      dark: "#333333",
    }
  }
});
