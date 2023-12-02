import { Button } from '@/components/Button'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'

interface OcurrenceModalBodyProps {
    handleSubmit: () => void;
}

export const OcurrenceModalBody = ({ handleSubmit }: OcurrenceModalBodyProps) => {

    return (
        <>
            <div className="mb-2">
                <h5 style={{ marginBottom: '20px' }} className="h5-500">
                    Abrir ocorrência
                </h5>

                <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
                    <p className="color-black-7">Data do jogo</p>
                    <p>12 de Março/2023</p>
                </div>
                <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
                    <p className="color-black-7">Jogo escolhido:</p>
                    <p>League of Legends</p>
                </div>
                <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
                    <p className="color-black-7">Resultado</p>
                    <p>Ximao 5 x 0 Tig</p>
                </div>
                <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
                    <p className="color-black-7">Aposta:</p>
                    <p>R$ 1.500,00 + R$ 1.500,00</p>
                </div>
                <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
                    <p className="color-black-7">Vencedor/Valor: </p>
                    <p>Ximao/R$ 1.500,00</p>
                </div>
            </div>
            <Input type="file" />
            <Textarea className="mb-3" placeholder="Digite uma mensagem para complementar a sua ocorrência" onChange={() => undefined} />
            <Button onClick={() => handleSubmit()} className="mb-1" width="100%" theme="primary" size="large" content="Enviar ocorrência" />
        </>
    )
}
