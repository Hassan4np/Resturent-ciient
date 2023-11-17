import { useEffect, useState } from "react";
import useMenu from "../Hooks/useMenu";


const Categoryitem = ({ category, bttn }) => {
    const menus = useMenu();
    const [menu, setmenus] = useState([]);
    console.log(category)


    useEffect(() => {
        const propler = menus.filter(item => item.category === category);
        setmenus(propler)


    }, [menus])
    return (
        <div className="mb-10">
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 ">
                {
                    menu?.map(item => <div key={item._id} className="flex max-w-screen-xl mx-auto p-5 mb-5 ">
                        <img className="w-[100px] mr-2" style={{ borderRadius: '0px 200px 200px 200px' }} src={item.image} alt="" />
                        <div className="flex ml-4">
                            <div>
                                <h1 className="text-base font-bold">{item.name}</h1>
                                <p className="text-base">{item.recipe}</p>
                            </div>
                            <h5 className="font-medium">{item.price}$</h5>
                        </div>
                    </div>)
                }

            </div>
            <div className="text-center border-b-4 w-4/12 lg:w-2/12 mx-auto -mt-8 ">
                <button className="text-center uppercase text-base font-bold">{bttn}</button>
            </div>
        </div>
    );
};

export default Categoryitem;