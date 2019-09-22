import React from "react";
import styled from "styled-components";
import {
  Grid,
  CardContent,
  Card
} from "@material-ui/core";

class Home extends React.Component {

  buildWeatherForecast() {
    const BASE_URL = `${process.env.OPEN_WEATHER_API_URL}`;
    const response = open(
      BASE_URL + `?q=Tokyo,jp&APPID=${process.env.OPEN_WEATHER_API_KEY}`
    );
    console.log(response);
  }

  render() {
    this.buildWeatherForecast();
    return (
      <Wrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent style={{ height: 180 }}>
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

export default Home;
