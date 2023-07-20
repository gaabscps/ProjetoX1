import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Challenges } from '@/types/Challenges';

interface ChallengeSentCardProps {
    handleOpenModal: (value: boolean) => void;
    challenge: Challenges;
}

export default function ChallengeSentCard({ challenge, handleOpenModal }: ChallengeSentCardProps) {
    return (
        <div>
            <p style={{ marginBottom: '10px' }}>
                Fifa 2023
            </p>
            <Card width="350px" height="195px" content={
                <>
                    <div className="d-flex flex-column flex-gap-1" style={{ padding: '20px 15px 15px 15px' }}>
                        <div className="d-flex justify-content-between">
                            <p className="color-black-7">
                                Oponente:
                            </p>
                            <p>
                                {challenge.user.userName}
                            </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="color-black-7">
                                Aposta:
                            </p>
                            <p>
                                R$ {challenge.value}
                            </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="color-black-7">
                                Mensagem:
                            </p>
                            <p>
                                -
                            </p>
                        </div>
                    </div>
                    <hr style={{ borderBottom: '1.5px solid #464448' }} />
                    <div style={{ height: '70px' }} className="d-flex justify-content-center align-items-center">
                        <Button onClick={() => handleOpenModal(true)} width="137px" height="35px" theme="outline" content={<div> Cancelar desafio </div>} />
                    </div>
                </>
            } />
        </div>
    )
}