import React, { useState } from 'react';

import { Modal } from './modal/Modal';

let ard = 'vark';

export const App = (config: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <h1>App Title should go here</h1>

      <button onClick={() => setModalOpen(!modalOpen)}>Toggle Modal</button>

      <Modal open={modalOpen} />
    </React.Fragment>
  );
};
