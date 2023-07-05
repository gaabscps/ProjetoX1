'use client'

import { Body } from '@/components/Body';
import { Header } from '@/components/Header';
import Link from 'next/link';
import gabs from '@/assets/svg/gabs.jpg';
import Image, { StaticImageData } from 'next/image';
import back from '@/assets/svg/back.svg';
import Input from '@/components/Input';
import { useState } from 'react';
import { User } from '@/types/Users';
import { Card } from '@/components/Card';

export default function Challenges() {

    const [search, setSearch] = useState('')

    const users: User[] = [
        {
            userImage: gabs,
            userName: 'John',
            gamesPlayed: '10',
            gamesVictory: '7',
            gamesDefeat: '3',
        },
        {
            userImage: gabs,
            userName: 'Emily',
            gamesPlayed: '15',
            gamesVictory: '9',
            gamesDefeat: '6',
        },
        {
            userImage: gabs,
            userName: 'David',
            gamesPlayed: '8',
            gamesVictory: '4',
            gamesDefeat: '4',
        },
        {
            userImage: gabs,
            userName: 'Sarah',
            gamesPlayed: '12',
            gamesVictory: '10',
            gamesDefeat: '2',
        },
        {
            userImage: gabs,
            userName: 'Michael',
            gamesPlayed: '20',
            gamesVictory: '15',
            gamesDefeat: '5',
        },
    ];

    return (
        <>
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    placeholder="Pesquisar"
                    marginBottom="40px" />

                <h6 style={{ marginBottom: '30px' }} className="h6-400 line-height-150">Desafios recebidos ({users.length})</h6>


                <h6 style={{ marginBottom: '15px' }} className="h6-400 line-height-150">Março/2023</h6>

                <p style={{ marginBottom: '10px' }} className="color-black-7">
                    12 de Março
                </p>
                <div style={{ flexWrap: 'wrap' }} className="user-card-challenge-container">
                    {
                        users && users.length > 0 ?
                            users.map((user, index) => (
                                <div key={index} className="user-card-challenge">
                                    <Card
                                        background="#F5F5F5"
                                        width="100%"
                                        height="191px"
                                        content={
                                            <></>
                                        }
                                    />
                                </div>
                            ))
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