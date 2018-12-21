import React, { Fragment, useContext } from "react";
import styled from "styled-components";

import { Store } from "./store";
import * as actions from "./actions";

const Heading = styled.h1`
  font-size: 50px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 15px;
`;

const Button = styled.button`
  overflow: hidden;
  margin: 5px;
  padding: 12px 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  border: 0 none;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #202129;
  background-color: #f2f2f2;

  &:hover:not(:disabled) {
    opacity: 1;
    color: #202129;
    background-color: #e1e2e2;
  }

  &:disabled {
    opacity: 0.6;
  }
`;

const Container = React.memo(() => {
  const {
    state: { query },
    dispatch
  } = useContext(Store);

  const updateQuery = query => {
    return dispatch(actions.updateQuery(query));
  };

  return <Navigation query={query} updateQuery={updateQuery} />;
});

export const Navigation = React.memo(({ query, updateQuery }) => (
  <Fragment>
    <Heading>{query === "dog" ? "🐶" : "🐱"}</Heading>
    <Button onClick={() => updateQuery("dog")} disabled={query === "dog"}>
      Dog Search
    </Button>
    <Button onClick={() => updateQuery("cat")} disabled={query === "cat"}>
      Cat Search
    </Button>
  </Fragment>
));

export default Container;
