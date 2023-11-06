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
                <h5 className='h5-500 text-center mt-2'>{news.title}</h5>
                <div className='mtb-4'>
                    <Image
                        style={{ transform: 'scale(1.3)', userSelect: 'none' }}
                        width={500}
                        src={news.image} alt={''} />
                </div>
            </div>
            <p>Data: {news.date}</p>
        </>
    );
};

export default LastNewsModalBody;
