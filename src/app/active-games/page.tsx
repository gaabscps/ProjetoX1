'use client'

import { Header } from '@/components/Header'
import useActiveGames from './useActiveGames'
import { Body } from '@/components/Body'
import Link from 'next/link'
import Image from 'next/image'
import back from '@/assets/svg/back.svg';
import { InGameSection } from './components/InGameSection'
import { Modal } from '@/components/Modal';
import { use, useEffect } from 'react'


export default function ActiveGames() {

    const activeGames = useActiveGames()
    const { handleModalBody, handleCloseModal, handleOpenMatchFinished, handleOpenCounterProposal, matchFinished, matchProof } = activeGames

    useEffect(() => {
        setTimeout(() => {
            handleOpenMatchFinished()
        }, 3000)
    }, [])

    return (
        <>
            <Modal modalHeaderBg="#29272A" open={matchFinished || matchProof} modalBody={handleModalBody()} setOpen={handleCloseModal} />
            <Header />
            <Body>
                <div className="pageBody">
                    <div className="d-flex align-items-center flex-gap-1">
                        <Link href="/dashboard">
                            <Image src={back} width={16} height={16} alt="" />
                        </Link>
                        <h5 style={{ marginBottom: '10px' }} className="h5-500">Jogos ativos</h5>
                    </div>
                    <p className='color-black-7' style={{ marginBottom: '30px' }}>Confira os jogos ativos</p>
                </div>
                <h6 style={{ marginBottom: '20px' }} className="h6-400 line-height-150">League of Legends</h6>
                <InGameSection handleOpenCounterProposal={handleOpenCounterProposal} />
            </Body>
        </>
    )

}