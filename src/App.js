import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import Gallery from './Gallery';

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

  constructor() {
    super();
    
    this.state = {
      page: 0,
      data: [],
      query: 'dog',
      loading: true
    };

    this.initialState = this.state;
  }

  componentDidMount() {
    this.fetchImages();
  }

  updateQuery(value) {
    this.setState({
      ...this.initialState,
      query: value
    }, () => {
      this.fetchImages();
    });
  }

  prevPage() {
    this.setState((prevState) => {
      return {
        page: prevState.page - 1
      }
    }, () => {
      this.fetchImages();
    });
  }

  nextPage() {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1
      }
    }, () => {
      this.fetchImages();
    });
  }

  async fetchImages() {

    this.setState({ loading: true });
    
    const { query, page } = this.state;
    const key = process.env.REACT_APP_GIFFY_API_KEY;
    const endpoint = 'https://api.giphy.com/v1/gifs/search';

    const response = await fetch(`${ endpoint }?api_key=${ key }&q=${ query }&offset=${ page * 25 }`);
    const { data } = await response.json();

    this.setState({
      data: data,
      loading: false
    });
    
  }

  render() {
    return (
      <Fragment>

        <Header>
          <Heading>
            { this.state.query === 'dog' ? '🐶' : '🐱' }
          </Heading>

          <button onClick= { () => this.updateQuery('dog') } disabled={ this.state.query === 'dog' }>Dog Search</button>
          <button onClick= { () => this.updateQuery('cat') } disabled={ this.state.query === 'cat' }>Cat Search</button>
        </Header>

        <Content>
          <Gallery data={ this.state.data } />
        </Content>

        <Footer>
          <Pagination
            page={ this.state.page }
            prev={ () => this.prevPage() }
            next={ () => this.nextPage() }
          />
        </Footer>

      </Fragment>
    );
  }

}

export default App;
