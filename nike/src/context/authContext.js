import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage} from '../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    const upload = async (file, currentUser, setLoading) => {
        const fileRef = ref(storage, currentUser.uid + '.png')

        setLoading(true)
        const snapshot = await uploadBytes(fileRef, file)
        const photoURL = await getDownloadURL(fileRef)
        updateProfile(currentUser, {photoURL})
        setLoading(false)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user)
              } else {

              }
        })
        return unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{signup, currentUser, login, logout, upload}}>
            {children}
        </AuthContext.Provider>
    )
}