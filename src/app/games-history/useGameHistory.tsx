import { useState } from 'react';

const useGameHistory = () => {

    const [openOcurrence, setOpenOcurrence] = useState<boolean[]>([]);

    const handleCloseModal = () => {
        setOpenOcurrence([]);
    };

    const handleOpenModal = (index: number) => {
        const newopenOcurrence = [...openOcurrence];
        newopenOcurrence[index] = !newopenOcurrence[index];
        setOpenOcurrence(newopenOcurrence);
    };

    const handleSubmit = () => {
        setOpenOcurrence([]);
    };


    return {
        openOcurrence,
        setOpenOcurrence,
        handleCloseModal,
        handleOpenModal,
        handleSubmit,
    }
}

export default useGameHistory;