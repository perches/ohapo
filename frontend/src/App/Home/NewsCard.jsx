import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { rgba } from "polished";
import {
  Grid,
  CircularProgress,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@material-ui/core";
import fetchNews from "../../actions/fetchNews";
import { theme } from "../../consts/theme";

class NewsCard extends React.Component {
  componentDidMount() {
    this.props.loadNews();
  }
  render() {
    const { news, isLoading, error } = this.props;
    // const result = weatherForecast.weatherForecast;

    // const city = result && result.city.name;
    // result && buildWeather();

    // function buildWeather() {
    //   for (let i = 0, n = 24 / 3; i < n; i++) {
    //   }
    //   return this24Hours;
    // }
    console.log("news");
    console.log(news);
    console.log(process.env.NEWS_API_URL);
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
            <Grid container justify="space-between">
              <Grid item xs={4}>
                <Card>
                <CardActionArea>
                  {/* <CardMedia
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles,
                      with over 6,000 species, ranging across all continents
                      except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
                </Card>
              </Grid>
            </Grid>
          )}
      </Wrapper>
    );
  }
}

// NewsCard.propTypes = {
//   loadWeatherForecast: PropTypes.func.isRequired,
//   weatherForecast: PropTypes.object,
//   isLoading: PropTypes.bool,
//   error: PropTypes.bool
// };

const Wrapper = styled.div`
  padding: 10px;
`;

const CenteringGrid = styled(Grid)`
  padding: 30px;
  text-align: center;
`;

const ErrorText = styled.p`
  color: ${theme.palette.muted.dark};
`;

const mapStateToProps = state => ({
  news: state.news,
  error: state.news.error,
  isLoading: state.news.isLoading
});
const mapDispatchToProps = dispatch => ({
  loadNews: (
    params = {
      country: "jp"
    }
  ) => dispatch(fetchNews(params))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsCard);
