import Tag from '@/components/Tag';
import { ActiveGameUserGame } from '@/types/ActiveGame';
import { useState } from 'react';

interface TagGroupProps {
    games?: ActiveGameUserGame[];
}

export default function GamesDropdown({ games }: TagGroupProps) {

    const [open, setOpen] = useState(false)

    return (
        <div
            style={{ height: '46px', position: 'relative', margin: '0 5px' }}
            className="d-flex align-items-center justify-content-between mr-1"
        >
            <div className="d-flex align-items-center">
                {games && games.length > 0 ?
                    games.map((game: ActiveGameUserGame, index: number) => (

                        index < 2 &&
                        <Tag key={index}>
                            <p className="text-extra-small-400">
                                {game.nameGame}: {game.level}
                            </p>
                        </Tag>
                    ))
                    : <Tag>
                        <p className="text-extra-small-400">
                            Sem jogos adicionados
                        </p>
                    </Tag>}
            </div>
            {games && games.length > 1 &&
                <>
                    <p
                        onClick={() => setOpen(!open)}
                        className="text-extra-small-400 action-icon"
                    >
                        ver mais
                    </p><div
                        style={{ position: 'absolute' }}
                        className={`d-flex align-items-center ${open ? 'tag-wrapper' : 'tag'}`}
                    >
                        {games.map((game: any, index: number) => (
                            index >= 2 &&
                            <Tag key={index}>
                                <p className="text-extra-small-400">
                                    {game.game}: {game.gameRank}
                                </p>
                            </Tag>
                        ))}
                    </div>
                </>
            }
        </div>
    );
}
