import { Button } from '@/components/Button';
import { ChallengesSent } from '@/types/ChallengesSent';

interface RefuseModalBodyProps {
    handleCloseModal: () => void;
    handleRejectChallenge: (value: string) => void;
    challengesSent: ChallengesSent
}

export default function CancelModalBody({ handleCloseModal, handleRejectChallenge, challengesSent }: RefuseModalBodyProps) {


    return (
        <>
            <div style={{ marginBottom: '40px' }} className="text-center line-height-150">
                <h6 className="h6-500 mb-1">Tem certeza que deseja cancelar o desafio?</h6>
                <p className="color-black-7">Ao cancelar o desafio, o mesmo não irá mais aparecer para o oponente. Você poderá enviar um novo desafio novamente.</p>
            </div>
            <div className="d-flex flex-gap-2 mb-2 justify-content-center">
                <Button onClick={() => { handleCloseModal() }} size="standard" width="40%" theme="primaryOutline" content={<div> Voltar </div>} />
                <Button onClick={() => { handleRejectChallenge(challengesSent?._id), handleCloseModal() }} size="standard" width="40%" theme="primary" content={<div> Cancelar </div>} />
            </div>
        </>
    )

}