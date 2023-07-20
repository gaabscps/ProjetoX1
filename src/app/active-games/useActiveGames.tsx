import { useState } from 'react';
import { MatchFinished } from './components/ModalBody/MatchFinished';
import { MatchProof } from './components/ModalBody/MatchProof';

const useActiveGames = () => {

    const [matchFinished, setMatchFinished] = useState(false);
    const [matchProof, setMatchProof] = useState(false);
    const [openRefuse, setOpenRefuse] = useState<boolean[]>([]);
    const [openTag, setOpenTag] = useState<boolean[]>([]);

    const handleModalBody = () => {
        if (matchFinished) {
            return (
                <MatchFinished setMatchFinished={setMatchFinished} />
            );
        }
        if (matchProof) {
            return (
                <MatchProof handleCloseModal={handleCloseModal} />
            );
        }
        if (openRefuse.some(Boolean)) {
            return (
                <></>
            );
        }
        return <></>;
    };


    const handleOpenMatchFinished = () => {
        setMatchFinished(true);
    };

    const handleOpenCounterProposal = () => {
        setMatchProof(true)
    };

    const handleOpenRefuse = (index: number) => {
        const newOpenRefuse = [...openRefuse];
        newOpenRefuse[index] = !newOpenRefuse[index];
        setOpenRefuse(newOpenRefuse);
    };

    const handleCloseModal = () => {
        setMatchFinished(false);
        setMatchProof(false);
    };


    return {
        matchFinished,
        matchProof,
        handleOpenMatchFinished,
        handleOpenCounterProposal,
        handleModalBody,
        handleCloseModal,
    }
}

export default useActiveGames