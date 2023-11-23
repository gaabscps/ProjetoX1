import DropdownMenu from '@/components/DropdownMenu'
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import arrowCard from '@/assets/svg/arrowCard.svg';
import lupa from '@/assets/svg/lupa.svg';


interface DropdownConfigProps {
    openSettings: boolean;
}

export const DropdownConfig: React.FC<DropdownConfigProps> = ({ openSettings }) => {

    const settings = [
        {
            icon: lupa,
            content: 'Meu perfil',
        },
        {
            icon: lupa,
            content: 'Extratos',
        },
        {
            icon: lupa,
            content: 'Sacar',
        },
        {
            icon: lupa,
            content: 'Depositar',
        },
        {
            icon: lupa,
            content: 'Ocorrências',
        },
        {
            icon: lupa,
            content: 'Notificações',
        },
        {
            icon: lupa,
            content: 'Sair',
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
                        <div style={{ padding: '2px 0px' }} className="d-flex justify-content-between align-center w-100">
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