import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserContext';



const Helper = () => {

    const value = useContext(UserContext)
	const [ user] = value.user;

	useEffect(() => {//almacenamiento de sesion dle user
        sessionStorage.setItem("user", JSON.stringify(user))
    }, [user])

	





    return (
    <></>
  )
}

export default Helper