import Tag from '@/components/Tag';

interface TagGroupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  games?: any;
}

export default function TagGroup({ open, games, setOpen }: TagGroupProps) {


  return (
    <div
      style={{ height: '46px', position: 'relative', margin: '0 5px' }}
      className="d-flex align-items-center justify-content-between mr-1"
    >
      <div className="d-flex align-items-center">
        {games && games.length > 0 ?
          games.map((game: any, index: number) => (
            index < 2 &&
            <Tag key={index}>
              <p className="text-extra-small-400">
                {game.game}: {game.gameRank}
              </p>
            </Tag>
          ))
          : <Tag>
            <p className="text-extra-small-400">
              Sem jogos adicionados
            </p>
          </Tag>}
      </div>
      {games && games.length > 0 &&
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
