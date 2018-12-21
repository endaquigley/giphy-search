import React, { useContext } from "react";
import styled from "styled-components";

import { Store } from "./store";
import * as actions from "./actions";

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
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
    state: { page },
    dispatch
  } = useContext(Store);

  const minPage = 0;
  const maxPage = 99;

  const prevPage = () => {
    return dispatch(actions.prevPage());
  };

  const nextPage = () => {
    return dispatch(actions.nextPage());
  };

  return (
    <Pagination
      page={page}
      minPage={minPage}
      maxPage={maxPage}
      prevPage={prevPage}
      nextPage={nextPage}
    />
  );
});

export const Pagination = React.memo(
  ({ page, minPage = 0, maxPage = 99, prevPage, nextPage }) => (
    <Wrapper>
      <Button onClick={prevPage} disabled={page === minPage}>
        Prev Page
      </Button>
      <span>Page {page + 1}</span>
      <Button onClick={nextPage} disabled={page === maxPage}>
        Next Page
      </Button>
    </Wrapper>
  )
);

export default Container;
