import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
                const userEmail = currentUser?.email || user?.email;
                setUser(currentUser);
                setLoading(false);
                const userInfo = {email: userEmail};
                if(currentUser){
                    axios.post('http://localhost:5000/jwt', userInfo, {
                        withCredentials: true
                    })
                    .then(data =>{
                         console.log(data.data);
                    })
                } else {
                    axios.post('http://localhost:5000/logout', userInfo, {
                        withCredentials: true
                    })
                    .then(data =>{
                        console.log(data.data);
                    })
                }
        })

        return ()=>{
            return unSubscribe();
        }
    },[])

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;