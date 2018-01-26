import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail.js';
import Modal from './Modal.js';

const Wrapper = styled.div`
  margin: 15px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
`;

class Gallery extends Component {

  state = {
    selected: undefined
  }

  setSelected(media) {
    this.setState({
      selected: media
    });
  }

  render() {
    let selectedModal = null;

    if (this.state.selected) {
      selectedModal = (
        <Modal
          selected={ this.state.selected }
          handleClick={ () => this.setSelected(undefined) }
        />
      )
    }

    return (
      <Fragment>
        { selectedModal }
        <Wrapper>
          {
            this.props.data.map((media) => (
              <Thumbnail
                key={ media.id }
                source={ media.images.preview_gif.url }
                handleClick={ () => this.setSelected(media) }
              />
            ))
          }
        </Wrapper>
      </Fragment>
    )
  }

}

export default Gallery;
