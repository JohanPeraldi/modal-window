# Modal Window Library
## Description
This is a very simple modal window component library to be used in React projects.
## Installation
To install this library, run the following command:
```bash
npm install @johanpm/modal-window
```
## Usage
To use this library, import the Modal component in your React project, as follows:
```javascript
import React from 'react';
import Modal from '@johanpm/modal-window';
```
Then, you can use the Modal component in your project, as follows:
```javascript
const App = () => {
  const type = 'button';
  const modalText = 'This is a modal window';
  const btnOpenText = 'Open';
  const btnCloseText = 'Close';
  const message = 'The modal window was opened';
  function logMessage(message) {
    console.log(message);
  }

  return (
    <div>
      <Modal
        type={type}
        modalText={modalText}
        btnOpenText={btnOpenText}
        btnCloseText={btnCloseText}
        actions={logMessage}
      />
    </div>
  );
};
```
You can use the following props in the Modal component:
```md
| Prop | Type | Description |
| type | string | The type of the modal window's open button. It can be one of the three valid values for an html button element: 'button', 'submit' or 'reset' |
| modalText | string | The text that will be displayed inside the modal window |
| btnOpenText | string | The text that will be displayed in the button that opens the modal window |
| btnCloseText | string | The text that will be displayed in the button that closes the modal window |
| actions | function | The function that will be executed when the modal window is opened |
```
