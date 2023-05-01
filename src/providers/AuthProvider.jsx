import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
// console.log(auth);
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = () => {
        return signOut(auth)

    }
    const authInfo = {
        user,
        createUser,
        login,
        passwordReset,
        loading,
        logOut
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('Auth state', currentUser);
            setLoading(false)
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