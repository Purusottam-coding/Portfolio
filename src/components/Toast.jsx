import React from 'react';

export default function Toast({ toastMessage, isToastActive }) {
  return (
    <div className={`toast ${isToastActive ? 'active' : ''}`} id="toast">
      {toastMessage}
    </div>
  );
}
