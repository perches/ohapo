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
import User from "./App/User";
import UserEdit from "./App/User/Edit";
import UserEditConfirm from "./App/User/Confirm";

const WithAuth = [
  {
    path: "/home",
    component: Home,
    name: "ホーム"
  },
  {
    path: "/user",
    component: User,
    name: "プロフィール"
  },
  {
    path: "/user_edit",
    component: UserEdit,
    name: "プロフィール編集"
  },
  {
    path: "/user_confirm",
    component: UserEditConfirm,
    name: "プロフィール編集"
  }
];

// export default withAuth;

export default withAuthenticator(WithAuth, false, [
  <Login key = "1" /> ,
  <ConfirmSignIn key="2"/>,
  <VerifyContact key="3"/>,
  <SignUp key="3"/>,
  <ConfirmSignUp key="4"/>,
  <ForgotPassword key="5"/>,
  <RequireNewPassword key="6" />
]);