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

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardWrapper>
                <CardContent>
                  <WeatherCard />
                </CardContent>
              </CardWrapper>
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

const CardWrapper = styled.div`
  background-color: ${rgba(theme.palette.muted.main, 0.4)};
  height: 600px;
`;

export default Home;
