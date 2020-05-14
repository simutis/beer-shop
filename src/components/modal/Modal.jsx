import React from 'react';
import ReactDOM from 'react-dom';
import Styled from './Modal.styles';

const Modal = ({
   children,
   title,
   onClose,
   elementSelector = 'root',
   styles,
   fullPageWidth,
 }) => {
  return ReactDOM.createPortal(
    <Styled.ModalOverlay>
      <Styled.ModalContainer
        data-test="modal"
        styles={styles}
        fullPageWidth={fullPageWidth}
      >
        <Styled.CloseButton onClick={() => onClose()}>
          CLOSE
        </Styled.CloseButton>
        <Styled.Content>{children}</Styled.Content>
      </Styled.ModalContainer>
    </Styled.ModalOverlay>,
    document.getElementById(elementSelector),
  );
};

export default Modal;
