import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import Home from "./App/Home";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Provider store={store}>
          <Home />
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

render(<App />, document.getElementById("root"));
