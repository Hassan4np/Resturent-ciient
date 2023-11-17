import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxousSecret from "./useAxousSecret";


const useAdmin = () => {
    const {user} = useAuth();
    const axioussecret = useAxousSecret();
    const { data: isAdmin,isPending:isAdminloading } = useQuery({
        queryKey: [user?.email,"isAdmin"],
        queryFn: async() =>{
       const res =  await  axioussecret.get(`/users/admin/${user?.email}`)
       console.log(res.data)
            return res.data.admin;
        }
    })
    return [isAdmin,isAdminloading]
};

export default useAdmin;