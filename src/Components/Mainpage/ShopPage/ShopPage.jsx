import { Helmet } from "react-helmet-async";
import MenuBannar from "../MenuItem/MenuBannar";
import menu from "./../../../assets/assets/menu/soup-bg.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCards from "./ShopCards";


const ShopPage = () => {

    return (
        <div>
            <Helmet>
                <title>Bisto boss|shop</title>
            </Helmet>
            <MenuBannar pic={menu} name="OUR MENU" dec="Would you like to try a dish?"></MenuBannar>
            <div className="py-10 text-center">
                <Tabs>
                    <TabList className="uppercase font-bold text-sky-600">
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>Drnks</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>soup</Tab>
                        <Tab>offered</Tab>
                    </TabList>

                    <TabPanel>
                       <ShopCards category="salad"></ShopCards>
                    </TabPanel>
                    <TabPanel>
                       <ShopCards category="pizza"></ShopCards>
                    </TabPanel>
                    <TabPanel>
                       <ShopCards category="drinks"></ShopCards>
                    </TabPanel>
                    <TabPanel>
                       <ShopCards category="dessert"></ShopCards>
                    </TabPanel>
                    <TabPanel>
                       <ShopCards category="soup"></ShopCards>
                    </TabPanel>
                    <TabPanel>
                       <ShopCards category="offered"></ShopCards>
                    </TabPanel>
                    
                    
                </Tabs>
            </div>
        </div>
    );
};

export default ShopPage;