import React from "react";
import PropTypes from "prop-types";
import {  CardContent, Card } from "@material-ui/core";

class Home extends React.Component {
  render() {
    const {
      result,
      isLoading,
      error,
    } = this.props;
    const city = result && result.city.name;
    console.log(result);

    return (
      <Card>
        <CardContent style={{ height: 180 }}>
          {city}
          {isLoading}
          {error}
          {process.env.OPEN_WEATHER_API_URL}
        </CardContent>
      </Card>
    );
  }
}

Home.propTypes = {
  weatherForecast: PropTypes.object,
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Home;
