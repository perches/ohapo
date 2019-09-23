import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import {
  Grid,
  Card,
  CardContent
} from "@material-ui/core";
import { theme } from "../../consts/theme";
import WeatherCard from "./WeatherCard";
import NewsCard from "./NewsCard";

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <WeatherCardWrapper>
                <CardContent>
                  <WeatherCard />
                </CardContent>
              </WeatherCardWrapper>
            </Card>
          </Grid>
          <NewsCard />
        </Grid>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 20px;
`;

const WeatherCardWrapper = styled.div`
  background-color: ${rgba(theme.palette.muted.main, 0.4)};
`;

export default Home;
