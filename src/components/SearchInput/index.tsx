import Image from 'next/image';
import lupa from '@/assets/svg/lupa.svg';
import { Datalist } from './Components/Datalist';
import useDashboard from '@/app/dashboard/useDashboard';
import { SearchPlayersByName } from '@/types/SearchPlayersByName';
interface SearchInputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: any;
    name?: string;
    error?: string;
    recent: any;
    recomendation: any;
    handleRemove: (id: number) => void;
    handleRemoveAll: () => void;
    onlineUserSearch?: SearchPlayersByName[];
    setValue: (value: any) => void;
    isOpenDatalist: boolean;
    setIsOpenDatalist: (value: boolean) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({
    onChange,
    value,
    name,
    recent,
    recomendation,
    onlineUserSearch,
    isOpenDatalist,
    setIsOpenDatalist,
    handleRemove,
    handleRemoveAll,
    setValue
}) => {


    return (
        <div className='input-container ' onClick={() => undefined}>
            <div
                onClick={() => {
                    setIsOpenDatalist(!isOpenDatalist)
                }}
            >
                <input
                    autoComplete='off'
                    onChange={onChange}
                    value={value}
                    id={name}
                    name={name}
                    list='search'
                    type='search'
                    style={{ height: '50px', paddingLeft: '37px' }}
                    className="input input-1 w-100 input-search-fastgame"
                    placeholder="Procure um jogador para desafiar"
                />
            </div>
            <div style={{ position: 'absolute', top: '16px', left: '15px' }}>
                <Image src={lupa} alt='lupa' />
            </div>
            {isOpenDatalist && (
                <Datalist
                    setIsOpenDatalist={setIsOpenDatalist}
                    setValue={setValue} value={value} recent={recent} recomendation={recomendation} onlineUserSearch={onlineUserSearch} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll} />
            )}
        </div>
    )
}