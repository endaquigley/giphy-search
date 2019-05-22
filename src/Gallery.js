import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { useFetchImages } from "./hooks";
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

export const Gallery = React.memo(() => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  useFetchImages();

  const updateSelected = selected => {
    return dispatch(actions.updateSelected(selected));
  };

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
});
