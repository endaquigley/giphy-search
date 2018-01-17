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
  };

  setSelected(media) {
    this.setState({
      selected: media
    });
  }

  render() {
    return (
      <Fragment>
        <Modal selected={ this.state.selected } handleClick={ () => this.setSelected(undefined) } />
        <Wrapper>
          {
            this.props.data.map((media) => {
              return (
                <Thumbnail
                  key={ media.id }
                  source={ media.images.preview.mp4 }
                  handleClick={ () => this.setSelected(media) }
                />
              )
            })
          }
        </Wrapper>
      </Fragment>
    )
  }

}

export default Gallery;
