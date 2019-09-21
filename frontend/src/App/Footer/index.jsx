import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { PERCHES_LP_LINK } from "../../consts/consts";
import { theme } from "../../consts/theme";
import Logo from "../../public/assets/perches_logo_lg.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright
} from "@fortawesome/free-solid-svg-icons";
library.add(faCopyright);

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
            <Grid
              container
              justify="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item xs={12}>
                <TextWrapper>
                  <Copyright>
                    {"Copyright "}
                    <CopyrightIcon icon="copyright" />
                    {" perches"} {new Date().getFullYear()}
                  </Copyright>
                </TextWrapper>
              </Grid>
              <Grid item>
                <a
                  href={PERCHES_LP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FooterLogo />
                </a>
              </Grid>
              <Grid item xs={12}>
                <TextWrapper>
                  <WarningText>
                    本ページでは、利用状況を把握するためにGoogle
                    Analyticsを利用しています。
                  </WarningText>
                </TextWrapper>
              </Grid>
            </Grid>
        </footer>
      </>
    );
  }
}

const TextWrapper = styled.div`
  width: 100%;
  margin: 20px;
  text-align: center;
`;

const Copyright = styled.span`
  font-size: 14px;
  color: ${theme.palette.muted.dark};
`;

const WarningText = styled.span`
  font-size: 10px;
  color: ${theme.palette.muted.main};
`;

const CopyrightIcon = styled(FontAwesomeIcon)`
  color: ${theme.palette.secondary.dark};
`;

const FooterLogo = styled(Logo)`
  margin-right: 20px;
`;

export default Footer;
