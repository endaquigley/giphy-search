import React, { useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import closeIcon from "./images/close-icon.svg";

import { Store } from "./store";
import * as actions from "./actions";

const scale = keyframes`
  from { transform: scale(0) }
  to { transform: scale(1) }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
`;

const Close = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
`;

const Video = styled.video`
  width: 100%;
  max-width: 85vw;
  max-height: 85vh;
  animation: 0.4s ${scale};
`;

const Container = React.memo(() => {
  const {
    state: { selected },
    dispatch
  } = useContext(Store);

  const updateSelected = () => {
    return dispatch(actions.updateSelected());
  };

  return <Modal selected={selected} updateSelected={updateSelected} />;
});

export const Modal = React.memo(({ selected, updateSelected }) => {
  useEffect(
    () => {
      const className = "no-scroll";
      const { classList } = document.body;

      // disable page scroll when modal is open...
      selected ? classList.add(className) : classList.remove(className);

      return () => {
        classList.remove(className);
      };
    },
    [selected]
  );

  return (
    selected && (
      <Wrapper onClick={updateSelected}>
        <Close src={closeIcon} />
        <Video
          loop
          muted
          autoPlay
          playsInline
          src={selected.images.original.mp4}
        />
      </Wrapper>
    )
  );
});

export default Container;
