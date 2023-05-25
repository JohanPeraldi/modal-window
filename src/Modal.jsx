import React from 'react';
import toggleModal from './modalUtils';
import './Modal.css';

export default function Modal({ btnOpenText, btnCloseText, modalText, actions }) {
  // The showModal function opens the modal and performs the actions
  // passed as props, such as handling the submission of a form
  function showModal(e) {
    e.preventDefault(); // Prevents the page from reloading when the button is clicked
    toggleModal();
    actions(); // Calls the actions passed as props
  }

  // The hideModal function closes the modal
  function hideModal() {
    toggleModal();
  }

  return (
    <>
      <button data-open-modal className='open' onClick={showModal}>
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
