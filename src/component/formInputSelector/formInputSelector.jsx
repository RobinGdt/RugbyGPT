import './formInputSelector.css';

const SelectInput = ({ title, options = [], placeholder }) => {
  const selectedOptions = options || ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="input-container">
      <label className="input-title">{title}</label>
      <select className="input-field" placeholder={placeholder}>
        {selectedOptions &&
          selectedOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectInput;
