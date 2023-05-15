import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from './Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Modal btnOpenText='Open' modalText='This is a very basic modal window' btnCloseText='Close' />
  </React.StrictMode>
);
