import DropdownMenu from '@/components/DropdownMenu'
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import arrowCard from '@/assets/svg/arrowCard.svg';
import lupa from '@/assets/svg/lupa.svg';


interface DropdownConfigProps {
    openSettings: boolean;
    logout?: () => void;
}

export const DropdownConfig: React.FC<DropdownConfigProps> = ({ openSettings, logout }) => {

    const settings = [
        {
            icon: lupa,
            content: 'Meu perfil',
            action: () => console.log('Meu perfil')
        },
        {
            icon: lupa,
            content: 'Extratos',
            action: () => console.log('Extratos')
        },
        {
            icon: lupa,
            content: 'Sacar',
            action: () => console.log('Sacar')
        },
        {
            icon: lupa,
            content: 'Depositar',
            action: () => console.log('Depositar')
        },
        {
            icon: lupa,
            content: 'Ocorrências',
            action: () => console.log('Ocorrências')
        },
        {
            icon: lupa,
            content: 'Notificações',
            action: () => console.log('Notificações')
        },
        {
            icon: lupa,
            content: 'Sair',
            action: () => logout && logout()
        }
    ]

    return (
        <DropdownMenu
            header={<div style={{ padding: '15px 10px' }} className="text-extra-small-400">Configurações</div>}
            list={false}
            overflow={false}
            open={openSettings}
            top={32}
            right={9}
            width="164px"
            tabs={settings.map((item, index) => (
                {
                    content:
                        <div onClick={item.action} style={{ padding: '2px 0px' }} className="d-flex justify-content-between align-center w-100">
                            <div className="d-flex align-center">
                                <div style={{ paddingRight: '7px' }} className="d-flex align-items-center">
                                    <Image src={item.icon} alt="" />
                                </div>
                                <p className="text-extra-small-400">
                                    {item.content}
                                </p>
                            </div>
                            <div className="d-flex align-items-center">
                                <Image src={arrowCard} alt="" />
                            </div>
                        </div>,
                    onClick: () =>
                        //   setOpenAddGame(true),
                        undefined
                }
            ))}
        />
    )
}