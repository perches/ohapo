import React from "react";
import { render } from "react-dom";
import Home from "./App/Home";

class App extends React.Component {
  render() {
    return <Home />;
  }
}
render(<App />, document.getElementById("root"));
