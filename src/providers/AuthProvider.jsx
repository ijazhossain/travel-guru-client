import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
console.log(auth);
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const authInfo = {
        user,
        createUser,
        login,
        passwordReset
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('Auth state', currentUser);
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;