import React, { useState } from 'react';
import './checkBox.css';

const CheckboxLine = ({ texte, forgot }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox-line">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className="checkbox-text">{texte}</span>
      </label>
      <a href="/forgot-password">{forgot}</a>
    </div>
  );
};

export default CheckboxLine;
