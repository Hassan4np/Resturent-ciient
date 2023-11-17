
import MainText from "../Global/MainText";
import menu1 from "./../../../assets/assets/menu/banner3.jpg"
import menu2 from "./../../../assets/assets/menu/dessert-bg.jpeg"
import menu3 from "./../../../assets/assets/menu/pizza-bg.jpg"
import menu4 from "./../../../assets/assets/menu/salad-bg.jpg"
import Categoryitem from "./Categoryitem";
import { Helmet} from 'react-helmet-async';
import MenuBannar from "./MenuBannar";

const MenuPage = () => {

    return (
        <div>
             <Helmet>
                <title>Bisto boss | menu</title>
            </Helmet>
            <MenuBannar pic={menu1} name="OUR MENU" dec="Would you like to try a dish?"></MenuBannar>
            <div>
                <MainText time="---Don't miss---" text="TODAY'S OFFER" ></MainText>
                <Categoryitem category="pizza" bttn="ORDER FOOD"></Categoryitem>
            </div>
            <div>
            <MenuBannar pic={menu2} name="Dessert" dec="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuBannar>
                <Categoryitem category="dessert" bttn="ORDER FOOD"></Categoryitem>
            </div>
            <div>
            <MenuBannar pic={menu3} name="salad" dec="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuBannar>
                <Categoryitem category="salad" bttn="ORDER FOOD"></Categoryitem>
            </div>
            <div>
            <MenuBannar pic={menu4} name="offered" dec="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuBannar>
                <Categoryitem category="offered" bttn="ORDER FOOD"></Categoryitem>
            </div>


        </div>
    );
};

export default MenuPage;