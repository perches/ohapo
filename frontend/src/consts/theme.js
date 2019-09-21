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
      light: "#fffafa",
      main: "#595959",
      dark: "#333333",
    },
    success: { main: '#44A047' },
    warning: { main: '#FF9F00' },
    error: { main: '#D42F30'},
    info: { main: '#1976D2' },
    perches: { main: '#972697'}
  },
});
