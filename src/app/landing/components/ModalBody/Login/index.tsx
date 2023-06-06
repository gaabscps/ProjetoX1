import { EmptyImage } from "@/assets/svg/EmptyImage";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Input from "@/components/Input";
import { useModal } from "@/hooks/useModal";
import { useEffect } from "react";

interface ModalLoginBodyProps {
  handleRegisterButton: (open: boolean) => void;
}

export function ModalLoginBody({ handleRegisterButton }: ModalLoginBodyProps) {
  const modal = useModal();

  useEffect(() => {
    if (modal.openLogin) {
      modal.setOpenLogin(true);
    }
  }, [modal]);

  return (
    <div className="d-flex flex-column align-items-center w-100 h-100">
      <EmptyImage className="modal-logo" />
      <h5 className="h5-500 h5-modal-margin h5-modal">Entre com a sua conta</h5>
      <form className="loginRegisterForm" action="">
        <Input placeholder="Seu e-mail" type="email" name="email" />
        <Input placeholder="Sua senha" type="password" name="password" />
        <div className="action-icon forgotPassword">Esqueceu a sua senha?</div>
        <div className="d-flex align-items-center justify-content-center">
          <button className="loginRegisterButton"> Entrar </button>
        </div>
      </form>
      <div
        style={{ margin: "40px 0" }}
        className="d-flex justify-content-center w-100 align-items-center"
      >
        <div style={{ width: "40%", borderBottom: "1.5px solid #5F5C6B" }} />
        <div className="d-flex justify-content-center" style={{ width: "20%" }}>
          ou
        </div>
        <div style={{ width: "40%", borderBottom: "1.5px solid #5F5C6B" }} />
      </div>
      <div className="d-flex w-100 justify-content-between modal-socialMedia">
        <Card theme="outline" width="80px" height="60px" content={"1"} />
        <Card theme="outline" width="80px" height="60px" content={"2"} />
        <Card theme="outline" width="80px" height="60px" content={"3"} />
        <Card theme="outline" width="80px" height="60px" content={"4"} />
        <Card theme="outline" width="80px" height="60px" content={"5"} />
      </div>
      <div>
        <span>Ainda não tem uma conta? </span>
        <span
          onClick={() => {
            handleRegisterButton(false);
          }}
          className="action-icon color-primary-3 text-normal-500"
        >
          Criar conta
        </span>
      </div>
    </div>
  );
}
