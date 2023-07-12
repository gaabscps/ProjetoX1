import Image from 'next/image';
import logo from '@/assets/svg/X1_logo_vertical_branco 1.svg';


export default function WelcomeHeader() {

    return (
        <header>
            <div className="w-100 welcome-header-container">
                <Image className="welcome-header-logo" src={logo} alt='logo' />
                <h5 className="h5-500">Olá, boas-vindas ao Play X1!</h5>
            </div>
        </header>
    )
} 