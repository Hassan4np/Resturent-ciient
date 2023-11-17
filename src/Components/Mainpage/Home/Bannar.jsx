
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import p1 from "../../../assets/assets/home/01.jpg"
import p2 from "../../../assets/assets/home/02.jpg"
import p3 from "../../../assets/assets/home/03.png"
import p4 from "../../../assets/assets/home/04.jpg"

const Bannar = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={p1} />
                </div>
                <div>
                    <img src={p4} />
                </div>
                <div>
                <img src={p2} />
                </div>
                <div>
                <img src={p3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Bannar;