'use client'

import { Header } from '@/components/Header'
import useActiveGames from './useActiveGames'
import { Body } from '@/components/Body'
import Link from 'next/link'
import Image from 'next/image'
import back from '@/assets/svg/back.svg';
import { InGameSection } from './components/InGameSection'
import { Modal } from '@/components/Modal';
import { useEffect } from 'react'


export default function ActiveGames() {

    const { handleModalBody, handleCloseModal, handleOpenCounterProposal, matchFinished, matchProof, match } = useActiveGames()

    return (
        <>
            <Modal modalHeaderBg="#0e0e0f" open={matchFinished || matchProof} modalBody={handleModalBody()} setOpen={handleCloseModal} />
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
                <h6 style={{ marginBottom: '20px' }} className="h6-400 line-height-150">{match?.gameName || '--'}</h6>
                <InGameSection match={match} handleOpenCounterProposal={handleOpenCounterProposal} />
            </Body>
        </>
    )

}