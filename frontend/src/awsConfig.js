import {
  CognitoAuth
} from "amazon-cognito-auth-js/dist/amazon-cognito-auth";
export const GetAuthConfig = () => ({
  region: localStorage.getItem("region") || process.env.REGION, // REQUIRED - Amazon Cognito Region
  userPoolId: localStorage.getItem("userPoolId") || process.env.USER_POOL_ID, //OPTIONAL - Amazon Cognito User Pool ID
  userPoolWebClientId: localStorage.getItem("appClientId") || process.env.USER_POOL_WEB_CLIENT_ID //OPTIONAL - Amazon Cognito Web Client ID
});

export const AuthConfigEmpty = () => ({
  region: process.env.REGION,
  userPoolId: process.env.USER_POOL_ID,
  userPoolWebClientId: process.env.USER_POOL_WEB_CLIENT_ID
});
export const GetCognitoAuth = (identifyProvider, onSuccess, onFailure) => {
  var authData = {
    ClientId: localStorage.getItem("appClientId") || process.env.USER_POOL_WEB_CLIENT_ID, // Your client id here
    AppWebDomain: process.env.APP_WEB_DOMAIN,
    TokenScopesArray: [
      "profile",
      "email",
      "openid",
      "aws.cognito.signin.user.admin",
      "phone"
    ],
    RedirectUriSignIn: process.env.REDIRECT_URL_SIGN_IN,
    RedirectUriSignOut: process.env.REDIRECT_URL_SIGN_OUT,
    IdentityProvider: identifyProvider
  };
  var auth = new CognitoAuth(authData);
  auth.userhandler = {
    onSuccess: function (result) {
      if (onSuccess) {
        onSuccess(result);
      }
    },
    onFailure: function (err) {
      console.log(err);
      if (onFailure) {
        onFailure(err);
      }
      console.log(err);
    }
  };
  auth.useCodeGrantFlow();

  return auth;
};