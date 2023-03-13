import React from 'react'
import { useContext } from 'react'
import getDataUsers from '../../api/apiUsers'
import { UserDataContext } from '../UserDataContext/UserDataContext'
import { ApiContext } from './ApiContext'
//fetch para obtener los datos de user y proporcionarlos al contexto

const ApiProvider = ({children}) => {

    const { setUserData } = useContext(UserDataContext);
    const fetchUser = async () => {
        const data = await getDataUsers();
        setUserData(data);
    }


    return (
        <ApiContext.Provider value={{fetchUser}}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider