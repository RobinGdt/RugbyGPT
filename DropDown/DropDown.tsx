import React, { useState } from "react";
import styled from "styled-components";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  color: string;
  width: string;
}

const Wrapper = styled.div<{
  width: string;
  color: string;
}>`
  width: ${(props) => props.width};
  height: 54px;
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  border: none;
  transition: background-color 0.1s ease-out;
  outline: none;
  cursor: pointer;
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  color,
  width,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <Wrapper width={width} color={color}>
      <select
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>{selectedOption}</p>
    </Wrapper>
  );
};

export default Dropdown;
