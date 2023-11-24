'use client'

import Input from '@/components/Input';
import WelcomeHeader from './components/Header';
import { Body } from '@/components/Body';
import { Button } from '@/components/Button';
import check from '@/assets/svg/check.svg';
import { useWelcome } from './useWelcome';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Welcome() {


    const welcome = useWelcome()
    const { nickname, handleChange, handleSubmit, error, errorMessage } = welcome



    return (
        <>
            <ToastContainer theme='dark' toastStyle={{
                background: '#29272A',
                fontSize: '14px',
                boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)',
            }}
            />
            <WelcomeHeader />
            <Body small marginTop="150px">
                <div>
                    <h6 style={{ marginBottom: '50px' }} className="h6-400 d-flex justify-content-center">Qual será o seu apelido no Play X1?</h6>
                    <Input
                        name="nickname"
                        searchIcon={{
                            right: '20px',
                            bottom: '47px'
                        }}
                        icon={!error && nickname.nickname !== '' ? check : undefined}
                        value={nickname.nickname}
                        onChange={(e) => handleChange(e)}
                        maxLength={16}
                        label="Seu apelido"
                        error={errorMessage}
                        showMaxLength
                        styledLabel
                    />
                </div>
                <div className="color-black-7 mb-5">
                    <p>
                        Seu apelido NÃO pode conter:
                    </p>
                    <ul >
                        <li className="color-black-6">
                            <p>
                                Caracteres especiais (@,_,#,$,%,etc...);
                            </p>
                        </li>
                        <li className="color-black-6">
                            <p>
                                Menos de 3 caracteres;
                            </p>
                        </li>
                        <li className="color-black-6">
                            <p>
                                Mais de 16 caracteres;
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-center">
                    <Link className="w-100" onClick={() => handleSubmit()} href={'/welcome'}>
                        <Button disabled={!nickname.nickname} width="100%" size="large" theme="primary" content="Começar" />
                    </Link>
                </div>
            </Body>
        </>
    )
}