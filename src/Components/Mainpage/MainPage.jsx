import { Outlet, useLocation } from "react-router-dom";
import Navber from "./Global/Navber";
import Footer from "./Global/footer";


const MainPage = () => {
    const loc = useLocation();
    const nohedaefooter = loc.pathname.includes('/login') ||  loc.pathname.includes('/signup')
    return (
        <div>
           {
            nohedaefooter ||  <Navber></Navber>
           }
            <Outlet></Outlet>
           {/* {nohedaefooter ||  <Footer></Footer>} */}
        </div>
    );
};

export default MainPage;