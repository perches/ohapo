import React from "react";
import styled from "styled-components";
import {
  Grid,
  CardContent,
  Card
} from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent style={{ height: 180 }}>
                weather
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
