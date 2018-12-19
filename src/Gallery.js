import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Modal from "./Modal.js";
import Thumbnail from "./Thumbnail.js";
import * as actions from "./actions";

const Wrapper = styled.div`
  margin: 15px;
  display: grid;
  grid-gap: 15px;
  --thumbnail-width: 85px;
  grid-template-columns: repeat(auto-fit, minmax(var(--thumbnail-width), 1fr));

  @media (min-width: 690px) {
    --thumbnail-width: 120px;
  }
`;

export const Gallery = React.memo(
  ({ data, page, query, selected, fetchImages, updateSelected }) => {
    useEffect(
      () => {
        fetchImages();
      },
      [query, page]
    );

    const renderSelectedModal = () => {
      if (selected) {
        return (
          <Modal
            selected={selected}
            handleClick={() => updateSelected(undefined)}
          />
        );
      }
    };

    const renderThumbnail = media => {
      if (media.images.preview_gif === undefined) {
        return;
      }

      return (
        <Thumbnail
          key={media.id}
          source={media.images.preview_gif.url}
          handleClick={() => updateSelected(media)}
        />
      );
    };

    return (
      <Wrapper>
        {renderSelectedModal()}
        {data.map(media => renderThumbnail(media))}
      </Wrapper>
    );
  }
);

const mapStateToProps = state => {
  return {
    data: state.data,
    page: state.page,
    query: state.query,
    selected: state.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: () => dispatch(actions.fetchImages()),
    updateSelected: selected => {
      return dispatch(actions.updateSelected(selected));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
