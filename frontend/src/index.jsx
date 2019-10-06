import React from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { APPLICATION_NAME } from "./consts/consts";
import configureStore from "./configureStore";
import { theme } from "./consts/theme";
import routes from "./routes";
import Header from "./App/Header";
import Footer from "./App/Footer";
import Amplify from "aws-amplify";
import { GetAuthConfig, AuthConfigEmpty } from "./awsConfig";

try {
  Amplify.configure({
    Auth: GetAuthConfig()
  });
} catch (e) {
  Amplify.configure({
    Auth: AuthConfigEmpty()
  });
}

const store = configureStore();

const RouteWithTitle = ({ title, ...props }) => {
  return (
    <>
      <Helmet>
        <title>
          {APPLICATION_NAME} | {title}
        </title>
      </Helmet>
      <Route {...props} />
    </>
  );
};

RouteWithTitle.propTypes = {
  title: PropTypes.string.isRequired
};

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <BrowserRouter>
              <Header />
              <Wrapper>
                <Content>
                  <Switch>
                    {routes.map((route, index) => (
                      <RouteWithTitle
                        exaxt
                        key={index}
                        title={route.name}
                        path={route.path}
                        pageName={route.name}
                        component={route.component}
                      />
                    ))}
                    <Redirect from="/" to="/home" />
                  </Switch>
                </Content>
              </Wrapper>
              <Footer />
            </BrowserRouter>
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

const Wrapper = styled.div`
  background-color: ${theme.palette.muted.light};
`;

const Content = styled.div`
  // margin: 10px;
`;

render(<App />, document.getElementById("root"));
