import { useQuery } from "react-query";
import useAxousSecret from "./useAxousSecret";
import useAuth from "./useAuth";


const useQuarys = () => {
    const axioussecret = useAxousSecret();
    const {user} = useAuth()
    const { data:cards=[],refetch,isPending } = useQuery({
        queryKey: ['repoData',user?.email],
        queryFn: () =>
        axioussecret.get(`/cards?email=${user?.email}`)
        .then(res=>{
          return  res.data

        })
         
      })
    return [cards,refetch,isPending]
};

export default useQuarys;