import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { rgba } from "polished";
import { CardContent, Card, Grid } from "@material-ui/core";
import { theme } from "../../consts/theme";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

class Home extends React.Component {
  render() {
    const {
      result
    } = this.props;

    const this24Hours = [];
    const chartData = [];
    const city = result && result.city.name;
    result && buildWeather();
    result && buildChartData();
    function buildWeather() {
      for(let i=0, n=(24/3); i<n; i++ ) {
        this24Hours[i] = { weather: '', timeStamp: '', iconUrl: '' };

        this24Hours[i].weather = result.list[i].weather[0].description;
        this24Hours[i].timeStamp = `${new Date([
          result.list[i].dt_txt
        ]).getHours() + 9}時`;
        // TODO: ハードコード
        this24Hours[i].iconUrl =  `http://openweathermap.org/img/wn/${[
          result.list[i].weather[0].icon
        ]}.png`;
      }
      console.log(result);
      console.log(this24Hours);
      return this24Hours;
    }

    function buildChartData() {
      for (let i = 0, n = 24 / 3; i < n; i++) {
        let time = new Date([result.list[i].dt_txt]);
        let jstTime = time.setHours(time.getHours() + 9);

        chartData[i] = { name: "", temperature: "", rainyPercent: "" };
        chartData[i].name = `${new Date(jstTime).getHours()}時`;
        chartData[i].temperature =
          result.list[i].main.temp - process.env.KELVIN;
      }
      console.log(process.env.KELVIN);
      console.log(chartData);
      console.log(data);
      return chartData;
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
                <ChartContainer style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <LineChart
                      width={500}
                      height={300}
                      data={chartData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="temperature"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      {/* <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="uv"
                      stroke="#82ca9d"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="amt"
                      stroke="#82ca9d"
                    /> */}
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              )}
            </Grid>
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
  height: 600px;
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

const DetailsWrapperRelative = styled.div`
  position: relative;
`;

const DetailsWrapperAbsolute = styled(Grid)`
  position: absolute;
  width: 80%;
  z-index: 2;
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
`;

export default Home;
