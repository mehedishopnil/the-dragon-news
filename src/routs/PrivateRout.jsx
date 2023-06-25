import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    

    if(user){
        return children;
    }
    return <Navigate state= {{from: location}} to='/login'></Navigate>
};

export default PrivateRout;

/**
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 4. Setup the private router
 * 
 */