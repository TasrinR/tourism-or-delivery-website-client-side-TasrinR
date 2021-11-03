import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

const useFirebase = () => {

    const [user, setUser] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    initializeAuthentication();

    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
            setError(error.message)
            console.log(error.message);
          });
          
    }
    useEffect(() => {
        const unsubs = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
                console.log(user);
            }else{
                setUser(null)
            }
        })

        return unsubs;
    }, [])

    return {
        handleSignOut,
        user,
        error,
        auth,
        signInUsingGoogle,
        setLoading,
        setError
    }
};

export default useFirebase;