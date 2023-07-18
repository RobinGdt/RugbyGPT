import React, { useState } from 'react';
import './checkBox.css';

const CheckboxLine = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox-line">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        Se souvenir de moi
      </label>
      <a href="/forgot-password">Mot de passe oublié?</a>
    </div>
  );
};

export default CheckboxLine;
