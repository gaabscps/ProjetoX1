import { useMobileHook } from '@/hooks/useMediaQuery/isMobile';
import { useEffect, useState } from 'react';
import buttonImage from '@/assets/svg/buttonImage.png';
import { Card } from '../Card';
import { SearchInput } from '../SearchInput';
import gabs from '@/assets/svg/gabs.jpg';
import useDashboard from '@/app/dashboard/useDashboard';



interface FastGameInputBodyProps {
  setOpenFastGame: (value: boolean) => void;
  isVisiting?: boolean;
}

export default function FastGameInputBody({ setOpenFastGame, isVisiting }: FastGameInputBodyProps) {

  const { onlineUsers } = useDashboard()

  const recents = [
    {
      id: 1,
      name: 'Jorginho',
      image: gabs,
      status: 0,
    },
    {
      id: 2,
      name: 'Kleber',
      image: gabs,
      status: 0,
    },
    {
      id: 3,
      name: 'Bibi',
      image: gabs,
      status: 0,
    },
  ]

  const recomendations = [
    {
      id: 1,
      name: 'Bibi',
      image: gabs,
      status: 0,
    },
    {
      id: 2,
      name: 'Aspas',
      image: gabs,
      status: 0,
    },
    {
      id: 3,
      name: 'Kleber',
      image: gabs,
      status: 0,
    },
  ]

  const onlineUsers2 = [
    {
      id: 1,
      name: 'Bibi',
      image: gabs,
      status: 0,
    },
    {
      id: 2,
      name: 'Aspas',
      image: gabs,
      status: 1,
    },
    {
      id: 3,
      name: 'Kleber',
      image: gabs,
      status: 2,
    },
    {
      id: 4,
      name: 'Jorginho',
      image: gabs,
      status: 3,
    },
    {
      id: 5,
      name: 'Ana',
      image: gabs,
      status: 1,
    },
    {
      id: 6,
      name: 'Lucas',
      image: gabs,
      status: 2,
    },
    {
      id: 7,
      name: 'Mariana',
      image: gabs,
      status: 0,
    },
    {
      id: 8,
      name: 'Pedro',
      image: gabs,
      status: 3,
    },
    {
      id: 9,
      name: 'Julia',
      image: gabs,
      status: 2,
    },
    {
      id: 10,
      name: 'Rafael',
      image: gabs,
      status: 1,
    },
    {
      id: 11,
      name: 'Isabela',
      image: gabs,
      status: 0,
    },
    {
      id: 12,
      name: 'Diego',
      image: gabs,
      status: 3,
    },
    {
      id: 13,
      name: 'Carolina',
      image: gabs,
      status: 1,
    },
    {
      id: 14,
      name: 'Gustavo',
      image: gabs,
      status: 2,
    },
    {
      id: 15,
      name: 'Amanda',
      image: gabs,
      status: 0,
    },
    {
      id: 16,
      name: 'Thiago',
      image: gabs,
      status: 3,
    },
    {
      id: 17,
      name: 'Camila',
      image: gabs,
      status: 1,
    },
    {
      id: 18,
      name: 'Marcelo',
      image: gabs,
      status: 2,
    },
    {
      id: 19,
      name: 'Vanessa',
      image: gabs,
      status: 0,
    },
    {
      id: 20,
      name: 'Rodrigo',
      image: gabs,
      status: 3,
    }
  ];


  const [recent, setRecent] = useState(recents)
  const [recomendation] = useState(recomendations)
  const [onlineUserSearch, setOnlineUserSearch] = useState(onlineUsers)
  const [isOpenDatalist, setIsOpenDatalist] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState({
    search: ''
  })

  const handleSearch = (value: string) => {
    if (value.length > 0) {
      const newOnlineUser = onlineUsers.filter((item) => item.nickname && item.nickname.toLowerCase().includes(value.toLowerCase()));
      setOnlineUserSearch(newOnlineUser);
    } else {
      setOnlineUserSearch(onlineUsers);
    }
  };

  const handleChange = (event: any) => {
    const fieldValue = event.target.value
    const fieldName = event.target.name

    setSearch((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      }
    })
    setIsOpenDatalist(true)
    handleSearch(search.search)
  }



  const handleRemove = (id: number) => {
    const newRecent = recent.filter((item) => item.id !== id)
    setRecent(newRecent)
  }

  const handleRemoveAll = () => {
    setRecent([])
  }


  const isMobile = useMobileHook();

  useEffect(() => {
    handleSearch(search.search)
  }, [search.search])

  useEffect(() => {
    setOnlineUserSearch(onlineUsers)
  }, [onlineUsers])

  return (

    <div className="d-flex w-100 flex-gap-1 fast-game-container">
      <div style={{ width: isMobile ? '100%' : isVisiting ? '100%' : '85%' }}>
        <div>
          <SearchInput setIsOpenDatalist={setIsOpenDatalist} isOpenDatalist={isOpenDatalist} setValue={setSearch} recent={recent} recomendation={recomendation} onlineUserSearch={onlineUserSearch} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll} name={'search'} onChange={(e) => handleChange(e)} value={search.search} />
        </div>
      </div>
      {
        !isVisiting && (
          <div style={{ position: 'relative' }}>
            <Card
              onClick={() => setOpenFastGame(true)}
              borderRadius="5px"
              background={buttonImage.src}
              width={isMobile ? '100%' : '153px'}
              height={isMobile ? '100px' : '44px'}
              content={<> </>}
              className={`fast-game-card ${isHovered ? 'fast-game-card-hover' : ''
                } ${isActive ? 'fast-game-card-active' : ''}`}
            />
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => {
                setIsActive(true);
                setTimeout(() => {
                  setIsActive(false);
                }, 100);
                setOpenFastGame(true);
              }}
              className="fast-game text-small-700"
            >
              Jogo rápido
            </p>
          </div>
        )
      }
    </div >

  )
}
