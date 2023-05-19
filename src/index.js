import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from './Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
const modalText = 'Testing the modal window!';
const btnOpenText = 'Open';
const btnCloseText = 'X';

root.render(
  <React.StrictMode>
    <Modal modalText={modalText} btnOpenText={btnOpenText} btnCloseText={btnCloseText} />
  </React.StrictMode>
);
