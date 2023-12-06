import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import UserImage from '@/components/UserImage';
import { useEffect, useState } from 'react';
import Timer from '@/components/Timer';
import { maskBRL } from '@/utils/mask/maskMoney';
import { ActiveGameMatch } from '@/types/ActiveGame';
import GamesDropdown from '../GamesDropdown';

interface InGameSectionProps {
    handleOpenCounterProposal: () => void
    match: ActiveGameMatch
}

export const InGameSection = ({ handleOpenCounterProposal, match, }: InGameSectionProps) => {
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setDisabled(false)
        }, 3000)
    }, [])

    return (
        <>
            <div style={{ marginBottom: '6px' }} className="d-flex justify-content-center align-items-center">
                <p>Partida em andamento...</p>
                <div style={{ width: '5px' }} />
                <Timer className='h6-400' seconds={match.value} />
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
                                <UserImage userImage={match?.player1?.urlPhoto || ''} />
                                <div>
                                    <p style={{ marginBottom: '9px' }} className="text-small-400">
                                        {match?.player1?.name || '--'}
                                    </p>
                                    <div className="text-small-400 color-black-7 challenge-stats-content">
                                        <p className="">JR: {match?.player1?.JR || 0}</p>
                                        <p className="">V: {match?.player1?.V || 0}</p>
                                        <p className=''>D: {match?.player1?.D || 0}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style={{ borderBottom: '1.5px solid #464448' }} />
                        <GamesDropdown games={match?.player1?.myGames} />
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
                                <UserImage userImage={match?.player2?.urlPhoto || ''} />
                                <div>
                                    <p style={{ marginBottom: '9px' }} className="text-small-400">
                                        {match?.player2?.name || '--'}
                                    </p>
                                    <div className="text-small-400 color-black-7 challenge-stats-content">
                                        <p className="">JR: {match?.player2?.JR || 0}</p>
                                        <p className="">V: {match?.player2?.V || 0}</p>
                                        <p className=''>D: {match?.player2?.D || 0}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style={{ borderBottom: '1.5px solid #464448' }} />
                        <GamesDropdown games={match?.player2?.myGames} />
                    </div>} />
            </div>
            <div style={{ marginTop: '6px' }} className="d-flex justify-content-center">
                <p>Aposta:{maskBRL(String(match?.value)) || 0}</p>
            </div>
            <div style={{ marginTop: '40px' }} className="d-flex justify-content-center">
                <Button disabled={disabled} onClick={() => handleOpenCounterProposal()} theme="standard" size="large" content={'Finalizar partida'} />
            </div>
        </>
    )
}