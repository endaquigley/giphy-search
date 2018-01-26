import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import GalleryContainer from './GalleryContainer';
import Gallery from './Gallery';
import Pagination from './Pagination';

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

class App extends Component {

  state = {
    page: 0,
    query: 'dog'
  }

  updateQuery(query) {
    this.setState({
      page: 0,
      query: query
    });
  }

  prevPage() {
    this.setState(({ page }) => {
      return { page: page - 1 }
    });
  }

  nextPage() {
    this.setState(({ page }) => {
      return { page: page + 1 }
    });
  }

  render() {
    return (
      <Fragment>

        <Header>
          <Heading>
            { this.state.query === 'dog' ? '🐶' : '🐱' }
          </Heading>

          <button onClick={ () => this.updateQuery('dog') } disabled={ this.state.query === 'dog' }>Dog Search</button>
          <button onClick={ () => this.updateQuery('cat') } disabled={ this.state.query === 'cat' }>Cat Search</button>
        </Header>

        <Content>
          <GalleryContainer page={ this.state.page } query={ this.state.query } render={({ data }) => (
            <Gallery data={ data } />
          )}/>
        </Content>

        <Footer>
          <Pagination
            page={ this.state.page }
            prevPage={ () => this.prevPage() }
            nextPage={ () => this.nextPage() }
          />
        </Footer>

      </Fragment>
    );
  }

}

export default App;
