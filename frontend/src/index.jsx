import React from "react";
import { render } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import configureStore from "./configureStore";
import { theme } from "./consts/theme";
import Header from "./App/Header";
import Home from "./App/Home";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <Content>
              <Header />
              <Home />
            </Content>
          </MuiThemeProvider>
        </Provider>
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
  * {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans JP', sans-serif;
  }
`;

const Content = styled.div`
  margin: 10px;
`;

render(<App />, document.getElementById("root"));
