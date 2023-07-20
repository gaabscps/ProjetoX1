import { Button } from '@/components/Button';
import Input from '@/components/Input';
import useChallenges from '../../../useChallenges';
import { Challenges } from '@/types/Challenges';

interface CounterProposalProps {
    index: number;
    handleCloseModal: () => void;
    challenges: Challenges[];
}

export default function CounterProposal({ handleCloseModal, challenges, index }: CounterProposalProps) {
    const { handleChange, counterProposal } = useChallenges()
    return (
        <div>
            <h5 style={{ marginBottom: '20px' }} className="h5-500">Contraproposta</h5>
            <div className="d-flex flex-column flex-gap-1 mb-2">
                <div className="d-flex justify-content-between">
                    <p className="color-black-7">
                        Desafio enviado por:
                    </p>
                    <p>
                        {challenges.some(Boolean) && challenges[index].user.userName}
                    </p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="color-black-7">
                        Aposta:
                    </p>
                    <p>
                        {challenges.some(Boolean) && challenges[index].value}
                    </p>
                </div>
            </div>
            <Input type="number" name='counterProposal' value={counterProposal.counterProposal} onChange={handleChange} marginBottom="25px" placeholder="Valor da contraproposta (BRL)" />
            <Button onClick={() => { handleCloseModal() }}
                margin="15px 0"
                width="100%"
                size="large"
                theme="primary"
                content={<div>Enviar contraproposta</div>} />
        </div>
    )

}