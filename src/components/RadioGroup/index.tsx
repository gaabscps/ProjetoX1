import { useState } from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  selectedValue: string;
  setSelectedValue: (selectedValue: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  setSelectedValue,
  selectedValue,
}) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      {options.map((option) => (
        <div className="radioItem" key={option.value}>
          <label>
            <input
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleRadioChange}
            />
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
};
