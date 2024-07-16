import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {


    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress progress-secondary w-56"></progress>
    } else if(user?.email){
        return children;
    } else {
        return <Navigate to='/login'></Navigate>;
    }

}    

export default PrivateRoutes;