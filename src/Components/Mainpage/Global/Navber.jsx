import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useQuarys from "../Hooks/useQuarys";


const Navber = () => {
    const [cards] = useQuarys();
    console.log(cards.length)
    const { user, UserLogout } = useAuth()
    const userlogout = () => {
        UserLogout()
            .then({})
            .then(error => {
                console.log(error)
            })
    }
    const navbarmenu = <>
        <Link to="/" className="mr-2" > <button className="btn btn-sm"><li><a>Home</a></li></button></Link>
        <Link to="/menu" className="mr-2"><button className="btn btn-sm"><li><a>menu</a></li></button></Link>
        <Link to="/shop" className="mr-2"><button className="btn btn-sm"><li><a>Shop</a></li></button></Link>
        <Link to="daseboard/cart" className="mr-2">
            <button className="btn">
                cart
                <div className="badge text-red-600 text-xl"><AiOutlineShoppingCart className="text-2xl text-green-600"></AiOutlineShoppingCart>+{cards.length}</div>
            </button>
        </Link>



        {
            user ? <button onClick={userlogout} className="btn btn-sm"><li><a>Logout</a></li></button> : <Link to="/login" className="mr-2"><button className="btn btn-sm"><li><a>Login</a></li></button></Link>
        }
    </>

    return (
        <div className="navbar  fixed z-10 opacity-75 max-w-screen-xl text-white bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarmenu}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbarmenu}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navber;