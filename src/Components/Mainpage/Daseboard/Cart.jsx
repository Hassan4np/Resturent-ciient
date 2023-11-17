import Swal from "sweetalert2";
import useAxousSecret from "../Hooks/useAxousSecret";
import useQuarys from "../Hooks/useQuarys";
import { MdDelete } from 'react-icons/md';

const Cart = () => {
    //hook secton-------->
    const [cards, refetch] = useQuarys();
    const axioussecret = useAxousSecret();

    //total secton-------->
    const totalprice = cards.reduce((total, item) => total + item.price, 0);

    //delete secton-------->
    const hendledelete = (id) => {
        axioussecret.delete(`/cards/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `Delete Successfully `,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                refetch();
            })

            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="flex justify-between px-10 border py-5">
                <h1 className="text-2xl text-yellow-400">My Cards: {cards.length}</h1>
                <h1 className="text-2xl text-green-500">Total: {totalprice}$</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-xl font-bold">
                            <tr>
                                <th>#</th>
                                <th>img</th>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-lg font-bold">
                            {/* row 1 */}
                            {
                                cards?.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item?.name}</td>
                                    <td>{item?.price}$</td>
                                    <th>
                                        <button onClick={() => hendledelete(item?._id)} className="btn btn-ghost btn-xs"><MdDelete className="text-2xl text-red-700"></MdDelete></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;