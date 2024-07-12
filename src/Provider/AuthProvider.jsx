import { useContext } from "react";
import {getAuth} from 'firebase/auth';

const AuthContext = useContext(null);

const auth = getAuth();

const AuthProvider = ({children}) => {

    const authInfo ={}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;