import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import lupa from '@/assets/svg/lupa.svg';

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any;
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
  showMaxLength?: boolean;
  maxHeight?: string;
  searchIcon?: {
    bottom: string;
    right?: string;
  };
  icon?: any;
  error?: string;
  styledLabel?: boolean;
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
  showMaxLength,
  searchIcon,
  icon,
  error,
  styledLabel,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (value) {
      setCharacterCount(value.length);
    }
    else {
      setCharacterCount(0);
    }
  }, [value]);

  return (
    <><div
      style={{ marginBottom: marginBottom }}
      className="d-flex flex-column input-container"
    >
      {label && <label className={`${error ? 'input-error' : ''} ${styledLabel ? 'styled-label' : ''}`} htmlFor={name}>{label}</label>}
      <input
        onChange={onChange}
        value={value || ''}
        placeholder={placeholder}
        type={showPassword ? 'text' : type}
        className={`${className}  input-${type} ${disabled ? 'disabled' : ''} ${error ? 'input-error-container' : ''} ${styledLabel ? 'input-styled-label' : ''} input`}
        id={name}
        name={name}
        style={{ ...style, maxHeight: maxHeight }}
        disabled={disabled}
        required={required}
        maxLength={maxLength} />
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
      {icon && (
        <div className='ml-1' style={{ position: 'absolute', bottom: searchIcon?.bottom, right: searchIcon?.right }}>
          <Image src={icon} alt='lupa' />
        </div>
      )}
      <div style={{ marginTop: '10px' }} className={`d-flex justify-content-${error ? 'between' : 'end'} align-items-center`}>
        {error && <p className='input-error'>{error}</p>}
        {showMaxLength && maxLength && (
          <div
            className={`d-flex justify-content-end ${error ? 'input-error' : ''}`}>
            <p>
              {characterCount}/{maxLength}
            </p>
          </div>
        )}
      </div>
    </div>

    </>
  );
}
