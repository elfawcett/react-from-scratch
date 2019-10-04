import React from 'react';

export interface IModalProps {
  open: boolean;
}

const Modal: React.FC<IModalProps> = ({ open }) => (
  <div style={{ backgroundColor: 'red', display: open ? 'inline-block' : 'none', width: '50%' }}>
    <h3>I'm a modal</h3>
  </div>
);

export { Modal };
