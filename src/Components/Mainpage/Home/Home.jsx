
import Bannar from './Bannar';
import Swipers from './Swipers';
import MainText from '../Global/MainText';
import Menulist from '../MenuList/Menulist';
import Feedback from '../MenuList/Feedback';

import { Helmet} from 'react-helmet-async';


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Bisto boss | home</title>
            </Helmet>
            <Bannar></Bannar>
            <MainText time="--From 10am to 11pm--" text="ORDER ONLINE"></MainText>
            <Swipers></Swipers>
            <div>
                <MainText time="--Check it out--" text="FROM OUR MENU"></MainText>
                <Menulist></Menulist>
            </div>
            <div>
                <MainText time="---What Our Clients Say---" text="TESTIMONIALS"></MainText>
                <Feedback></Feedback>
            </div>

        </div>
    );
};

export default Home;