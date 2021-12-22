import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../services/firebase.config";


const AuthContext = React.createContext();


export function useAuth(params) {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {
    const [currentUser, setcurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    async function signUp(name, email, password) {

        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user =  res.user
        db.collection("users").add({
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            cart: []
          });
        return  res;
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(email, password) {
        return auth.signOut()
    }


    useEffect(() => {
       const unsubscribe =  auth.onAuthStateChanged(user => {
            setcurrentUser(user);
            setLoading(false)
        })

        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        signUp,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}


