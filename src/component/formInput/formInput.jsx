import React from 'react';
import './formInput.css';

const Input = ({ title, placeholder }) => (
  <div className="input-container">
    <label className="input-title">{title}</label>
    <input className="input-field" type="text" placeholder={placeholder} />
  </div>
);

export default Input;