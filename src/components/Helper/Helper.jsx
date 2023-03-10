import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserContext';


//const initUser = sessionStorage.getItem("user") 

const Helper = () => {

    const value = useContext(UserContext)
	const [ user] = value.user;

	useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(user))
    }, [user])

	





    return (
    <></>
  )
}

export default Helper