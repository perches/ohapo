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
        <Wrapper>
          <CardContent>
            <Grid container justify="center">
              <Grid item>
                <CityWrapperAbsolute>
                  <CityWrapperRelative>
                    <CityText>{city}</CityText>
                  </CityWrapperRelative>
                </CityWrapperAbsolute>
              </Grid>
            </Grid>
            <DetailsWrapper container justify="space-between">
              {this24Hours &&
                this24Hours.map((w, index) => (
                  <EachDetailsContainer item key={index}>
                    <WeatherText>{w.weather}</WeatherText>
                    <img src={w.iconUrl} />
                    <TimeStampText>{String(w.timeStamp)}時</TimeStampText>
                  </EachDetailsContainer>
                ))}
            </DetailsWrapper>
          </CardContent>
        </Wrapper>
      </Card>
    );
  }
}

Home.propTypes = {
  result: PropTypes.object
};

const Wrapper = styled.div`
  background-color: ${rgba(theme.palette.muted.main, 0.4)};
  height: 200px;
`;

const CityWrapperAbsolute = styled.div`
  position: absolute;
  z-index: 1;
  text-align: center;
`;

const CityWrapperRelative = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const CityText = styled.p`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  font-size: 100px;
  font-weight: 900;
  color: #fff;
  text-shadow: 1px 1px 0 #333, -1px -1px 0 #fff, -1px 1px 0 #fff,
    1px -1px 0 #333, 0px 1px 0 #333, 0-1px 0 #fff, -1px 0 0 #fff, 1px 0 0 #fff;
`;

const DetailsWrapper = styled(Grid)`
  position: absolute;
  z-index: 2;
`;

const EachDetailsContainer = styled(Grid)`
  border: 1px;
  text-align: center;
  background-color: ${rgba(theme.palette.primary.main, 0.5)};
  border-radius: 8px;
  width: calc((100% / 8) - 15px);
  padding: 5px;
  margin: 15px 0;
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
