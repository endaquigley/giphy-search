import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Pagination extends Component {
  
  render() {
    return (
      <Wrapper>
        <button onClick= { () => this.props.prev() } disabled={ this.props.page === 0 }>
          Prev Page
        </button>
        <span>Page { this.props.page + 1 }</span>
        <button onClick= { () => this.props.next() }>
          Next Page
        </button>
      </Wrapper>
    )
  }

}

export default Pagination;
