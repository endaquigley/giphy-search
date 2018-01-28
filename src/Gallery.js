import React, { Component } from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail.js';
import Modal from './Modal.js';
import { connect } from 'react-redux';
import * as actions from './actions';

const Wrapper = styled.div`
  margin: 15px;
  display: grid;
  grid-gap: 15px;
  --gallery-thumbnail-width: 85px;
  grid-template-columns: repeat(auto-fit, minmax(var(--gallery-thumbnail-width), 1fr));

  @media(min-width: 690px) {
    --gallery-thumbnail-width: 120px;
  }
`;

export class Gallery extends Component {

  componentDidMount() {
    this.props.fetchImages();
  }

  componentDidUpdate(newProps) {
    const samePage = (this.props.page === newProps.page);
    const sameQuery = (this.props.query === newProps.query);
    
    if (samePage === false || sameQuery === false) {
      this.props.fetchImages();
    }
  }

  renderSelectedModal() {
    if (this.props.selected) {
      return (
        <Modal
          selected={ this.props.selected }
          handleClick={ () => this.props.updateSelected(undefined) }
        />
      );
    }
  }

  renderThumbnail(media) {
    return  (
      <Thumbnail
        key={ media.id }
        source={ media.images.preview_gif.url }
        handleClick={ () => this.props.updateSelected(media) }
      />
    );
  }

  render() {
    return (
      <Wrapper>
        { this.renderSelectedModal() }
        { this.props.data.map((media) => this.renderThumbnail(media)) }
      </Wrapper>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    page: state.page,
    query: state.query,
    selected: state.selected
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => dispatch(actions.fetchImages()),
    updateSelected: (selected) => {
      return dispatch(actions.updateSelected(selected));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
