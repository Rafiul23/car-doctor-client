import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const navigate = useNavigate();

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
    }

    if(user?.email){
        return children;
    } else {
        return navigate('/login');
    }

}    

export default PrivateRoutes;