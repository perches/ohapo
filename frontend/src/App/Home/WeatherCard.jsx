import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { rgba } from "polished";
import { CardContent, Card, Grid } from "@material-ui/core";
import "moment-timezone";
import { theme } from "../../consts/theme";

class Home extends React.Component {
  render() {
    const {
      result
    } = this.props;

    const this24Hours = [];
    const city = result && result.city.name;
    result && buildWeather();
    function buildWeather() {
      for(let i=0, n=(24/3); i<n; i++ ) {
        this24Hours[i] = { weather: '', timeStamp: '', iconUrl: '' };
        this24Hours[i].weather = result.list[i].weather[0].description;
        this24Hours[i].timeStamp =  (new Date([result.list[i].dt_txt])).getHours();
        // TODO: ハードコード
        this24Hours[i].iconUrl =  `http://openweathermap.org/img/wn/${[
          result.list[i].weather[0].icon
        ]}.png`;
      }
      return this24Hours;
    }



    console.log(result);

    return (
      <Card>
        <CardContent>
          <Grid container justify="center">
            <Grid item>
              <p>{city}</p>
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            {console.log(this24Hours)}
            {this24Hours &&
              this24Hours.map((w, index) => (
                <EachDetailsContainer item key={index}>
                  <WeatherText>{w.weather}</WeatherText>
                  <img src={w.iconUrl} />
                  <TimeStampText>{String(w.timeStamp)}時</TimeStampText>
                </EachDetailsContainer>
              ))}
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

Home.propTypes = {
  result: PropTypes.object
};

const EachDetailsContainer = styled(Grid)`
  border: 1px;
  text-align: center;
  background-color: ${rgba(theme.palette.primary.main, 0.2)};
  border-radius: 8px;
  width: calc((100% / 8) - 15px);
  padding: 5px;
`;

const WeatherText = styled.p`
  font-size: 14px;
  color: ${theme.palette.muted.dark};
`;

const TimeStampText = styled.p`
  font-size: 14px;
  color: ${theme.palette.muted.dark};
`;

export default Home;
