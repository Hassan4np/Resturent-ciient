import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({children}) => {
    const[isAdmin,isAdminloading] = useAdmin();
    const {user,loading} = useAuth();
    const loc = useLocation();

    if(loading|| isAdminloading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user&& isAdmin){
        return children
    }
    // return  <Navigate state={{loc?.pathname}} to="/login"></Navigate>
    return  <Navigate state={{from:loc}} replace to="/login"></Navigate>
};

export default AdminRoute;