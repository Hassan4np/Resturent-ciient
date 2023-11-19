import { useState } from "react";
import { useEffect } from "react"
import p3 from "../../../assets/assets/home/03.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Feedback = () => {
    const [menus, setmenus] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setmenus(data)
            })
    }, [])
    return (
        <div className="mt-10 mb-10">
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    menus.map(item => <SwiperSlide className="px-16" key={item._id}>
                        <div className="text-center">
                           <div className="flex justify-center ">
                           <Rating className=""
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                // onChange={setRating}
                            />
                           </div>
                            <p className="text-enter">{item.details}</p>
                            <h5 className="text-center">{item.name}</h5>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Feedback;