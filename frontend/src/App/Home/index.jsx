import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import fetchHealthCheck from "../../actions/fetchHealthCheck";
import {
  Button,
  Grid,
  CardContent,
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
          <Grid item xs={12}>
            <Card>
              <CardContent style={{ height: 180 }}>
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
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent style={{ height: 180 }}></CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent style={{ height: 180 }}></CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent style={{ height: 180 }}></CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent style={{ height: 180 }}></CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent style={{ height: 180 }}></CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  }
}

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
