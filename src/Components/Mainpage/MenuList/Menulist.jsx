import { useState } from "react";
import { useEffect } from "react"

const Menulist = () => {
    const [menus, setmenus] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const  propler = data.filter(item=>item.category==="popular")
                setmenus(propler)
                // console.log(data)
             
            })
    }, [])
    return (
        <div className="mb-10">
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 ">
                {
                    menus.map(item => <div key={item._id} className="flex max-w-screen-xl mx-auto p-5 mb-5 ">
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
            <div className="text-center border-b-4 w-2/12 lg:w-1/12 mx-auto -mt-8 ">
                <button className="text-center text-xl font-bold">View All</button>
            </div>
        </div>

    );
};

export default Menulist;