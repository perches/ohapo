import React from "react";
import PropTypes from "prop-types";
import { CardContent, Card } from "@material-ui/core";
import Moment from "react-moment";
import "moment-timezone";

class Home extends React.Component {
  render() {
    const {
      result
    } = this.props;

    const this24Hours = {
      weathers: [],
      timeStamps: [],
    };
    const city = result && result.city.name;
    result && buildWeather();
    // const timeStamp = result && buildWeather();


    function buildWeather() {
      for(let i=0, n=(24/3); i<n; i++ ) {
        // let dateTime = new Date([result.list[i].dt_txt]);

        this24Hours.weathers.push([ result.list[i].weather[0].description]);
        this24Hours.timeStamps.push(
          // dateTime.setTime(dateTime.getTime() + 1000 * 60 * 60 * 9)
          [result.list[i].dt_txt]
        );
      }
      return this24Hours;
    }



    console.log(result);

    return (
      <Card>
        <CardContent style={{ height: 180 }}>
          <p>{city}</p>
          <p>24時間の天気: {JSON.stringify(this24Hours)}</p>
          <p>フォーマットされた時間:</p>
          {this24Hours && this24Hours.timeStamps.map(time => (
            <Moment date={time} />
          ))}

          {process.env.OPEN_WEATHER_API_URL}
        </CardContent>
      </Card>
    );
  }
}

Home.propTypes = {
  result: PropTypes.object
};

export default Home;
