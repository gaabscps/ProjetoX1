import { useState } from 'react';
import { User } from '@/types/Users';
import ModalBodyChallenge from './components/ModalBodyChallenge';
import gabs from '@/assets/svg/gabs.jpg';
import ModalFastGameBody from '@/components/ModalBody/FastGame';
import ModalSearchingFastGameBody from '../dashboard/components/ModalBody/SearchingFastGame';
import { toast } from 'react-toastify';


const useChallenge = () => {
    const [openFastGame, setOpenFastGame] = useState(false)
    const [openSearchingFastGame, setOpenSearchingFastGame] = useState(false)
    const [openTag, setOpenTag] = useState<boolean[]>([]);
    const [openModal, setOpenModal] = useState<boolean[]>([]);

    //MOCK
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


    //MODAL
    function handleModalBody() {
        if (openFastGame) {
            return <ModalFastGameBody handleSearchingFastGame={handleSearchingFastGame} />
        }
        if (openSearchingFastGame) {
            return <ModalSearchingFastGameBody setOpenSearchingFastGame={setOpenSearchingFastGame} />
        }
        if (openModal.some(Boolean)) {
            return <ModalBodyChallenge
                userName={users[openModal.findIndex(Boolean)]?.userName}
                handleConfirmChallenge={handleConfirmChallenge}
            />
        }
        return null
    }

    const handleSearchingFastGame = () => {
        setOpenFastGame(false)
        setOpenSearchingFastGame(true)
    }

    const handleCloseModal = () => {
        setOpenModal([]);
        setOpenFastGame(false);
    };

    const handleOpenModal = (index: number) => {
        const newOpenModal = [...openModal];
        newOpenModal[index] = !newOpenModal[index];
        setOpenModal(newOpenModal);
    };


    //TAG
    const handleOpenTag = (index: number) => {
        const newOpenTag = [...openTag];
        newOpenTag[index] = !newOpenTag[index];
        setOpenTag(newOpenTag);
    };




    const handleConfirmChallenge = () => {
        handleCloseModal();
        toast.success('Desafio enviado com sucesso ! Agora é só aguardar o seu oponente aceitar o seu desafio.');
    }

    const modal = {
        openFastGame,
        setOpenFastGame,
        openSearchingFastGame,
        openModal,
        handleOpenModal,
        handleCloseModal,
        handleModalBody,
    }


    return {
        users,
        openTag,
        handleOpenTag,
        modal,
    }
};

export default useChallenge;
