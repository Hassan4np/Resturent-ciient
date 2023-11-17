import { useEffect, useState } from "react";
import useMenu from "./useMenu";


const useCategory = ({ category }) => {
    const menus = useMenu();
    const [items, setitems] = useState([])
    useEffect(() => {
        const categorys = menus.filter(item => item.category === category);
        setitems(categorys)

    }, [category,menus])
    return items
};

export default useCategory;