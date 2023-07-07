import { Button } from '@/components/Button';

interface RefuseModalBodyProps {
    handleCloseModal: () => void;
}

export default function CancelModalBody({ handleCloseModal }: RefuseModalBodyProps) {


    return (
        <>
            <div style={{ marginBottom: '40px' }} className="text-center line-height-150">
                <h6 className="h6-500 mb-1">Tem certeza que deseja cancelar o desafio?</h6>
                <p className="color-black-7">Ao cancelar o desafio, o mesmo não irá mais aparecer para o oponente. Você poderá enviar um novo desafio novamente.</p>
            </div>
            <div className="d-flex flex-gap-2 mb-2 justify-content-center">
                <Button onClick={() => { handleCloseModal() }} size="standard" width="40%" theme="primaryOutline" content={<div> Voltar </div>} />
                <Button onClick={() => { handleCloseModal() }} size="standard" width="40%" theme="primary" content={<div> Cancelar </div>} />
            </div>
        </>
    )

}