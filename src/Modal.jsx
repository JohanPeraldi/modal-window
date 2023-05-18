import React from 'react';
import toggleModal from './modalUtils';

export default function Modal(props) {
  return (
    <>
      <button data-open-modal onClick={toggleModal}>
        {props.btnOpenText}
      </button>
      <dialog data-modal>
        <p>{props.modalText}</p>
        <button data-close-modal onClick={toggleModal}>
          {props.btnCloseText}
        </button>
      </dialog>
    </>
  );
};
