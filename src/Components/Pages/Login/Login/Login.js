import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import initializeAuthentication from '../Firebase/firebase.init';

const Login = () => {
    initializeAuthentication();

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const history = useHistory()
    console.log(location);

    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(res => {
            location.state ? history.push(location.state.from.pathname) : history.push('/')
        })
        .catch((error)=> {
            setError(error.message)
            console.log(error)
        })
        .finally(() => { setLoading(false) })
    }

    return (
        <div>
            <button
                className="btn btn-warning m-5"
                onClick={handleGoogleLogin}
                >Google Sign In
            </button>
        </div>
    );
};

export default Login;