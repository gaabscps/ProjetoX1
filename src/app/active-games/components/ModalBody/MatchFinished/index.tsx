import { Button } from '@/components/Button'
import Input from '@/components/Input'

interface MatchFinishedProps {
    setMatchFinished: (value: boolean) => void;
}

export const MatchFinished = ({ setMatchFinished }: MatchFinishedProps) => {
    return (
        <>
            <h5 style={{ marginBottom: '20px' }} className="h5-500">
                A partida foi finalizada!
            </h5>
            <p style={{ marginBottom: '30px' }} className="color-black-7">
                Para finalizar a partida de fato, clique no botão <b className="color-black-9">“Finalizar partida”</b> ao ser redirecionado para a próxima tela, preencha as informações e envie o resultado.
            </p>
            <div style={{ marginBottom: '25px' }} className="d-flex flex-gap-1 color-black-7 text-small-400">
                <input id="doNotshow" style={{ width: '15px', height: '15px', all: 'revert' }} type="checkbox" />
                <label className="action-icon" htmlFor="doNotshow">
                    Não exibir essa mensagem novamente
                </label>
            </div>
            <Button onClick={() => setMatchFinished(false)} margin="15px 0" width="100%" size="large" theme="primary" content="Entendi" />
        </>
    )
}

