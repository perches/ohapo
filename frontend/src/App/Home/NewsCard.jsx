import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  Grid,
  CircularProgress,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Divider
} from "@material-ui/core";
import fetchNews from "../../actions/fetchNews";
import { theme } from "../../consts/theme";

class NewsCard extends React.Component {
  componentDidMount() {
    this.props.loadNews();
  }

  render() {
    const { news, isLoading, error } = this.props;
    const articles = news.news && news.news.articles;
    const articleList = [];

    articles && buildNews();

    // Hours, Minuteの0詰め
    function toDoubleDigits(num) {
      let str = String(num);
      if (str.length === 1) str = "0" + str;
      return str;
    }

    function buildNews() {
      for (let i = 0, n = articles.length; i < n; i++) {
        articleList[i] = {
          source: "",
          title: "",
          description: "",
          publishedAt: "",
          image: "",
          url: ""
        };

        // publishedAtを MM/DD HH:MM 形式に変換する
        let publishedMonth = new Date(articles[i].publishedAt).getMonth() + 1;
        let publishedDate = new Date(articles[i].publishedAt).getDate();
        let publishedHours = toDoubleDigits(new Date(articles[i].publishedAt).getHours());
        let publishedMinutes = toDoubleDigits(new Date(articles[i].publishedAt).getMinutes());
        let publishedAt = `${publishedMonth}/${publishedDate} ${publishedHours}:${publishedMinutes}`;

        articleList[i].source = articles[i].source.name;
        articleList[i].title = articles[i].title;
        articleList[i].description = articles[i].description;
        articleList[i].publishedAt = publishedAt;
        articleList[i].image =
          articles[i].urlToImage ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz6VLdS-4Ztu3wpJGzQVYRotD-ygzxwU6LUFEDvZzuaY8FYli9"; // TODO: ダミーのイメージ
        articleList[i].url = articles[i].url;
      }
      return articleList;
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
          <Grid container justify="space-between">
            {articleList &&
              articleList.map((article, index) => (
                <EachNewsGrid item xs={4} key={index}>
                  <Card>
                    <CardMedia
                      style={{ height: 200 }}
                      image={article.image}
                      title={article.title}
                    />
                    <CardContent>
                      <ArticleTitle>{article.title}</ArticleTitle>
                      <PublishedAtWrapper>
                        <PublishedAt>{article.publishedAt}</PublishedAt>
                      </PublishedAtWrapper>
                      <DividerWrapper>
                        <Divider variant="middle" />
                      </DividerWrapper>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {article.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item xs={3}>
                          <Button size="small" color="primary">
                            共有
                          </Button>
                        </Grid>
                        <Grid item xs={5}>
                          <Button
                            size="small"
                            color="primary"
                            href={article.url}
                            target="_blank"
                          >
                            ソースを見る
                          </Button>
                        </Grid>
                        <Grid item xs={4}></Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </EachNewsGrid>
              ))}
          </Grid>
        )}
      </Wrapper>
    );
  }
}

NewsCard.propTypes = {
  loadNews: PropTypes.func.isRequired,
  news: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.bool
};

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

const EachNewsGrid = styled(Grid)`
  padding: 30px;
`;

const ArticleTitle = styled.span`
  font-weight: 600;
  color: ${theme.palette.muted.dark};
`;

const DividerWrapper = styled.div`
  margin: 10px;
`;

const SourceLink = styled.a`
  text-decoration: none;
`;

const PublishedAtWrapper = styled.div`
  text-align: right;
  margin: 0 20px;
`;

const PublishedAt = styled.span`
  font-size: 14px;
  color: ${theme.palette.muted.main};
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
