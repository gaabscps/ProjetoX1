import ModalSearchingFastGameBody from "@/app/Dashboard/components/ModalBody/SearchingFastGame";
import ModalAddGameBody from "@/app/dashboard/components/ModalBody/AddGame";
import ModalFastGameBody from "@/app/dashboard/components/ModalBody/FastGame";
import { ModalLoginBody } from "@/app/landing/components/ModalBody/Login";
import { ModalRegisterBody } from "@/app/landing/components/ModalBody/Register";
import { useState } from "react";

export function useModal() {
  //Hook para lidar com casos onde há mais de um body de modal no mesmo componente (ex: landing page)
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openAddGame, setOpenAddGame] = useState(false);
  const [openFastGame, setOpenFastGame] = useState(false);
  const [openSearchingFastGame, setOpenSearchingFastGame] = useState(false);

  //Botões que abrem modal dentro de modal
  const handleRegisterButton = () => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  //Botões que abrem modal dentro de modal
  const handleLoginButton = () => {
    setOpenRegister(false);
    setOpenLogin(true);
  };

  const handleSearchingFastGame = () => {
    setOpenFastGame(false);
    setOpenSearchingFastGame(true);
  };

  //adicione aqui o body do modal que você quer renderizar
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
    if (openFastGame) {
      return (
        <ModalFastGameBody handleSearchingFastGame={handleSearchingFastGame} />
      );
    }
    if (openSearchingFastGame) {
      return (
        <ModalSearchingFastGameBody
          setOpenSearchingFastGame={setOpenSearchingFastGame}
        />
      );
    }
    return null;
  }

  //Gerencia o estado do modal e qual body será renderizado
  function handleSetModal() {
    setOpenLogin(false);
    setOpenRegister(false);
    setOpenAddGame(false);
    setOpenFastGame(false);
    setOpenSearchingFastGame(false);
    // Se nenhum modal estiver aberto, abre o modal de login
    if (
      !openLogin &&
      !openRegister &&
      !openAddGame &&
      !openFastGame &&
      !openSearchingFastGame
    ) {
      setOpenLogin(true);
    }
  }

  return {
    // Estados para cada modal body
    // Ex: Como props do componente Modal: open={modal.openAddGame || modal.openFastGame}
    openLogin,
    openRegister,
    openAddGame,
    openFastGame,
    openSearchingFastGame,

    // Funções para abrir cada modal body
    // Ex: No botão para abrir a modal: onClick={() => modal.setOpenAddGame(true)}
    setOpenLogin,
    setOpenRegister,
    setOpenAddGame,
    setOpenFastGame,
    setOpenSearchingFastGame,

    // Adicionar aqui o body do modal que você quer renderizar
    // modalBody={modal.handleModalBody()}
    handleModalBody,

    // Gerencia o estado do modal e qual body será renderizado
    // setOpen={modal.handleSetModal}
    handleSetModal,
  };
}
