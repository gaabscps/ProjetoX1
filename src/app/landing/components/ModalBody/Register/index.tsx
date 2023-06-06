import { EmptyImage } from "@/assets/svg/EmptyImage";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Input from "@/components/Input";
import { useModal } from "@/hooks/useModal";
import { useEffect } from "react";

interface ModalRegisterBodyProps {
  handleLoginButton: () => void;
}

export function ModalRegisterBody({
  handleLoginButton,
}: ModalRegisterBodyProps) {
  const modal = useModal();

  useEffect(() => {
    if (modal.openLogin) {
      modal.setOpenLogin(true);
    }
  }, [modal]);

  return (
    <div className="d-flex flex-column align-items-center w-100 h-100">
      <EmptyImage className="modal-logo" />
      <h5 className="h5-500 h5-modal-margin h5-modal">Crie a sua conta</h5>
      <form className="loginRegisterForm" action="">
        <Input placeholder="Seu e-mail" type="email" name="email" />
        <Input placeholder="Seu CPF" type="text" name="cpf" />
        <Input placeholder="Sua senha" type="password" name="password" />
        <div className="mb-2">Sua senha deve conter:</div>
        <ul className="password-requirements ">
          <li className="line-height-150 color-black-7">
            No mínimo 8 caracteres
          </li>
          <li className="line-height-150 color-black-7">
            Pelo menos um número
          </li>
          <li className="line-height-150 color-black-7">
            Pelo menos um caractere maiúsculo.
          </li>
        </ul>
        <Input
          placeholder="Confirme a sua senha"
          type="password"
          name="password"
        />
        <Input placeholder="Data de nascimento" type="date" name="password" />
        <p className="registerTerms line-height-150 color-black-7">
          Ao criar uma conta, você concorda com os nossos{" "}
          <span style={{ color: "white" }}>Termos de Uso</span> e{" "}
          <span style={{ color: "white" }}>Política de Privacidade</span>
        </p>
        <div className="d-flex align-items-center justify-content-center">
          <button className="loginRegisterButton"> Criar a minha conta </button>
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
        <span>Já tem uma conta? </span>
        <span
          onClick={() => {
            handleLoginButton();
          }}
          className="action-icon color-primary-3 text-normal-500"
        >
          Entrar
        </span>
      </div>
    </div>
  );
}
