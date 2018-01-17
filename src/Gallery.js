import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Modal from './Modal.js'

const Wrapper = styled.div`
  margin: 20px 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
`;

const Thumbnail = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transform: scale(1);
  will-change: transform;
  transition: transform 0.3s ease;
  padding-bottom: 100%;
  &:hover {
    transform: scale(0.9);
  }
`;

const Preview = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
                <div key={ media.id }>
                  <Thumbnail>
                    <Preview
                      loop
                      muted
                      autoPlay
                      src={ media.images.preview.mp4 }
                      onClick={ () => this.setSelected(media) }
                    />
                  </Thumbnail>
                </div>
              )
            })
          }
        </Wrapper>
      </Fragment>
    )
  }

}

export default Gallery;
