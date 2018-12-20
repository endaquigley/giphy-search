import React, { useContext } from "react";
import styled from "styled-components";

import StoreContext from "./StoreContext";
import * as actions from "./actions";

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Container = React.memo(() => {
  const { state, dispatch } = useContext(StoreContext);
  const { page } = state;

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
      <button onClick={prevPage} disabled={page === minPage}>
        Prev Page
      </button>
      <span>Page {page + 1}</span>
      <button onClick={nextPage} disabled={page === maxPage}>
        Next Page
      </button>
    </Wrapper>
  )
);

export default Container;
