import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
console.log(auth);
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const user = 'Ijaz hossain'
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;