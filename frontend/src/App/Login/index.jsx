import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../public/assets/morning_coffee.png";

class Login extends React.Component {
  render() {
    return (
      <>
        <Wrapper>aa</Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  font-size: 111px;
  background-color: #333;
  background-image: url("${BackgroundImage}");
`;

export default Login;
