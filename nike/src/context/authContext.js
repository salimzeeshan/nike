import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])
    

    const value = {
        currentUser
    }

    return (
        <AuthContext.Provider value={{signup, currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}