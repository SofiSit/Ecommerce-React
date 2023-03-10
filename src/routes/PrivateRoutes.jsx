import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext/UserContext';

const PrivateRoutes = ({ children }) => {
    const value2 = useContext(UserContext);
    const [ user ] = value2.user;
    
    return user ? children : <Navigate to="/login" />


}

export default PrivateRoutes