import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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
  ({ data, page, query, fetchImages, updateSelected }) => {
    useEffect(
      () => {
        fetchImages();
      },
      [page, query]
    );

    return (
      <Wrapper>
        {data.map(media =>
          media.images.preview_gif === undefined ? null : (
            <Thumbnail
              key={media.id}
              source={media.images.preview_gif.url}
              handleClick={() => updateSelected(media)}
            />
          )
        )}
      </Wrapper>
    );
  }
);

const mapStateToProps = ({ data, page, query }) => ({ data, page, query });

const mapDispatchToProps = dispatch => ({
  fetchImages: () => dispatch(actions.fetchImages()),
  updateSelected: selected => {
    return dispatch(actions.updateSelected(selected));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
