import React, { useEffect } from "react";
import styled from "styled-components";

import Thumbnail from "./Thumbnail.js";

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

const Gallery = React.memo(
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

export default Gallery;
