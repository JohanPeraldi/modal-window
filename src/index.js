import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from './Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Modal btn-open-text='Open' modal-text='This is a very basic modal window' btn-close-text='Close' />
  </React.StrictMode>
);
