import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { rgba } from "polished";
import { Grid, CircularProgress } from "@material-ui/core";
import fetchWeatherForecast from "../../actions/fetchWeatherForecast";
import { theme } from "../../consts/theme";

class WeatherCard extends React.Component {
  componentDidMount() {
    this.props.loadWeatherForecast();
  }
  render() {
    const {
      weatherForecast,
      isLoading,
      error
    } = this.props;
    const result = weatherForecast.weatherForecast;
    const this24Hours = [];
    const chartData = [];

    const city = result && result.city.name;
    result && buildWeather();
    result && buildChartData();

    function buildWeather() {
      for (let i = 0, n = 24 / 3; i < n; i++) {
        let time = new Date([result.list[i].dt_txt]);
        let jstTime = time.setHours(time.getHours() + 9); // JSTに変換
        this24Hours[i] = { weather: "", timeStamp: "", iconUrl: "" };

        this24Hours[i].weather = result.list[i].weather[0].description;
        this24Hours[i].timeStamp = `${new Date(jstTime).getHours()}時`;
        // TODO: ハードコード
        this24Hours[i].iconUrl = `http://openweathermap.org/img/wn/${[
          result.list[i].weather[0].icon
        ]}.png`;
      }
      return this24Hours;
    }

    function buildChartData() {
      for (let i = 0, n = 24 / 3; i < n; i++) {
        chartData[i] = { name: "", temperature: "", rain: 0 };
        let time = new Date([result.list[i].dt_txt]);
        let jstTime = time.setHours(time.getHours() + 9); // JSTに変換

        chartData[i].name = `${new Date(jstTime).getHours()}時`;
        chartData[i].temperature = Math.round((result.list[i].main.temp - process.env.KELVIN) * 10) / 10;
        chartData[i].rain = result.list[i].rain ? result.list[i].rain["3h"] : 0;
      }
      return chartData;
    }

    return (
      <Wrapper>
        {isLoading ? (
          <Grid container justify="center">
            <CenteringGrid item>
              <CircularProgress color="secondary" size={100} />
            </CenteringGrid>
          </Grid>
        ) : error ? (
          <Grid container justify="center">
            <CenteringGrid item>
              <ErrorText>エラーが発生しました</ErrorText>
              <ErrorText>もう一度お試しください🙇</ErrorText>
            </CenteringGrid>
          </Grid>
        ) : (
          <>
            <Grid container justify="center">
              <Grid item>
                <CityWrapperAbsolute>
                  <CityWrapperRelative>
                    <CityText>{city}</CityText>
                  </CityWrapperRelative>
                </CityWrapperAbsolute>
              </Grid>
            </Grid>
            <DetailsWrapperRelative>
              <DetailsWrapperAbsolute container justify="space-between">
                {this24Hours &&
                  this24Hours.map((w, index) => (
                    <EachDetailsContainer item key={index}>
                      <TimeStampText>{String(w.timeStamp)}</TimeStampText>
                      <img src={w.iconUrl} />
                      <WeatherText>{w.weather}</WeatherText>
                    </EachDetailsContainer>
                  ))}
              </DetailsWrapperAbsolute>
            </DetailsWrapperRelative>
            <Grid container justify="center">
              {chartData && (
                <ChartContainer style={{ width: "90%", height: 200 }}>
                  <ResponsiveContainer>
                    <ComposedChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                      <YAxis yAxisId="left" unit="℃" tick={{ fontSize: 14 }} />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        unit="mm"
                        tick={{ fontSize: 14 }}
                      />
                      <Tooltip />
                      <Legend />
                      <Area
                        yAxisId="right"
                        type="step"
                        dataKey="rain"
                        stroke={theme.palette.info.main}
                        strokeWidth={4}
                        activeDot={{ r: 8 }}
                        unit="mm"
                      />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="temperature"
                        stroke={theme.palette.secondary.dark}
                        strokeWidth={4}
                        activeDot={{ r: 8 }}
                        unit="℃"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </ChartContainer>
              )}
            </Grid>
          </>
        )}
      </Wrapper>
    );
  }
}

WeatherCard.propTypes = {
  loadWeatherForecast: PropTypes.func.isRequired,
  weatherForecast: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
};

const Wrapper = styled.div`
  height: 300px;
`;

const CenteringGrid = styled(Grid)`
  padding: 30px;
  text-align: center;
`;

const ErrorText = styled.p`
  color: ${theme.palette.muted.dark};
`;

const CityWrapperAbsolute = styled.div`
  position: absolute;
  z-index: 1;
  text-align: center;
`;

const CityWrapperRelative = styled.div`
  position: relative;
`;

const CityText = styled.p`
  text-align: center;
  -webkit-transform: translate(-50%, 40%);
  transform: translate(-50%, 40%);
  font-size: 100px;
  font-weight: 900;
  color: #fff;
  text-shadow: 1px 1px 0 #333, -1px -1px 0 #fff, -1px 1px 0 #fff,
    1px -1px 0 #333, 0px 1px 0 #333, 0-1px 0 #fff, -1px 0 0 #fff, 1px 0 0 #fff;
`;

const DetailsWrapperRelative = styled.div`
  position: relative;
  margin: 0 90px;
`;

const DetailsWrapperAbsolute = styled(Grid)`
  position: absolute;
  z-index: 3;
`;

const EachDetailsContainer = styled(Grid)`
  border: 1px;
  text-align: center;
  background-color: ${rgba(theme.palette.primary.main, 0.5)};
  border-radius: 8px;
  width: calc((100% / 8) - 15px);
  padding: 5px;
  margin-top: 15px;
`;

const WeatherText = styled.p`
  font-size: 14px;
  color: ${theme.palette.muted.dark};
`;

const TimeStampText = styled.p`
  font-size: 14px;
  color: ${theme.palette.muted.dark};
`;

const ChartContainer = styled.div`
  -webkit-transform: translate(0%, 50%);
  transform: translate(0%, 50%);
  margin-top: 20px;
  z-index: 2;
  position: absolute;
`;

const mapStateToProps = state => ({
  weatherForecast: state.weatherForecast,
  error: state.weatherForecast.error,
  isLoading: state.weatherForecast.isLoading
});
const mapDispatchToProps = dispatch => ({
  loadWeatherForecast: (
    params = {
      // TODO: user_profileから都市名を持ってくる
      q: "Tokyo",
      lang: "ja"
    }
  ) => dispatch(fetchWeatherForecast(params))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherCard);
