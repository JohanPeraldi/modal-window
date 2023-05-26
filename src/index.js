import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from './Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
const type = 'submit';
const btnOpenText = 'Open';
const btnCloseText = 'X';
const modalOpenMessage = 'Modal open!';
let modalText;
function logMessage(message) {
  console.log(message);
}
function checkFormValidity() {
  return false;
}
const formIsValid = checkFormValidity();
if (formIsValid) {
  modalText = 'Testing the modal window!';
} else {
  modalText = 'Form is not valid!';
}

root.render(
  <React.StrictMode>
    <form>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' name='name' />
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' name='email' />
    </form>
    <Modal
      type={type}
      modalText={modalText}
      btnOpenText={btnOpenText}
      btnCloseText={btnCloseText}
      actions={() => logMessage(modalOpenMessage)}
    />
  </React.StrictMode>
);
