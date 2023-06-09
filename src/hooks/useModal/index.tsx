import ModalAddGameBody from "@/app/dashboard/components/ModalBody/AddGame";
import { ModalLoginBody } from "@/app/landing/components/ModalBody/Login";
import { ModalRegisterBody } from "@/app/landing/components/ModalBody/Register";
import { useState } from "react";

export function useModal() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openAddGame, setOpenAddGame] = useState(false);

  const handleRegisterButton = () => {
    setOpenLogin(false);
    setOpenRegister(true);
    setOpenAddGame(false);
  };

  const handleLoginButton = () => {
    setOpenRegister(false);
    setOpenLogin(true);
    setOpenAddGame(false);
  };

  function handleModalBody() {
    if (openLogin) {
      return <ModalLoginBody handleRegisterButton={handleRegisterButton} />;
    }
    if (openRegister) {
      return <ModalRegisterBody handleLoginButton={handleLoginButton} />;
    }
    if (openAddGame) {
      return <ModalAddGameBody setOpenAddGame={setOpenAddGame} />;
    }
    return null;
  }

  function handleSetModal() {
    setOpenLogin(false);
    setOpenRegister(false);
    setOpenAddGame(false);
    if (!openLogin && !openRegister && !openAddGame) {
      setOpenLogin(true);
    }
  }

  return {
    // Estados para cada modal body
    openLogin,
    openRegister,
    openAddGame,
    setOpenLogin,
    setOpenRegister,
    setOpenAddGame,

    // Gerencia o estado do modal e qual body será renderizado
    handleModalBody,
    handleSetModal,
  };
}
