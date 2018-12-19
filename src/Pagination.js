import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Pagination = React.memo(({ page, prevPage, nextPage }) => (
  <Wrapper>
    <button onClick={prevPage} disabled={page === 0}>
      Prev Page
    </button>
    <span>Page {page + 1}</span>
    <button onClick={nextPage} disabled={page === 99}>
      Next Page
    </button>
  </Wrapper>
));

export default Pagination;
