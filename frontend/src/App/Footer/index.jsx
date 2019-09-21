import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { PERCHES_LP_LINK } from "../../consts/consts";
import Logo from "../../public/assets/perches_logo_lg.svg";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <Wrapper>
            <Grid
              container
              justify="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item>
                <a
                  href={PERCHES_LP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FooterLogo />
                </a>
              </Grid>
            </Grid>
          </Wrapper>
        </footer>
      </>
    );
  }
}

const Wrapper = styled.div`
  padding: 20px;
  text-aligh: center;
`;

const FooterLogo = styled(Logo)`
  margin-right: 20px;
`;

export default Footer;
