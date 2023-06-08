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
  };

  const handleLoginButton = () => {
    setOpenRegister(false);
    setOpenLogin(true);
  };

  function handleModalBody() {
    if (openLogin) {
      return <ModalLoginBody handleRegisterButton={handleRegisterButton} />;
    }
    if (openRegister) {
      return <ModalRegisterBody handleLoginButton={handleLoginButton} />;
    }
    if (openAddGame) {
      return <ModalAddGameBody />;
    } else {
      return <ModalLoginBody handleRegisterButton={handleRegisterButton} />;
    }
  }
  function handleSetModal() {
    {
      /* 
       Para adicionar um novo body, adicione um novo estado e um novo bloco else if
       e adicione o novo estado como false nos outros blocos else if

           if (!openLogin && !openRegister && !openNewBody) {
      setOpenLogin(true);
      setOpenRegister(false);
      setOpenNewBody(false);
    } else if (openLogin) {
      setOpenLogin(false);
      setOpenRegister(false);
      setOpenNewBody(false);
    } else if (openRegister) {
      setOpenLogin(false);
      setOpenRegister(false);
      setOpenNewBody(false);
    } else if (openNewBody) {
      setOpenLogin(false);
      setOpenRegister(false);
      setOpenNewBody(false);
    }
    */
    }
    switch (true) {
      case !openLogin && !openRegister && !openAddGame:
        setOpenLogin(true);
        setOpenRegister(false);
        setOpenAddGame(false);
        break;
      case openLogin:
      case openRegister:
      case openAddGame:
        setOpenAddGame(false);
        setOpenLogin(false);
        setOpenRegister(false);
        break;
    }
  }

  return {
    //Estados para cada modal body
    openLogin,
    openRegister,
    openAddGame,
    setOpenLogin,
    setOpenRegister,
    setOpenAddGame,

    //Gerencia o estado do modal e qual body será renderizado
    handleModalBody,
    handleSetModal,
  };
}
