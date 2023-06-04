import React, { useState } from "react";

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  forgotPassword?: string;
  className?: string;
  name?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  required?: boolean;
  marginBottom?: string;
}

export default function Input({
  onChange,
  value,
  label,
  placeholder,
  type,
  forgotPassword,
  className,
  name,
  style,
  disabled,
  required,
  marginBottom = "20px",
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      style={{ marginBottom: marginBottom }}
      className="d-flex flex-column input-container"
    >
      {label && <label htmlFor={name}>{label}</label>}
      <input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={showPassword ? "text" : type}
        className={`${className} input-${type} ${
          disabled ? "disabled" : ""
        } input`}
        id={name}
        name={name}
        style={style}
        disabled={disabled}
        required={required}
      />
      {type === "password" && (
        <>
          <button
            type="button"
            className={`toggle-password-btn ${showPassword ? "show" : ""}`}
            onClick={toggleShowPassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          <a href={forgotPassword} className="mt-1 action-icon">
            Esqueceu a sua senha?
          </a>
        </>
      )}
    </div>
  );
}
