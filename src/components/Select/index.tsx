import Image from 'next/image'
import React from 'react'
import Arrow from '../../assets/svg/arrowCard.svg'

interface SelectProps {
  value?: string
  onSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  option?: {
    value: string | number
    label: string
  }[]
  label?: string
  placeholder?: string
  type?: string
  className?: string
  name?: string
  style?: React.CSSProperties
  disabled?: boolean
  required?: boolean
  marginBottom?: string
}

export default function Select({
  value,
  onSelect,
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
  marginBottom = '20px',
}: SelectProps) {
  return (
    <div style={{ marginBottom: marginBottom }} className='d-flex flex-column input-container'>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        onSelect={onSelect}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} input-${type} ${disabled ? 'disabled' : ''} ${!value ? 'SelectPlaceholder' : ''
          } input`}
        id={name}
        name={name}
        style={style}
        disabled={disabled}
        required={required}
      >
        <option value='' className='SelectPlaceholder'>
          {placeholder}
        </option>
        {option?.map((option, index) => (
          <option style={{ color: 'white' }} key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div
        style={{
          position: 'absolute',
          right: '20px',
          top: '33%',
          transform: 'rotate(90deg)',
          zIndex: 0,
        }}
      >
        <Image src={Arrow} alt='' />
      </div>
    </div>
  )
}
