import React, { Fragment, useContext } from "react";
import styled from "styled-components";

import Modal from "./Modal.js";
import Gallery from "./Gallery";
import Pagination from "./Pagination";
import StoreContext from "./StoreContext";
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

const Container = React.memo(() => {
  const { state, dispatch } = useContext(StoreContext);
  const { query } = state;

  const updateQuery = query => {
    return dispatch(actions.updateQuery(query));
  };

  return <App query={query} updateQuery={updateQuery} />;
});

export const App = React.memo(({ query = "dog", updateQuery }) => (
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
      <Modal />
      <Gallery />
    </Content>

    <Footer>
      <Pagination />
    </Footer>
  </Fragment>
));

export default Container;
