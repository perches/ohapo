import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
// import { connect } from "react-redux";
import {
  Card,
} from "@material-ui/core";
// import fetchNews from "../../actions/fetchNews";
import { theme } from "../../consts/theme";

class WhatDays extends React.Component {
  render() {
    return (
      <Wrapper>
        <CardContainer>
          <table>
            <tbody>
              <tr>
                <TableData align="center">
                  <SideDayText>○月×日</SideDayText>
                </TableData>
                <TableData align="center">
                  <TodayText>○月×日</TodayText>
                </TableData>
                <TableData align="center">
                  <SideDayText>○月×日</SideDayText>
                </TableData>
              </tr>
              <tr>
                <TableData align="center">
                  <SideDayText>△△△△△△△△の日</SideDayText>
                </TableData>
                <TableData align="center">
                  <TodayText>△△△△△△△△の日</TodayText>
                </TableData>
                <TableData align="center">
                  <SideDayText>△△△△△△△△の日</SideDayText>
                </TableData>
              </tr>
            </tbody>
          </table>
        </CardContainer>
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const CardContainer = styled(Card)`
  padding: 20px;
`;

const TableData = styled.td`
  padding: 0 30px;
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
