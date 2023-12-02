import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

interface ChallengeSentCardProps {
    handleOpenModal: (value: boolean) => void;
}

export default function ChallengeSentCard({  handleOpenModal }: ChallengeSentCardProps) {
    return (
        <div>
            <Card width="350px" height="195px" content={
                <>
                    <div className="d-flex flex-column flex-gap-1" style={{ padding: '20px 15px 15px 15px' }}>
                        <div className="d-flex justify-content-between">
                            <p className="color-black-7">
                                Resultado:
                            </p>
                            <p>
                                Ximao 5 x 0 Tig
                            </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="color-black-7">
                                Aposta:
                            </p>
                            <p>
                                R$ 1.500,00 + R$ 1.500,00
                            </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="color-black-7">
                                Vencedor/Valor:
                            </p>
                            <p>
                                Ximao/R$ 3.000,00
                            </p>
                        </div>
                    </div>
                    <hr style={{ borderBottom: '1.5px solid #464448' }} />
                    <div style={{ height: '70px' }} className="d-flex justify-content-center align-items-center">
                        <Button onClick={() => handleOpenModal(true)} width="137px" height="35px" theme="outline" content={<div>Abrir ocorrência</div>} />
                        <p className='action-icon text-small-400 ml-2'>Ver foto do resultado</p>
                    </div>
                </>
            } />
        </div>
    )
}