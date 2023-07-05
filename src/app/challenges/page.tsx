'use client'

import { Body } from '@/components/Body';
import { Header } from '@/components/Header';
import Link from 'next/link';

import Image from 'next/image';
import back from '@/assets/svg/back.svg';
import Input from '@/components/Input';
import { Modal } from '@/components/Modal';
import ReceivedChallenges from './components/FollowingCard';
import useChallenges from './useChallenges';

export default function Challenges() {


    const challenges = useChallenges()
    const {
        modal,
        Challenges,
        openTag,
        search,
        handleOpenTag,
        handleChange,
    } = challenges
    const { handleCloseModal,
        handleModalBody,
        handleOpenCounterProposal,
        handleOpenModal,
        handleOpenRefuse,
        openAccept,
        openCounterProposal,
        openRefuse,
    } = modal
    return (
        <>
            <Modal
                modalHeaderBg={'#29272a'}
                open={openAccept.some(Boolean) || openCounterProposal.some(Boolean) || openRefuse.some(Boolean)}
                modalBody={handleModalBody()}
                setOpen={handleCloseModal}
            />
            <Header />
            <Body>
                <div className="pageBody">
                    <div className="d-flex align-items-center flex-gap-1">
                        <Link href="/dashboard">
                            <Image src={back} width={16} height={16} alt="" />
                        </Link>
                        <h5 style={{ marginBottom: '10px' }} className="h5-500">Desafios recebidos</h5>
                    </div>
                    <p className='color-black-7' style={{ marginBottom: '30px' }}>Consulte os desafios que outros jogadores te enviaram</p>
                </div>
                <Input
                    searchIcon={{ bottom: '12px' }}
                    maxHeight="44px"
                    name="search"
                    value={search.search}
                    onChange={(e) => handleChange(e)}
                    type="search"
                    placeholder="Pesquisar"
                    marginBottom="40px" />

                <h6 style={{ marginBottom: '30px' }} className="h6-400 line-height-150">Desafios recebidos ({Challenges.length})</h6>


                <h6 style={{ marginBottom: '15px' }} className="h6-400 line-height-150">Março/2023</h6>

                <p style={{ marginBottom: '10px' }} className="color-black-7">
                    12 de Março
                </p>
                <div style={{ flexWrap: 'wrap' }} className="user-card-challenge-container">
                    {
                        Challenges && Challenges.length > 0 ? (
                            Challenges.map((challenge, index) => (
                                <div key={index} className='user-card-challenge'>
                                    <ReceivedChallenges
                                        challenge={challenge}
                                        openTag={openTag[index]}
                                        setOpenTag={() => handleOpenTag(index)}
                                        setOpenModal={() => handleOpenModal(index)}
                                        handleOpenCounterProposal={() => handleOpenCounterProposal(index)}
                                        handleOpenRefuse={() => handleOpenRefuse(index)}
                                    />
                                </div>
                            )))
                            :
                            <div>
                                <p style={{ marginBottom: '10px' }} className='line-height-150 color-black-7'>Você ainda não está seguindo nenhum jogador.</p>
                                <p className='line-height-150 color-black-7' >Procure por um jogador para seguir e desafiar ou inicie um jogo rápido.</p>
                            </div>
                    }
                </div>
            </Body>
        </>
    )
}