import { useEffect, useState } from "react";

const useMenu = () => {
    const [menus, setmenus] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bistoboss')
            .then(res => res.json())
            .then(data => {
                // const  propler = data.filter(item=>item.category==="popular")
                // setmenus(propler)
                console.log(data)
                setmenus(data)
             
            })
    }, [])
    return menus
};

export default useMenu;