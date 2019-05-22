import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import closeIcon from "./images/close-icon.svg";

import { useDisablePageScroll } from "./hooks";
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

export const Modal = React.memo(() => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.selected);

  useDisablePageScroll(selected);

  const updateSelected = () => {
    return dispatch(actions.updateSelected());
  };

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
