import React from 'react';
import './button.css';

function Button({ text, logoSrc, backgroundColor, color }) {
  return (
    <button className="button" style={{ backgroundColor, color }}>
      {logoSrc && <img src={logoSrc} alt="Logo" className="button-logo" />}
      {text}
    </button>
  );
}

export default Button;
