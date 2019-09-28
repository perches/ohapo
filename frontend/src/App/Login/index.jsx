import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../consts/theme";
import { Fab } from "@material-ui/core";
import BackgroundImage from "../../public/assets/morning_coffee.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
library.add(fab, faTwitter);

class Login extends React.Component {
  render() {
    return (
      <>
        <Wrapper>
          <Background></Background>
        </Wrapper>
        <TextContainer>
          <TextPrimary>
            🌞おはポにログインしてすべての機能を使いましょう🐥
          </TextPrimary>
          <LoginButtonWrapper>
            <Fab
              variant="extended"
              color="primary"
              aria-label="add"
              href="user/twitter"
            >
              <LoginIcon icon={["fab", "twitter"]} brand="twitter" />
              Twitterアカウントでログインする
            </Fab>
          </LoginButtonWrapper>
          <LoginButtonWrapper>
            <Fab
              variant="extended"
              color="default"
              aria-label="add"
              size="small"
              href="home"
            >
              <TextWithoutLogin>ログインせずに使う</TextWithoutLogin>
            </Fab>
          </LoginButtonWrapper>
        </TextContainer>
      </>
    );
  }
}

const Wrapper = styled.div`
  overflow: hidden;
`;

const Background = styled.div`
  background: url("${BackgroundImage}") no-repeat center center / cover;
  height: 1000px;
    filter: blur(8px);
  -webkit-filter: blur(8px);
  margin: -9px;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  color: white;
  border: 1px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
`;

const TextPrimary = styled.p`
  font-size: 28px;
  font-weight: 400;
  margin: 10px;
`;

const LoginButtonWrapper = styled.div`
  margin-top: 40px;
`;

const LoginIcon = styled(FontAwesomeIcon)`
  font-size: 26px;
  margin-right: 10px;
  ${props =>
    props.brand === "twitter" &&
    css`
      color: ${theme.palette.brand.twitter};
    `}
`;

const TextWithoutLogin = styled.span`
  margin: 0 20px;
  font-size: 12px;
  font-weight: 300;
`;

export default Login;
