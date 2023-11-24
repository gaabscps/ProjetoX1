import { Auth } from '@/types/Auth'
import { useState } from 'react'
import { useCookies } from 'react-cookie';

export const useAuth = () => {
    const [auth, setAuth] = useState<Auth>()
    const [cookies, setCookie] = useCookies(['TokenAuth', 'idUser']);


    return {
        auth,
        setAuth,
        cookies,
        setCookie
    }
}