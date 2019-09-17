import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { theme } from "../../consts/theme";
import fetchHealthCheck from "../../actions/fetchHealthCheck";
import {
  Button,
  Grid,
  Card
} from "@material-ui/core";

class Home extends React.Component {
  render() {
    const {
      healthCheckResult,
      isLoading,
      loadHealthCheck,
      error
    } = this.props;
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <HomeCard>
              <Color1>
                <h3>This is frontend.</h3>
                <Button
                  size="small"
                  variant="contained"
                  disabled={isLoading}
                  onClick={() => {
                    loadHealthCheck();
                  }}
                >
                  Health Check
                </Button>
                {isLoading ? (
                  <p style={{ fontWeight: 900 }}>Loading...</p>
                ) : error ? (
                  <p style={{ color: "#D42F30", fontWeight: 900 }}>ERROR</p>
                ) : (
                  <p style={{ color: "#44A047", fontWeight: 900 }}>
                    {healthCheckResult}
                  </p>
                )}
              </Color1>
            </HomeCard>
          </Grid>
          <Grid item xs={4}>
            <HomeCard>
              <Color2></Color2>
            </HomeCard>
          </Grid>
          <Grid item xs={4}>
            <HomeCard>
              <Color3></Color3>
            </HomeCard>
          </Grid>
          <Grid item xs={4}>
            <HomeCard>
              <Color4></Color4>
            </HomeCard>
          </Grid>
          <Grid item xs={4}>
            <HomeCard>
              <Color5></Color5>
            </HomeCard>
          </Grid>
          <Grid item xs={4}>
            <HomeCard>
              <Color6></Color6>
            </HomeCard>
          </Grid>
        </Grid>
      </>
    );
  }
}

const HomeCard = styled(Card)``;

const Color1 = styled.div`
  padding: 20px 10px;
  background-color: ${theme.palette.primary.light};
  height: 160px;
`;

const Color2 = styled.div`
  background-color: ${theme.palette.primary.main};
  height: 200px;
`;

const Color3 = styled.div`
  background-color: ${theme.palette.primary.dark};
  height: 200px;
`;

const Color4 = styled.div`
  background-color: ${theme.palette.secondary.light};
  height: 200px;
`;

const Color5 = styled.div`
  background-color: ${theme.palette.secondary.main};
  height: 200px;
`;

const Color6 = styled.div`
  background-color: ${theme.palette.secondary.dark};
  height: 200px;
`;

Home.propTypes = {
  loadHealthCheck: PropTypes.func.isRequired,
  healthCheckResult: PropTypes.string,
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  healthCheckResult: state.healthCheck.result,
  error: state.healthCheck.error,
  isLoading: state.healthCheck.isLoading,
});

const mapDispatchToProps = dispatch => ({
  loadHealthCheck: () => dispatch(fetchHealthCheck())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
