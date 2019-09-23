import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  Grid,
  Card
} from "@material-ui/core";
import fetchWeatherForecast from "../../actions/fetchWeatherForecast";
import WeatherCard from "./WeatherCard";

class Home extends React.Component {
  componentDidMount() {
    this.props.loadWeatherForecast();
  }
  render() {
    const {
      weatherForecast,
      // isLoading,
      // error
    } = this.props;

    return (
      <Wrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <WeatherCard
              result={weatherForecast.weatherForecast}
            />
            <Card>
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
  weatherForecast: PropTypes.object,
  // error: PropTypes.bool.isRequired,
  // isLoading: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  weatherForecast: state.weatherForecast,
  error: state.weatherForecast.error,
  isLoading: state.weatherForecast.isLoading
});
const mapDispatchToProps = dispatch => ({
  loadWeatherForecast: (params = {
    // TODO: user_profileから都市名を持ってくる
    q: "Sapporo",
    lang: "ja"
  }) => dispatch(fetchWeatherForecast(params))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
