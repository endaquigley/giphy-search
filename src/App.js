import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Modal from "./Modal.js";
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

const App = React.memo(
  ({
    data,
    page,
    query,
    selected,
    prevPage,
    nextPage,
    fetchImages,
    updateQuery,
    updateSelected
  }) => {
    return (
      <Fragment>
        <Modal selected={selected} updateSelected={updateSelected} />

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
          <Gallery
            data={data}
            page={page}
            query={query}
            fetchImages={fetchImages}
            updateSelected={updateSelected}
          />
        </Content>

        <Footer>
          <Pagination page={page} prevPage={prevPage} nextPage={nextPage} />
        </Footer>
      </Fragment>
    );
  }
);

const mapStateToProps = ({ data, page, query, selected }) => ({
  data,
  page,
  query,
  selected
});

const mapDispatchToProps = dispatch => ({
  prevPage: () => dispatch(actions.prevPage()),
  nextPage: () => dispatch(actions.nextPage()),
  fetchImages: () => dispatch(actions.fetchImages()),
  updateQuery: query => {
    return dispatch(actions.updateQuery(query));
  },
  updateSelected: selected => {
    return dispatch(actions.updateSelected(selected));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
