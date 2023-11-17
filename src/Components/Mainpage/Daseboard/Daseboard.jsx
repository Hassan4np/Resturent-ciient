import { Link, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaAd, FaCalendar, FaHome, FaList, FaPhoenixFramework, FaRegMinusSquare, FaShopify, FaTelegram } from 'react-icons/fa';
import useAdmin from "../Hooks/useAdmin";

const Daseboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-[800px] bg-orange-400">
                {
                    isAdmin ? <>
                        <ul className="menu p-5">
                            <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/daseboard/user"><AiOutlineShoppingCart></AiOutlineShoppingCart>AdminHome</Link></li>
                        </ul>
                        <ul className="menu p-5">
                            <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/daseboard/additem"><FaCalendar></FaCalendar>Add Item</Link></li>
                        </ul>
                        <ul className="menu p-5">
                            <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/daseboard/list"><FaCalendar></FaCalendar>Manage Item</Link></li>
                        </ul>
                        <ul className="menu p-5">
                            <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/daseboard/cart"><FaAd></FaAd>Manage Booking</Link></li>
                        </ul>
                        <ul className="menu p-5">
                            <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/daseboard/users"><FaList></FaList>All users</Link></li>
                        </ul>
                    </> : <>
                        <ul className="menu p-5">
                            <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/daseboard/user"><AiOutlineShoppingCart></AiOutlineShoppingCart>UserHome</Link></li>
                        </ul>
                        <ul className="menu p-5">
                            <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/daseboard/list"><FaCalendar></FaCalendar>Manage list</Link></li>
                        </ul>
                        <ul className="menu p-5">
                            <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/daseboard/cart"><FaAd></FaAd>My Cart</Link></li>
                        </ul>
                        <ul className="menu p-5">
                            <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/daseboard/item"><FaList></FaList>Add item</Link></li>
                        </ul>
                    </>
                }
                <div className="divider divider-horizontal border-b-4 w-3/4"></div>
                <ul className="menu p-5">
                    <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/"><FaHome></FaHome>Home</Link></li>
                </ul>

                <ul className="menu p-5">
                    <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/menu"><FaRegMinusSquare></FaRegMinusSquare>Menu</Link></li>
                </ul>
                <ul className="menu p-5">
                    <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/shop"><FaShopify></FaShopify> Shop</Link></li>
                </ul>
                <ul className="menu p-5">
                    <li className=" border bg-green-500 rounded-md  text-2xl"><Link to="/content"><FaTelegram></FaTelegram> Contact</Link></li>
                </ul>


            </div>
            <div className="flex-1">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Daseboard;