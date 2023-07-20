import TagGroup from '@/app/challenge/components/TagGroup'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import UserImage from '@/components/UserImage';
import userImage from '@/assets/svg/gabs.jpg'
import { useEffect, useState } from 'react';

interface InGameSectionProps {
    handleOpenCounterProposal: () => void
}

export const InGameSection = ({ handleOpenCounterProposal }: InGameSectionProps) => {

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setDisabled(false)
        }, 3000)
    }, [])

    return (
        <>
            <div style={{ marginBottom: '6px' }} className="d-flex justify-content-center">
                <p>Partida em andamento... 10:57</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <Card
                    borderRadius="5px"
                    width="350px"
                    height="120px"
                    content={<div className="h-100">
                        <div className="d-flex align-items-center justify-content-between mr-1 ml-1">
                            <div
                                style={{ height: '74px' }}
                                className="d-flex align-items-center flex-gap-1"
                            >
                                <UserImage userImage={userImage} />
                                <div>
                                    <p style={{ marginBottom: '9px' }} className="text-small-400">
                                        userName
                                    </p>
                                    <div className="text-small-400 color-black-7 challenge-stats-content">
                                        <p className="">JR: gamesPlayed</p>
                                        <p className="">V: gamesVictor</p>
                                        <p className=''>D: gamesDefeat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style={{ borderBottom: '1.5px solid #464448' }} />
                        <TagGroup open={true} setOpen={() => undefined} />
                    </div>} />
                <div className="versus-container">
                    <p className="versus">VS</p>
                </div>
                <Card
                    borderRadius="5px"
                    width="350px"
                    height="120px"
                    content={<div className="h-100">
                        <div className="d-flex align-items-center justify-content-between mr-1 ml-1">
                            <div
                                style={{ height: '74px' }}
                                className="d-flex align-items-center flex-gap-1"
                            >
                                <UserImage userImage={userImage} />
                                <div>
                                    <p style={{ marginBottom: '9px' }} className="text-small-400">
                                        userName
                                    </p>
                                    <div className="text-small-400 color-black-7 challenge-stats-content">
                                        <p className="">JR: gamesPlayed</p>
                                        <p className="">V: gamesVictor</p>
                                        <p className=''>D: gamesDefeat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style={{ borderBottom: '1.5px solid #464448' }} />
                        <TagGroup open={true} setOpen={() => undefined} />
                    </div>} />
            </div>
            <div style={{ marginTop: '6px' }} className="d-flex justify-content-center">
                <p>Aposta: R$ 1.500,00</p>
            </div>
            <div style={{ marginTop: '40px' }} className="d-flex justify-content-center">
                <Button disabled={disabled} onClick={() => handleOpenCounterProposal()} theme="standard" size="large" content={'Finalizar partida'} />
            </div>
        </>
    )
}