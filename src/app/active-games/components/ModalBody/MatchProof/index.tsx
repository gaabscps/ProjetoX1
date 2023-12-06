import { CloseX } from '@/assets/svg/CloseX';
import { Button } from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { ActiveGameMatch } from '@/types/ActiveGame';
import { maskBRL } from '@/utils/mask/maskMoney';
import { useState, ChangeEvent } from 'react';

interface Option {
    value: string;
    label: string;
}

interface MatchProofProps {
    handleFinishGame: (
        matchId: string,
        winner: string,
        proof: File
    ) => void;
    match: ActiveGameMatch;
    matchId: string;
}

export const MatchProof = ({ handleFinishGame, match, matchId }: MatchProofProps) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const options: Option[] = [
        {
            value: 'winner',
            label: 'Vitória',
        },
        {
            value: 'loser',
            label: 'Derrota',
        },
    ];

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        const selectedOption = options.find((option) =>
            option.value === value ? option : null);
        setSelectedOption(selectedOption || null);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files ? event.target.files[0] : null;
        setFile(selectedFile);
        console.log(selectedFile)
    };

    return (
        <>
            <h5 style={{ marginBottom: '20px' }} className="h5-500">
                Finalizar partida
            </h5>

            <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
                <p className="color-black-7">Jogador desafiado:</p>
                <p>{match?.player2?.name}</p>
            </div>
            <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
                <p className="color-black-7">Jogo escolhido:</p>
                <p>{match?.gameName}</p>
            </div>
            <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
                <p className="color-black-7">Aposta:</p>
                <p>{maskBRL(String(match?.value))}</p>
            </div>

            <Select
                name="game"
                placeholder="Resultado da partida"
                option={options}
                onChange={handleSelectChange}
            />
            {
                selectedOption && selectedOption.value === 'loser' && (
                    <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ marginBottom: '25px' }}
                    >
                        {/* Conteúdo que será renderizado caso a opção selecionada seja "Derrota" */}
                        <label htmlFor="revanche">Enviar convite de revanche?</label>
                        <input id="revanche" type="radio" />
                    </div>
                )}
            <div className='mb-3'>
                <Input
                    fileLabel='Foto do resultado da partida'
                    type="file"
                    onChange={(e) => {
                        handleFileChange(e);
                    }}
                />
                <div style={{ marginTop: "10px" }} className="d-flex align-items-center flex-gap-1">
                    <p className="text-small-400 color-black-7">{file?.name}</p>
                    {file?.name && (
                        <div className='action-icon' onClick={() => setFile(null)}>
                            <CloseX width="8px" />
                        </div>
                    )}
                </div>
            </div>

            <Button
                disabled={!selectedOption}
                onClick={() => {
                    const formData = {
                        matchId,
                        image: file,
                        result: selectedOption?.value,
                    };
                    console.log(formData.image)
                    console.log(file)
                    handleFinishGame(
                        formData.matchId,
                        formData.result as string,
                        formData.image as File
                    )
                }
                }
                margin="0 0 15px 0"
                theme="primary"
                size="large"
                width="100%"
                content="Finalizar e enviar resultado"
            />
        </>
    );
};
