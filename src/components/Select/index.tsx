import Image from "next/image";
import React, { useState } from "react";
import Arrow from "../../assets/svg/arrowCard.svg";

interface SelectProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  option?: string[];
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  name?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  required?: boolean;
  marginBottom?: string;
}

export default function Select({
  value,
  onChange,
  option,
  label,
  placeholder,
  type,
  className,
  name,
  style,
  disabled,
  required,
  marginBottom = "20px",
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(value || "");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div
      style={{ marginBottom: marginBottom }}
      className="d-flex flex-column input-container"
    >
      {label && <label htmlFor={name}>{label}</label>}
      <select
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} input-${type} ${disabled ? "disabled" : ""} ${
          !value && selectedValue === "" ? "SelectPlaceholder" : ""
        } input`}
        id={name}
        name={name}
        style={style}
        disabled={disabled}
        required={required}
      >
        <option value="" className="SelectPlaceholder">
          {placeholder}
        </option>
        {option?.map((option, index) => (
          <option style={{ color: "white" }} key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div
        style={{
          position: "absolute",
          right: "20px",
          top: "33%",
          transform: "rotate(90deg)",
          zIndex: 0,
        }}
      >
        <Image src={Arrow} alt="" />
      </div>
    </div>
  );
}
