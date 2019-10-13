import React, { Component } from "react";
import PropTypes from 'prop-types';
import { GetCognitoAuth } from "../../awsConfig";
import { Redirect } from "react-router-dom";

export default class IDPCallback extends Component {

  constructor(props) {
    super(props);
    this.state = {
      needRedirect: false,
      redirectPath: "/"
    };
  }

  componentDidMount() {
    // 成功時はhome画面に、失敗時にはlogin画面に遷移させる
    const auth = GetCognitoAuth(null, this.invokeRedirect("/a"), this.invokeRedirect("/"));
    auth.parseCognitoWebResponse(this.props.location.search);
  }

  invokeRedirect = (path) => () => {
    this.setState({ needRedirect: true, redirectPath: path });
  }

  render() {
    if (this.state.needRedirect) {
      return <Redirect to={this.state.redirectPath} />;
    }
    return (
      <div className="IDP">
        <div className="lander">
          <h1>IDP Callback</h1>
        </div>
      </div>
    );
  }
}

// validationを追加
IDPCallback.propTypes = {
  location: PropTypes.objectOf(PropTypes.string),
};
