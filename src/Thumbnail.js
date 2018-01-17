import React from 'react';
import styled from 'styled-components';

const GridChild = styled.div`
  /* perserve aspect ratio in Firefox */
`;

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transform: scale(1);
  will-change: transform;
  transition: transform 0.3s ease;
  background-color: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.75);
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

const Thumbnail = ({ source, handleClick }) => {
  return (
    <GridChild>
      <Wrapper>
        <Preview
          loop
          muted
          autoPlay
          src={ source }
          onClick={ () => handleClick() }
        />
      </Wrapper>
    </GridChild>
  )
};

export default Thumbnail;
