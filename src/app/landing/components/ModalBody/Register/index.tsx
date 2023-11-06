import { Card } from '@/components/Card';
import Input from '@/components/Input';
import Image from 'next/image';
import logo from '@/assets/svg/X1_logo_horizontal_branco 3.png';
import google from '@/assets/svg/googleModal.svg';
import facebook from '@/assets/svg/facebookModal.svg';
import apple from '@/assets/svg/appleModal.svg';
import twitch from '@/assets/svg/twitchModal.svg';
import steam from '@/assets/svg/steamModal.svg';
import { Button } from '@/components/Button';
import Link from 'next/link';
import useLanding from '@/app/landing/useLanding';
import { maskCpf } from '@/utils/mask/maskCpf';

interface ModalRegisterBodyProps {
  handleLoginButton: () => void;
}

export function ModalRegisterBody({ handleLoginButton }: ModalRegisterBodyProps) {

  const landing = useLanding()
  const disabledConditions = !landing.values.email || !landing.values.cpf || !landing.values.password || !landing.values.confirmPassword || !landing.values.birthDate


  return (
    <div className="d-flex flex-column align-items-center w-100 h-100">
      <Image src={logo} className="modal-logo" alt="" />
      <h5 className="h5-500 h5-modal-margin h5-modal">Crie a sua conta</h5>
      <form className="loginRegisterForm" action="">
        <Input
          value={landing.values.name}
          onChange={(e) => landing.handleChange(e)}
          placeholder="Seu nome"
          name="name"
          error={landing.errorMessage.name}
          onBlur={(e) => landing.handleBlur(e)}
        />
        <Input
          value={landing.values.email}
          onChange={(e) => landing.handleChange(e)}
          placeholder="Seu e-mail"
          type="email"
          name="email"
          error={landing.errorMessage.email}
          onBlur={(e) => landing.handleBlur(e)}
        />
        <Input
          value={maskCpf(landing.values.cpf)}
          onChange={(e) => landing.handleChange(e)}
          placeholder="Seu CPF"
          type="text"
          name="cpf"
          error={landing.errorMessage.cpf}
          onBlur={(e) => landing.handleBlur(e)}
          maxLength={14}
        />
        <Input
          value={landing.values.password}
          onChange={(e) => landing.handleChange(e)}
          placeholder="Sua senha"
          type="password"
          name="password"
          error={landing.errorMessage.password}
          onBlur={(e) => landing.handleBlur(e)}
        />
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
          value={landing.values.confirmPassword}
          onChange={(e) => landing.handleChange(e)}
          placeholder="Confirme a sua senha"
          type="password"
          name="confirmPassword"
          error={landing.errorMessage.confirmPassword}
          onBlur={(e) => landing.handleBlur(e)}
        />
        <Input
          value={landing.values.birthDate}
          onChange={(e) => landing.handleChange(e)}
          placeholder="Data de nascimento"
          type="date"
          name="birthDate"
          error={landing.errorMessage.birthDate}
          onBlur={(e) => landing.handleBlur(e)}
        />
        <p className="registerTerms line-height-150 color-black-7">
          Ao criar uma conta, você concorda com os nossos{' '}
          <span style={{ color: 'white' }}>Termos de Uso</span> e{' '}
          <span style={{ color: 'white' }}>Política de Privacidade</span>
        </p>
        <Link onClick={async () => {
          await landing.handleRegister()
        }}
          href={""}
        >
          <div className="d-flex align-items-center justify-content-center w-100">
            <Button disabled={disabledConditions} width='100%' theme='primary' size='large' content="Criar a minha conta" />
          </div>
        </Link>
      </form>
      <div className="d-flex justify-content-center w-100 align-items-center modal-separator">
        <div style={{ width: '40%', borderBottom: '1.5px solid #5F5C6B' }} />
        <div className="d-flex justify-content-center" style={{ width: '20%' }}>
          ou
        </div>
        <div style={{ width: '40%', borderBottom: '1.5px solid #5F5C6B' }} />
      </div>
      <div className="d-flex w-100 justify-content-between modal-socialMedia">
        <Card
          theme="outline"
          width="80px"
          height="60px"
          content={
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
              <Image src={google} alt="" />
            </div>
          }
        />
        <Card
          theme="outline"
          width="80px"
          height="60px"
          content={
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
              <Image src={facebook} alt="" />
            </div>
          }
        />
        <Card
          theme="outline"
          width="80px"
          height="60px"
          content={
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
              <Image src={apple} alt="" />
            </div>
          }
        />
        <Card
          theme="outline"
          width="80px"
          height="60px"
          content={
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
              <Image src={twitch} alt="" />
            </div>
          }
        />
        <Card
          theme="outline"
          width="80px"
          height="60px"
          content={
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
              <Image src={steam} alt="" />
            </div>
          }
        />
      </div>
      <div>
        <span>Já tem uma conta? </span>
        <span
          onClick={() =>
            handleLoginButton()
          }
          className="action-icon color-primary-3 text-normal-500"
        >
          Entrar
        </span>
      </div>
    </div >
  );
}
