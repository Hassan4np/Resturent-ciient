import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useCategory from "../Hooks/useCategory";
import { useNavigate } from "react-router-dom";
import useAxousSecret from "../Hooks/useAxousSecret";
import useQuarys from "../Hooks/useQuarys";


const ShopCards = ({ category }) => {
    const [,refetch] = useQuarys();
    const axiossecret = useAxousSecret()
    const items = useCategory({ category });
    console.log(items)
console.log(axiossecret)
    const navigate = useNavigate()
    const { user } = useAuth()
    const hengleCard = (item) => {
        if (user && user.email) {
            const cardsitem = {
                itemid : item?._id,
                email: user?.email,
                name:item.name,
                img:item.image,
                price:item.price
            }
            axiossecret.post('/cards',cardsitem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name}has been saved`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
                

            })
            //to do
        } else {
            Swal.fire({
                title: "Place login and add to card?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                    Swal.fire({
                        title: "Login pege",
                        text: "Readict login page",
                        icon: "success"
                    });
                }
            });
        }
        console.log(item)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                items?.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                    <div className="relative">
                        <figure className="px-10 pt-10">
                            <img src={item.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <p className="absolute top-10 right-16 font-bold">{item.price}$</p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.name}</h2>
                        <p className="">{item.recipe}</p>
                        <div className="card-actions">
                            <button onClick={() => hengleCard(item)} className="btn uppercase border-b-gray-950  ">add to card</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ShopCards;