import { useState, ChangeEvent, FormEvent } from 'react'

interface useFormProps {
  initialValues: any
  onSubmit: (values: any) => void
}

const useForm = ({ initialValues, onSubmit }: useFormProps) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked, files }: any = event.target

    if (type === 'checkbox') {
      setValues((prevValues: any) => ({
        ...prevValues,
        [name]: checked,
      }))
    } else if (type === 'file') {
      setValues((prevValues: any) => ({
        ...prevValues,
        [name]: files && files[0],
      }))
    } else {
      setValues((prevValues: any) => ({
        ...prevValues,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(values)
  }

  return { values, handleChange, handleSubmit }
}

export default useForm
