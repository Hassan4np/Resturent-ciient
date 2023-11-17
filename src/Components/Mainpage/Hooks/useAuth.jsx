import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useAuth = () => {
    const authcontext = useContext(AuthContext);

    return authcontext;
};

export default useAuth;