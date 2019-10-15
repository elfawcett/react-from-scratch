import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = () => (
  <div style={{ textAlign: 'center' }}>
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export { LoadingSpinner };
