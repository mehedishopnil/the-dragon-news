import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase';


const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const user = {displayName: 'Mehedi Hasan'}

    const authInfo = {
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;