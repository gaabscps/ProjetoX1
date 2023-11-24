import React from 'react';
import { News } from '@/types/LandingNews';
import Image from 'next/image';


interface LastNewsModalBodyProps {
    news: News | null;
}

const LastNewsModalBody: React.FC<LastNewsModalBodyProps> = ({ news }) => {
    if (!news) {
        return <div>Nenhuma notícia selecionada.</div>;
    }

    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <div className='mtb-4'>
                    <Image
                        style={{ transform: 'scale(1.3)', userSelect: 'none' }}
                        width={300}
                        height={200}
                        src={news.photoUrl} alt={''} />
                </div>
            </div>
            <p className='mb-2'>Data: {news.content}</p>
            <p>Data: {news.createdAt}</p>
        </>
    );
};

export default LastNewsModalBody;
