import React, {useContext, useState, useEffect} from 'react'
import {auth} from '../Firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()

    const [loading, setLoading] = useState(true)

    function signup(name, phone,  password) {
        return auth.createUserWithEmailAndPassword(name, phone, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
        })
    
        return unsubscribe
      }, [])

    function login(phone, password) {
        return auth.signInWithEmailAndPassword(phone, password)
    }

    function logout() {
        return auth.signOut()
    }

    // function resetPassword(email) {
    //     return auth.sendPasswordResetEmail(email)
    // }

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
