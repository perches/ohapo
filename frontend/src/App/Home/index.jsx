import React from "react";
import styled from "styled-components";
import {
  Grid,
  Card
} from "@material-ui/core";
import WeatherCard from "./WeatherCard";

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <WeatherCard />
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

export default Home;
