import React from 'react';
import toggleModal from './modalUtils';
import './Modal.css';

export default function Modal({ type, btnOpenText, btnCloseText, modalText, actions }) {
  // The showModal function opens the modal and performs the actions
  // passed as props, such as handling the submission of a form
  function showModal(e) {
    e.preventDefault();
    toggleModal();
    actions(e); // Calls the actions passed as props
  }

  // The hideModal function closes the modal
  function hideModal(e) {
    e.preventDefault();
    toggleModal();
  }

  return (
    <>
      <button type={type} data-open-modal className='open' onClick={showModal}>
        {btnOpenText}
      </button>
      <dialog data-modal>
        <p>{modalText}</p>
        <button data-close-modal className='close' onClick={hideModal}>
          {btnCloseText}
        </button>
      </dialog>
    </>
  );
};
