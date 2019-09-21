import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
// import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Grid,
  Fab,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import changeAccountAnchorEl from "../../actions/changeAccountAnchorEl";
import changeHeaderButtonToClose from "../../actions/changeHeaderButtonToClose";
import { theme } from "../../consts/theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../public/assets/ohapo_logo_lg.svg";
import {
  faUserCircle,
  faSignOutAlt,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";
library.add(faUserCircle, faSignOutAlt, faAddressCard);

class Header extends React.Component {
  render() {
    const {
      accountAnchorEl,
      changeAccountAnchorEl,
      changeHeaderButtonToClose
    } = this.props;
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              {/* <BrandNavLink exact to="/"> */}
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
              {/* </BrandNavLink> */}
            </Grid>

            <Grid item>
              <Fab
                variant="extended"
                aria-haspopup="true"
                color="primary"
                onClick={e => {
                  changeAccountAnchorEl(e.currentTarget);
                }}
              >
                {/* TODO: Twitterアイコンかランダムなアイコンを表示 */}
                <HeaderIcon icon="user-circle" type="primary" />
                {/* TODO: Twitterのユーザーネーム */}
                <HeaderText>たちばなゆうと</HeaderText>
              </Fab>
              <Menu
                anchorEl={accountAnchorEl}
                open={Boolean(accountAnchorEl)}
                onClose={changeHeaderButtonToClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <HeaderIcon type="secondary" icon="address-card" />
                  </ListItemIcon>
                  <ListItemText secondary="プロフィールを確認" />
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <HeaderIcon type="secondary" icon="sign-out-alt" />
                  </ListItemIcon>
                  <ListItemText secondary="サインアウト" />
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

// const BrandNavLink = styled(NavLink)`
//   text-decoration: none;
// `;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

Header.propTypes = {
  accountAnchorEl: PropTypes.object,
  changeAccountAnchorEl: PropTypes.func.isRequired,
  changeHeaderButtonToClose: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  location: state.header.location,
  accountAnchorEl: state.header.accountAnchorEl
});
const mapDispatchToProps = dispatch => ({
  changeAccountAnchorEl: value => dispatch(changeAccountAnchorEl(value)),
  changeHeaderButtonToClose: () => dispatch(changeHeaderButtonToClose())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
