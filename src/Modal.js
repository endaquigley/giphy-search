import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import closeIcon from "./images/close-icon.svg";

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

const Modal = React.memo(({ selected, handleClick }) => {
  useEffect(() => {
    // disable scroll when modal is open
    document.body.classList.add("no-scroll");

    return () => {
      // enable scroll when modal is closed
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <Wrapper onClick={() => handleClick()}>
      <Close src={closeIcon} />
      <Video
        loop
        muted
        autoPlay
        playsInline
        src={selected.images.original.mp4}
      />
    </Wrapper>
  );
});

export default Modal;
