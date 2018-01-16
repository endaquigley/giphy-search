import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import Gallery from './Gallery';

const Emoji = styled.p`
  margin: 0;
  font-size: 80px;
`;

const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 15px;
`;

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      page: 0,
      data: [],
      query: 'dogs',
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

    this.setState((prevState) => {
      return {
        data: data,
        loading: false
      }
    });
    
  }

  render() {
    return (
      <Fragment>

        <Emoji>{ this.state.query === 'dogs' ? '🐶' : '🐱' }</Emoji>
        <Heading>Searching for { this.state.query }...</Heading>
        
        <button onClick= { () => this.updateQuery('dogs') } disabled={ this.state.query === 'dogs' }>Switch to Dogs</button>
        <button onClick= { () => this.updateQuery('cats') } disabled={ this.state.query === 'cats' }>Switch to Cats</button>

        <Gallery data={ this.state.data } />

        <Pagination
          page={ this.state.page }
          prev={ () => this.prevPage() }
          next={ () => this.nextPage() }
        />
        
      </Fragment>
    );
  }

}

export default App;
