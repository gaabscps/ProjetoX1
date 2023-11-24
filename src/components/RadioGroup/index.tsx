interface RadioOption {
  value: string
  label: string
}

interface RadioGroupProps {
  options: RadioOption[]
  name: string
  selectedValue: string
  setSelectedValue: (selectedValue: string) => void
}

export default function RadioGroup({ options, setSelectedValue, selectedValue, name }: RadioGroupProps) {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <>
      {options.map((option) => (
        <div className='radioItem' key={option.value}>
          <label>
            <input
              name={name}
              type='radio'
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleRadioChange}
            />
            {option.label}
          </label>
        </div>
      ))}
    </>
  )
}
