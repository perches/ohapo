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
    const articles = news.news && news.news.articles;
    const articleList = [];

    console.log(articles);

    articles && buildNews();

    function buildNews() {
      for (let i = 0, n = 6; i < n; i++) {
        articleList[i] = {
          source: "",
          title: "",
          description: "",
          publishedAt: "",
          image: "",
          url: ""
        };

        let publishedAt = `
          ${new Date(articles[i].publishedAt).getMonth() + 1}/${new Date(articles[i].publishedAt).getDate()}
          ${new Date(articles[i].publishedAt).getHours()}:${new Date(articles[i].publishedAt).getMinutes()}
        `;

        articleList[i].source = articles[i].source.name;
        articleList[i].title = articles[i].title;
        articleList[i].description = articles[i].description;
        articleList[i].publishedAt = publishedAt;
        articleList[i].image = articles[i].urlToImage || "";
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
                      style={{ height: 250 }}
                      image={article.image}
                      title={article.title}
                    />
                    <CardContent>
                      <ArticleTitle>{article.title}</ArticleTitle>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {article.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        共有
                      </Button>
                      <Button size="small" color="primary">
                        <SourceLink href={article.url}>ソースを見る</SourceLink>
                      </Button>
                      <PublishedAtWrapper>
                        <PublishedAt>{article.publishedAt}</PublishedAt>
                      </PublishedAtWrapper>
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

const ArticleTitle = styled.h4`
  color: ${theme.palette.muted.dark};
  margin-bottom: 10px;
`;

const SourceLink = styled.a`
  text-decoration: none;
`;

const PublishedAtWrapper = styled.div`
  width: 60%;
  text-align: right;
`;

const PublishedAt = styled.span`
  font-size: 12px;
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
