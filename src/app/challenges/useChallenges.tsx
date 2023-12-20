import gabs from '@/assets/svg/gabs.jpg';
import { useEffect, useState } from 'react';
import CounterProposal from './components/ModalBody/CounterProposalModalBody';
import RefuseModalBody from './components/ModalBody/RefuseModalBody';
import ModalSearchingFastGameBody from './components/ModalBody/SearchingFastGame';
import { AxiosResponse } from 'axios';
import api from '@/services/api';
import { useCookies } from 'react-cookie';
import { Challenges } from '@/types/Challenges';
import { toast } from 'react-toastify';

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
    const [cookies, setCookies] = useCookies(['TokenAuth', 'idUser']);
    const [challenges, setChallenges] = useState<Challenges[]>([]);

    const handleGetChallenges = async () => {
        try {
            const response: AxiosResponse = await api.get('challange/invitessentome', {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                }
            })
            if (response?.status === 200) {
                setChallenges(response?.data.returnInvited as Challenges[])
            }
        } catch (error) {
            console.error('Erro ao buscar usuário')
        }
    }

    const handleAcceptChallenge = async (id: string) => {
        try {
            const response: AxiosResponse = await api.patch(`challange/acceptChallange`, {
                inviteId: id
            }, {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                }
            })
            if (response?.status === 200) {
                handleGetChallenges()
                window.location.href = '/active-games'
            }
        } catch (error) {
            console.error('Erro ao aceitar desafio')
        }
    }

    const handleRejectChallange = async (id: string) => {
        try {
            const response: AxiosResponse = await api.patch(`challange/rejectChallange`, {
                inviteId: id
            }, {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                }
            })
            if (response?.status === 200) {
                handleGetChallenges()
                toast.error(`Desafio recusado. Você recusou o desafio de ${challenges.find((challenge) => challenge._id === id)?.playerHostId}`)
            }
        } catch (error) {
            console.error('Erro ao recusar desafio')        
        }
    }

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
                    challenges={challenges}
                    index={index} />
            );
        }
        if (openCounterProposal.some(Boolean)) {
            const index = openCounterProposal.findIndex(Boolean);
            return (
                <CounterProposal
                    challenges={challenges}
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

    useEffect(() => {
        handleGetChallenges()
    }, [])


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
        challenges,
        modal,
        openTag,
        search,
        counterProposal,
        handleChange,
        handleOpenTag,
        handleAcceptChallenge,
        handleRejectChallange,
    }

}

export default useChallenges;