import React from "react";
// import { Route, Switch } from "react-router-dom";
import {
  ConfirmSignIn,
  ConfirmSignUp,
  ForgotPassword,
  RequireNewPassword,
  // SignIn,
  SignUp,
  VerifyContact,
  withAuthenticator
} from 'aws-amplify-react';
import Home from "./App/Home";
import Login from "./App/Login";

const WithAuth = {
  path: "/home",
  component: Home,
  name: "ホーム"
};

export default withAuthenticator(WithAuth, false, [
  <Login key = "1" /> ,
  <ConfirmSignIn key="2"/>,
  <VerifyContact key="3"/>,
  <SignUp key="3"/>,
  <ConfirmSignUp key="4"/>,
  <ForgotPassword key="5"/>,
  <RequireNewPassword key="6" />
]);