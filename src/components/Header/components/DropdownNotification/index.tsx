import DropdownMenu from '@/components/DropdownMenu'
import { useMediaQuery } from 'react-responsive';

interface DropdownNotificationProps {
    openNotification: boolean;
}

export const DropdownNotification: React.FC<DropdownNotificationProps> = ({ openNotification }) => {
    const is565 = useMediaQuery({ maxWidth: 565 });


    return (
        <DropdownMenu
            open={openNotification}
            list={false}
            background="#3E3B3F"
            top={is565 ? 28 : 40}
            right={60}
            width="239px"
            header={
                <>
                    <div
                        style={{ padding: '15px 10px' }}
                        className="d-flex flex-gap-1 justify-content-between text-extra-small-400 w-100"
                    >
                        <p style={{ whiteSpace: 'nowrap' }}>Notificações</p>
                        <p
                            className="color-black-7 action-icon"
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            Limpar tudo
                        </p>
                    </div>
                </>
            }
            tabs={[
                {
                    content: (
                        <div className="d-flex w-100 justify-content-between text-extra-small-400 ">
                            <div
                                className="d-flex flex-column"
                                style={{ width: '175px', gap: '5px' }}
                            >
                                <p className="line-height-150">
                                    O valor de R$ 200,00 foi depositado em sua conta
                                </p>
                                <p className="color-black-7 line-height-150">
                                    10/03 • 10:32
                                </p>
                            </div>
                            <div className="color-black-7 ">x</div>
                        </div>
                    ),
                },
                {
                    content: (
                        <div className="d-flex w-100 justify-content-between text-extra-small-400">
                            <div
                                className="d-flex flex-column"
                                style={{ width: '175px', gap: '5px' }}
                            >
                                <p className="line-height-150">
                                    O valor de R$ 200,00 foi depositado em sua conta
                                </p>
                                <p className="color-black-7 line-height-150">
                                    10/03 • 10:32
                                </p>
                            </div>
                            <div className="color-black-7 ">x</div>
                        </div>
                    ),
                },
                {
                    content: (
                        <div className="d-flex w-100 justify-content-between text-extra-small-400">
                            <div
                                className="d-flex flex-column"
                                style={{ width: '175px', gap: '5px' }}
                            >
                                <p className="line-height-150">
                                    O valor de R$ 200,00 foi depositado em sua conta
                                </p>
                                <p className="color-black-7 line-height-150">
                                    10/03 • 10:32
                                </p>
                            </div>
                            <div className="color-black-7 ">x</div>
                        </div>
                    ),
                },
                {
                    content: (
                        <div className="d-flex w-100 justify-content-between text-extra-small-400">
                            <div
                                className="d-flex flex-column"
                                style={{ width: '175px', gap: '5px' }}
                            >
                                <p className="line-height-150">
                                    O valor de R$ 200,00 foi depositado em sua conta
                                </p>
                                <p className="color-black-7 line-height-150">
                                    10/03 • 10:32
                                </p>
                            </div>
                            <div className="color-black-7 ">x</div>
                        </div>
                    ),
                },
            ]}
        />
    )
}