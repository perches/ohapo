import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  Grid,
  CardContent,
  Card
} from "@material-ui/core";
import fetchWeatherForecast from "../../actions/fetchWeatherForecast";

class Home extends React.Component {

  componentDidMount() {
    this.props.loadWeatherForecast();
  }

  render() {
    const {
      weatherForecastResult,
      isLoading,
      error
    } = this.props;

    return (
      <Wrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent style={{ height: 180 }}>
                {/* {weatherForecastResult} */}
                {isLoading}
                {error}
                {process.env.OPEN_WEATHER_API_URL}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 10px;
`;

Home.propTypes = {
  loadWeatherForecast: PropTypes.func.isRequired,
  weatherForecastResult: PropTypes.object,
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  weatherForecastResult: state.weatherForecast,
  error: state.weatherForecast.error,
  isLoading: state.weatherForecast.isLoading
});
const mapDispatchToProps = dispatch => ({
  loadWeatherForecast: () => dispatch(fetchWeatherForecast())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
