import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Challenges } from '@/types/Challenges';
import { ChallengesSent } from '@/types/ChallengesSent';
import { maskBRL } from '@/utils/mask/maskMoney';

interface ChallengeSentCardProps {
    handleOpenModal: (value: boolean) => void;
    challenge: ChallengesSent;
}

export default function ChallengeSentCard({ challenge, handleOpenModal }: ChallengeSentCardProps) {
    return (
        <div>
            <p style={{ marginBottom: '10px' }}>
                {challenge.gameId}
            </p>
            <Card width="350px" height="195px" content={
                <>
                    <div className="d-flex flex-column flex-gap-1" style={{ padding: '20px 15px 15px 15px' }}>
                        <div className="d-flex justify-content-between">
                            <p className="color-black-7">
                                Oponente:
                            </p>
                            <p>
                                {challenge?.playerGuestId}
                            </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="color-black-7">
                                Aposta:
                            </p>
                            <p>
                                {maskBRL(String(challenge?.value))}
                            </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="color-black-7">
                                Mensagem:
                            </p>
                            <p>
                                {challenge.message}
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