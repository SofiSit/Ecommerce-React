import React from 'react'
import { useContext } from "react";
import { UserContext } from '../context/UserContext/UserContext';


const TanksShipping = () => {
  const value2 = useContext(UserContext);
  const [user, setUser] = value2.user;

  return (
    <>
    
    <div className="comtainer_t"></div>
    <p className='thanks'> Dear {user.name}, Thank you for your order.</p>
    <p className='thanks'>You will receive a 15% discount in your mailbox {user.email} for your next purchase </p>
    
   
</>
    
  )
}

export default TanksShipping