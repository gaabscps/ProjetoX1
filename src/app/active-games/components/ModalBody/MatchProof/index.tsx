import { CloseX } from '@/assets/svg/CloseX';
import { Button } from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { useState, ChangeEvent } from 'react';

interface Option {
    value: number;
    label: string;
}

interface MatchProofProps {
    handleCloseModal: () => void;
}

export const MatchProof = ({ handleCloseModal }: MatchProofProps) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const options: Option[] = [
        {
            value: 0,
            label: 'Vitória',
        },
        {
            value: 1,
            label: 'Derrota',
        },
    ];

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value, 10);
        const selectedOption = options.find((option) => option.value === value);
        setSelectedOption(selectedOption || null);
    };

    return (
        <>
            <h5 style={{ marginBottom: '20px' }} className="h5-500">
                Finalizar partida
            </h5>

            <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
                <p className="color-black-7">Jogador desafiado:</p>
                <p>Bibi Mira Tensss</p>
            </div>
            <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
                <p className="color-black-7">Jogo escolhido:</p>
                <p>League of Legends</p>
            </div>
            <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
                <p className="color-black-7">Aposta:</p>
                <p>R$ 1.500,00</p>
            </div>

            <Select
                name="game"
                placeholder="Resultado da partida"
                option={options}
                onChange={handleSelectChange}
            />
            {selectedOption && selectedOption.value === 1 && (
                <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ marginBottom: '25px' }}>
                    {/* Conteúdo que será renderizado caso a opção selecionada seja "Derrota" */}
                    <label htmlFor="revanche">Enviar convite de revanche?</label>
                    <input id="revanche" type="radio" />
                </div>
            )}
            <Input type="file" />
            <div className="d-flex align-items-center flex-gap-1">
                <p className="text-small-400 color-black-7">Vitória_lol_10062023.png</p>
                <CloseX width="8px" />
            </div>

            <Button
                disabled={!selectedOption}
                onClick={() => handleCloseModal()}
                margin="0 0 15px 0"
                theme="primary"
                size="large"
                width="100%"
                content="Finalizar e enviar resultado"
            />
        </>
    );
};
