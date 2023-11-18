import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useAxousSecret from "./useAxousSecret";
import useAuth from "./useAuth";
import useAxousPublic from "./useAxousPublic";

const useMenu = () => {
    const axouspublic = useAxousPublic()
    const {user} = useAuth()
    // const [menus, setmenus] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/bistoboss')
    //         .then(res => res.json())
    //         .then(data => {
    //             // const  propler = data.filter(item=>item.category==="popular")
    //             // setmenus(propler)
    //             console.log(data)
    //             setmenus(data)
             
    //         })
    // }, [])
    // return menus
  

    const { data:menus=[],refetch } = useQuery({
        queryKey: ['bistoboss'],
        queryFn:  async () =>{
            const res = await axouspublic.get('/bistoboss');
            return res.data
        }
      
      })
    return [menus,refetch]




};

export default useMenu;