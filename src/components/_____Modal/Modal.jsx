import React from 'react';
import { StyledOverlayDiv, StyledModalDiv } from './Modal.styled';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, closeModal }) => {
  const handleMouseClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <StyledOverlayDiv onClick={handleMouseClick}>
      <StyledModalDiv>{children}</StyledModalDiv>
    </StyledOverlayDiv>,
    modalRoot
  );
};
