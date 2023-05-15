import React from 'react';

export default function Modal(props) {
  function handleToggleModal(e) {
    const modal = e.target.closest('[data-modal]')
    if (modal) {
      modal.close();
    } else {
      e.target.nextElementSibling.showModal();
    }
  };
  
  return (
    <>
      <button data-open-modal onClick={handleToggleModal}>{props.btnOpenText}</button>
      <dialog data-modal>
        <p>{props.modalText}</p>
        <button data-close-modal onClick={handleToggleModal}>{props.btnCloseText}</button>
      </dialog>
    </>
  );
};
