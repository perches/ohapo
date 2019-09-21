import React from "react";
import styled, { css } from "styled-components";
import { AppBar, Toolbar, Grid, Button, Menu } from "@material-ui/core";
import { theme } from "../../consts/theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUserCircle);

class Header extends React.Component {
  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>LOGO</Grid>

            <Grid item>
              <Button aria-haspopup="true" color="default">
                <HeaderIcon icon="user-circle" type="primary" />
                <HeaderText>たちばなゆうと</HeaderText>
              </Button>
              <Menu></Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

const HeaderText = styled.span`
  color: ${theme.palette.muted.main};
  font-weight: 400;
  font-size: 14px;
`;

const HeaderIcon = styled(FontAwesomeIcon)`
  color: ${theme.palette.muted.main};
  margin-right: 3px;
  ${props =>
    props.type === "primary" &&
    css`
      font-size: 22px;
    `}
  ${props =>
    props.type === "secondary" &&
    css`
      font-size: 18px;
    `}
`;

export default Header;
