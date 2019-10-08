import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
// import { connect } from "react-redux";
import {
  Grid,
  // CircularProgress,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  // CardActions,
  // CardContent,
  // CardMedia,
  // Button
} from "@material-ui/core";
// import fetchNews from "../../actions/fetchNews";
import { theme } from "../../consts/theme";

class WhatDays extends React.Component {
  render() {
    return (
      <Wrapper>
        <CardContainer>
          <Table border="0">
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  <SideDayText>○月×日</SideDayText>
                </TableCell>
                <TableCell align="center">
                  <TodayText>○月×日</TodayText>
                </TableCell>
                <TableCell align="center">
                  <SideDayText>○月×日</SideDayText>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">
                  <SideDayText>△△△△△△△△の日</SideDayText>
                </TableCell>
                <TableCell align="center">
                  <TodayText>△△△△△△△△の日</TodayText>
                </TableCell>
                <TableCell align="center">
                  <SideDayText>△△△△△△△△の日</SideDayText>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          {/* <Grid container>
            <Grid item xs={3}>
              <SideDayText>

                <br />
                △△△△△△△△の日
              </SideDayText>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item xs={6}>
              <TodayText>
                ○月×日
                <br /> △△△△△△△△の日
              </TodayText>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item åxs={3}>
              <SideDayText>
                ○月×日
                <br /> △△△△△△△△の日
              </SideDayText>
            </Grid>
          </Grid> */}
        </CardContainer>
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  text-align: center;
`;

const CardContainer = styled(Card)`
  padding: 20px;
`;

const SideDayText = styled.span`
  font-size: 16px;
  color: ${theme.palette.muted.main};
`;

const TodayText = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: ${theme.palette.muted.dark};
`;

// const mapStateToProps = state => ({
//   news: state.news,
//   error: state.news.error,
//   isLoading: state.news.isLoading
// });
// const mapDispatchToProps = dispatch => ({
//   loadNews: (
//     params = {
//       country: "jp"
//     }
//   ) => dispatch(fetchNews(params))
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(NewsCard);

export default WhatDays;
