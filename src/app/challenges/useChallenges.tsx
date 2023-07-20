import gabs from '@/assets/svg/gabs.jpg';
import { useState } from 'react';
import CounterProposal from './components/ModalBody/CounterProposalModalBody';
import RefuseModalBody from './components/ModalBody/RefuseModalBody';
import { Challenges } from '@/types/Challenges';
import ModalSearchingFastGameBody from './components/ModalBody/SearchingFastGame';

const useChallenges = () => {
    const [openAccept, setOpenAccept] = useState<boolean[]>([]);
    const [openCounterProposal, setOpenCounterProposal] = useState<boolean[]>([]);
    const [openRefuse, setOpenRefuse] = useState<boolean[]>([]);
    const [openTag, setOpenTag] = useState<boolean[]>([]);
    const [search, setSearch] = useState({
        search: '',
    })
    const [counterProposal, setCounterProposal] = useState({
        counterProposal: '',
    });


    // MOCK    
    const Challenges: Challenges[] = [{
        user: {
            userImage: gabs,
            userName: 'John',
            gamesPlayed: '10',
            gamesVictory: '7',
            gamesDefeat: '3',
            status: 0,
            games: [
                {
                    game: 'FIFA 21',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'League of Legends',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'Valorant',
                    gameRank: 'Profissional',
                },
                {
                    game: 'CS:GO',
                    gameRank: 'Profissional',
                }
            ],
        },
        value: 100,
        game: 'FIFA 21',
        gameRank: 'Iniciante',
    },
    {
        user: {
            userImage: gabs,
            userName: 'Emily',
            gamesPlayed: '15',
            gamesVictory: '9',
            gamesDefeat: '6',
            status: 0,
            games: [
                {
                    game: 'FIFA 21',
                    gameRank: 'Profissional',
                },
                {
                    game: 'League of Legends',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'Valorant',
                    gameRank: 'Profissional',
                },
                {
                    game: 'CS:GO',
                    gameRank: 'Intermediario',
                }
            ],
        },
        value: 200,
        game: 'League of Legends',
        gameRank: 'Iniciante',
    },
    {
        user: {
            userImage: gabs,
            userName: 'David',
            gamesPlayed: '8',
            gamesVictory: '4',
            gamesDefeat: '4',
            status: 1,
            games: [
                {
                    game: 'FIFA 21',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'League of Legends',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'Valorant',
                    gameRank: 'Profissional',
                },
            ],
        },
        value: 300,
        game: 'Valorant',
        gameRank: 'Profissional',
    },
    {
        user: {
            userImage: gabs,
            userName: 'Sarah',
            gamesPlayed: '12',
            gamesVictory: '10',
            gamesDefeat: '2',
            status: 1,
            games: [
                {
                    game: 'FIFA 21',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'League of Legends',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'Valorant',
                    gameRank: 'Profissional',
                },
            ],
        },
        value: 400,
        game: 'FIFA 21',
        gameRank: 'Profissional',
    },
    {
        user: {
            userImage: gabs,
            userName: 'Michael',
            gamesPlayed: '20',
            gamesVictory: '15',
            gamesDefeat: '5',
            status: 2,
            games: [
                {
                    game: 'FIFA 21',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'League of Legends',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'Valorant',
                    gameRank: 'Profissional',
                },
            ],
        },
        value: 500,
        game: 'League of Legends',
        gameRank: 'Intermediário',
    }
    ]

    // FORMS
    const handleChange = (event: any) => {
        const fieldValue = event.target.value
        const fieldName = event.target.name

        if (search) {
            setSearch((currentValues) => {
                return {
                    ...currentValues,
                    [fieldName]: fieldValue,
                }
            })
        }

        if (counterProposal) {
            setCounterProposal((currentValues) => {
                return {
                    ...currentValues,
                    [fieldName]: fieldValue,
                }
            })
        }
    }

    // MODAL
    const handleModalBody = () => {
        if (openAccept.some(Boolean)) {
            const index = openAccept.findIndex(Boolean);
            return (
                <ModalSearchingFastGameBody
                    setOpenSearchingFastGame={() => {
                        setOpenAccept([]);
                    }}
                    challenges={Challenges}
                    index={index} />
            );
        }
        if (openCounterProposal.some(Boolean)) {
            const index = openCounterProposal.findIndex(Boolean);
            return (
                <CounterProposal
                    challenges={Challenges}
                    handleCloseModal={handleCloseModal}
                    index={index}
                />
            );
        }
        if (openRefuse.some(Boolean)) {
            return (
                <RefuseModalBody
                    handleCloseModal={handleCloseModal}
                />
            );
        }
        return <></>;
    };



    const handleOpenTag = (index: number) => {
        const newOpenTag = [...openTag];
        newOpenTag[index] = !newOpenTag[index];
        setOpenTag(newOpenTag);
    };

    const handleOpenModal = (index: number) => {
        const newOpenAccept = [...openAccept];
        newOpenAccept[index] = !newOpenAccept[index];
        setOpenAccept(newOpenAccept);
    };

    const handleOpenCounterProposal = (index: number) => {
        const newOpenCounterProposal = [...openCounterProposal];
        newOpenCounterProposal[index] = !newOpenCounterProposal[index];
        setOpenCounterProposal(newOpenCounterProposal);
    };

    const handleOpenRefuse = (index: number) => {
        const newOpenRefuse = [...openRefuse];
        newOpenRefuse[index] = !newOpenRefuse[index];
        setOpenRefuse(newOpenRefuse);
    };

    const handleCloseModal = () => {
        setOpenAccept([]);
        setOpenCounterProposal([]);
        setOpenRefuse([]);
    };


    const modal = {
        openAccept,
        openCounterProposal,
        openRefuse,
        handleOpenModal,
        handleOpenCounterProposal,
        handleOpenRefuse,
        handleCloseModal,
        handleModalBody,
    }

    return {
        Challenges,
        modal,
        openTag,
        search,
        counterProposal,
        handleChange,
        handleOpenTag,
    }

}

export default useChallenges;