import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Gallery from "./Gallery";
import Pagination from "./Pagination";
import * as actions from "./actions";

const Header = styled.header`
  padding: 20px;
  text-align: center;
`;

const Content = styled.main`
  background-color: var(--secondary-colour);
`;

const Footer = styled.footer`
  color: white;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 50px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 15px;
`;

const App = React.memo(({ page, query, prevPage, nextPage, updateQuery }) => {
  return (
    <Fragment>
      <Header>
        <Heading>{query === "dog" ? "🐶" : "🐱"}</Heading>
        <button onClick={() => updateQuery("dog")} disabled={query === "dog"}>
          Dog Search
        </button>
        <button onClick={() => updateQuery("cat")} disabled={query === "cat"}>
          Cat Search
        </button>
      </Header>

      <Content>
        <Gallery />
      </Content>

      <Footer>
        <Pagination
          page={page}
          prevPage={() => prevPage()}
          nextPage={() => nextPage()}
        />
      </Footer>
    </Fragment>
  );
});

const mapStateToProps = state => {
  return {
    page: state.page,
    query: state.query
  };
};

const mapDispatchToProps = dispatch => {
  return {
    prevPage: () => dispatch(actions.prevPage()),
    nextPage: () => dispatch(actions.nextPage()),
    updateQuery: query => {
      return dispatch(actions.updateQuery(query));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
