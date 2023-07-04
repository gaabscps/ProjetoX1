import React, { useState } from 'react';
import Image from 'next/image';
import lupa from '@/assets/svg/lupa.svg';

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  name?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  required?: boolean;
  marginBottom?: string;
  maxLength?: number;
  maxHeight?: string;
  searchIcon?: {
    bottom: string;
  };
}

export default function Input({
  onChange,
  maxHeight,
  value,
  label,
  placeholder,
  type,
  className,
  name,
  style,
  disabled,
  required,
  marginBottom = '20px',
  maxLength,
  searchIcon
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
        type={showPassword ? 'text' : type}
        className={`${className} input-${type} ${disabled ? 'disabled' : ''
          } input`}
        id={name}
        name={name}
        style={{ ...style, maxHeight: maxHeight }}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
      />
      {type === 'password' && (
        <>
          <button
            type="button"
            className={`toggle-password-btn ${showPassword ? 'show' : ''}`}
            onClick={toggleShowPassword}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </>
      )}
      {type === 'search' && (
        <div className='ml-1' style={{ position: 'absolute', bottom: searchIcon?.bottom }}>
          <Image src={lupa} alt='lupa' />
        </div>
      )}
    </div>
  );
}
