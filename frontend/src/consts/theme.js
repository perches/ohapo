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
      light: "#ebc9bc",
      main: "#eba286",
      dark: "#eb865e",
      contrastText: "#000000"
    },
    muted: {
      light: "#fffafa",
      main: "#C0C0C0",
      dark: "#202020",
    },
    success: { main: '#44A047' },
    warning: { main: '#FF9F00' },
    error: { main: '#D42F30'},
    info: { main: '#1976D2' },
    brand: {
      perches: '#972697',
      twitter: '#1DA1F2',
      facebook: '#3B5998'
    }
  },
});
