import { Component } from 'react';

class GalleryContainer extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(newProps) {
    if (this.props !== newProps) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, page } = this.props;

    const key = process.env.REACT_APP_GIFFY_API_KEY;
    const endpoint = 'https://api.giphy.com/v1/gifs/search';
    const url = `${ endpoint }?api_key=${ key }&q=${ query }&offset=${ page * 25 }`;

    const response = await fetch(url);
    const { data } = await response.json();

    this.setState({ data });
  }

  render = () => this.props.render(this.state);

}

export default GalleryContainer;
