import React from "react";
import styled from "styled-components";
import { theme } from "../../consts/theme";
import BackgroundImage from "../../public/assets/morning_coffee.png";


class Login extends React.Component {
  render() {
    return (
      <>
        <Wrapper></Wrapper>
        <TextContainer>
          <TextPrimary>
            🌞おはポにログインしてすべての機能を使いましょう🐥
          </TextPrimary>
          <TextSecondary>
            ログインしなくても利用することができます
          </TextSecondary>
        </TextContainer>
      </>
    );
  }
}

const Wrapper = styled.div`
  background: url("${BackgroundImage}") no-repeat center center / cover;
  height: 1000px;
    filter: blur(8px);
  -webkit-filter: blur(8px);
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 233, 0.4);
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

const TextSecondary = styled.p`
  font-size: 18px;
  color: ${theme.palette.muted.light};
  font-weight: 100;
`;

export default Login;
