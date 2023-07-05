import { useState } from "react";
import ModalAddGameBody from "./components/ModalBody/AddGame";
import ModalFastGameBody from "@/components/ModalBody/FastGame";
import ModalSearchingFastGameBody from "./components/ModalBody/SearchingFastGame";

const useDashboard = () => {
    const [openAddGame, setOpenAddGame] = useState(false)
    const [openFastGame, setOpenFastGame] = useState(false)
    const [openSearchingFastGame, setOpenSearchingFastGame] = useState(false)

    //MODAL
    const handleSearchingFastGame = () => {
        setOpenFastGame(false)
        setOpenSearchingFastGame(true)
    }

    function handleModalBody() {

        if (openAddGame) {
            return <ModalAddGameBody setOpenAddGame={setOpenAddGame} />
        }
        if (openFastGame) {
            return <ModalFastGameBody handleSearchingFastGame={handleSearchingFastGame} />
        }
        if (openSearchingFastGame) {
            return <ModalSearchingFastGameBody setOpenSearchingFastGame={setOpenSearchingFastGame} />
        }
        return null
    }

    const modal = {
        openAddGame,
        setOpenAddGame,
        openFastGame,
        setOpenFastGame,
        openSearchingFastGame,
        setOpenSearchingFastGame,
        handleModalBody
    }

    return {
        modal

    }
};

export default useDashboard;