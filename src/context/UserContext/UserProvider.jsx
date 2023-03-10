import { useState } from 'react'
import { UserContext } from './UserContext'

const UserProvider = ({children}) => {

    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || null );

    const value2 = {
        user:[user,setUser]
    }
    return (
        <UserContext.Provider value={value2}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider