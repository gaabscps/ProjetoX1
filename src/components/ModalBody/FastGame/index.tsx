import { Button } from '@/components/Button'
import Input from '@/components/Input'
import Select from '@/components/Select'
import useForm from '@/hooks/useForm'

interface ModalFastGameBodyProps {
  handleSearchingFastGame: () => void
}

export default function ModalFastGameBody({ handleSearchingFastGame }: ModalFastGameBodyProps) {
  // const { form, setForm, handleInputChange } = useFormFastGameBody();
  const initialValues = {
    game: '',
    level: '',
    bet: '',
  }

  const { values, handleChange } = useForm({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const games = [
    {
      value: 0,
      label: 'League of Legends',
    },
    {
      value: 1,
      label: 'Valorant',
    },
  ]

  const levels = [
    {
      value: 0,
      label: 'Facil',
    },
    {
      value: 1,
      label: 'Intermediario',
    },
  ]


  return (
    <>
      <div className='fastGameModalBody d-flex flex-column'>
        <div className='fastGameModalTitle'>
          <h6 style={{ marginBottom: '10px' }} className='h6-500'>
            Jogo rápido
          </h6>
        </div>
        <Select
          name='game'
          onChange={handleChange}
          value={values.game}
          placeholder='Jogo a ser jogado'
          option={games}
        />
        <Select
          name='level'
          placeholder='Nível do oponente'
          option={levels}
          value={values.level}
          onChange={handleChange}
        />
        <Input
          name='bet'
          value={values.bet}
          onChange={handleChange}
          type='number'
          placeholder='Valor da aposta (BRL)'
          marginBottom='40px'
        />
        <Button
          theme='primary'
          onClick={() => {
            handleSearchingFastGame()
          }}
          width='100%'
          size='large'
          content='Procurar jogo rápido'
          disabled={!values.game || !values.level || !values.bet}
        />
      </div>
    </>
  )
}
