import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Pagination = ({ page, prevPage, nextPage }) => {
  return (
    <Wrapper>
      <button onClick= { () => prevPage() } disabled={ page === 0 }>
        Prev Page
      </button>
      <span>Page { page + 1 }</span>
      <button onClick= { () => nextPage() }>
        Next Page
      </button>
    </Wrapper>
  )
};

export default Pagination;
