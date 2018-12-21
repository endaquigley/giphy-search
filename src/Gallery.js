import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import Thumbnail from "./Thumbnail.js";

import { Store } from "./store";
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

const Container = React.memo(() => {
  const {
    state: { data, page, query },
    dispatch
  } = useContext(Store);

  const fetchImages = async () => {
    const key = process.env.REACT_APP_GIPHY_API_KEY;
    const endpoint = process.env.REACT_APP_GIPHY_API_ENDPOINT;
    const url = `${endpoint}?api_key=${key}&q=${query}&offset=${page * 25}`;

    const response = await fetch(url);
    const { data } = await response.json();

    dispatch(actions.updateData(data));
  };

  const updateSelected = selected => {
    return dispatch(actions.updateSelected(selected));
  };

  useEffect(
    () => {
      fetchImages();
    },
    [page, query]
  );

  return <Gallery data={data} updateSelected={updateSelected} />;
});

export const Gallery = React.memo(({ data, updateSelected }) => (
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
));

export default Container;
