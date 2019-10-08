import React from 'react';

import './Modal.css';

export interface IModalProps {
  open: boolean;
}

const Modal: React.FC<IModalProps> = ({ open }) =>
  open ? (
    <div className="Modal">
      <h3>I'm a modal</h3>
      <p>I'm content!</p>
    </div>
  ) : null;

export { Modal };
