import { useState } from 'react';
import UserImage from '@/components/UserImage';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

type Recents = {
    id: number;
    name: string;
    image: StaticImageData;
    status: number;
}[]

interface DatalistProps {
    recent: Recents;
    recomendation: Recents;
    onlineUserSearch?: Recents;
    value?: any;
    handleRemove: (id: number) => void;
    handleRemoveAll: () => void;
    setValue: (value: any) => void;
    onClick?: () => void;
    ref?: any;
}[]

export const Datalist = ({ recent, recomendation, onlineUserSearch, value, handleRemove, handleRemoveAll, setValue, onClick, ref }: DatalistProps) => {

    return (
        <div ref={ref} onClick={onClick} className='datalist-container'>
            {!value && (
                <div style={{ width: '40%' }} className='d-flex align-items-center justify-content-between'>
                    <p className='text-small-400 color-black-6 datalist-category-title'>Pesquisas recentes</p>
                    {recent && recent.length > 0 &&
                        <p onClick={() => handleRemoveAll()} className='text-small-400 color-black-6 action-icon'>Limpar tudo</p>}
                </div>
            )}
            <div style={{ display: value ? 'none' : 'block' }} className='datalist-recent mb-2'>
                {!value && (
                    recent && recent.length > 0 ? (
                        <>
                            <ul>
                                {recent?.map((item, index) => (
                                    <Link key={Math.random()} href={`user/${item.id}`}>
                                        <li className='datalist-item'>
                                            <div className="d-flex align-items-center action-icon">
                                                <UserImage statusPosition={{ right: '0px' }} status={item.status} userImage={item.image} width={20} height={20} />
                                                <p onClick={() => setValue({
                                                    search: item.name
                                                })} style={{ marginLeft: '6px' }} className='text-small-400'>
                                                    {item.name}
                                                </p>
                                            </div>
                                            <p onClick={() => handleRemove(item.id)} className='color-black-7 action-icon' style={{ fontSize: '14px' }}>
                                                x
                                            </p>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p style={{ marginLeft: '15px', marginTop: '6px' }} className="text-small-400 color-black-8">Nenhuma pesquisa recente</p>
                    ))}
            </div>
            {!value && (
                <>
                    <div className='datalist-recomendations'>
                        <p className='text-small-400 color-black-6 datalist-category-title'>Oponentes recomendados</p>
                    </div><ul>
                        {recomendation?.map((item, index) => (
                            <Link key={Math.random()} href={`user/${item.id}`}>
                                <li className='datalist-item'>
                                    <div className="d-flex align-items-center action-icon">
                                        <UserImage statusPosition={{ right: '0px' }} status={item.status} userImage={item.image} width={20} height={20} />
                                        <p onClick={() => setValue({
                                            search: item.name
                                        })} style={{ marginLeft: '6px' }} className='text-small-400'>
                                            {item.name}
                                        </p>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </>
            )}
            {value && (
                onlineUserSearch && onlineUserSearch?.length > 0 ? (
                    onlineUserSearch?.map((item, index) => (
                        <Link key={Math.random()} href={`user/${item.id}`}>
                            <li className='datalist-item'>
                                <div className="d-flex align-items-center action-icon">
                                    <UserImage statusPosition={{ right: '0px' }} status={item.status} userImage={item.image} width={20} height={20} />
                                    <p onClick={() => setValue({
                                        search: item.name
                                    })} style={{ marginLeft: '6px' }} className='text-small-400'>
                                        {item.name}
                                    </p>
                                </div>
                            </li>
                        </Link>
                    ))
                ) : (<p className='text-small-400 color-black-6 datalist-category-title'>Nenhum resultado encontrado</p>)
            )}
        </div>
    )
}