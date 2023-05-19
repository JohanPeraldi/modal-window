import React from 'react';
import toggleModal from './modalUtils';
import './Modal.css';

export default function Modal(props) {
  return (
    <>
      <button data-open-modal onClick={toggleModal}>
        {props.btnOpenText}
      </button>
      <dialog data-modal>
        <p>{props.modalText}</p>
        <button data-close-modal className='close' onClick={toggleModal}>
          {props.btnCloseText}
        </button>
      </dialog>
    </>
  );
};
