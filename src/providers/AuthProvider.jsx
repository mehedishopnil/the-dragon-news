import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase';


const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const user = null;

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password); 
    }

    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        createUser,
        userLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;