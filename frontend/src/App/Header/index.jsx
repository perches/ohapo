import React from "react";
import { AppBar, Toolbar, Grid, Button, Menu } from "@material-ui/core";

class Header extends React.Component {
  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              LOGO
            </Grid>

            <Grid item>
              <Button
                aria-haspopup="true"
                color="inherit"
                onClick={e => {}}
              >
                <p>たちばなゆうと</p>
              </Button>
              <Menu></Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;
