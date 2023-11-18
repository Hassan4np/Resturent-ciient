import { MdDelete } from "react-icons/md";
import MainText from "../Global/MainText";
import useMenu from "../Hooks/useMenu";
import { FaEdit, FaUpload, FaUsers } from "react-icons/fa";
import useAxousSecret from "../Hooks/useAxousSecret";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Manageitem = () => {
    const [menus,refetch] = useMenu();

    const axioussecret = useAxousSecret()
    console.log(menus)

    const hendledelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axioussecret.delete(`/bistoboss/${item?._id}`)
                console.log(res.data)
                if(res.data.deletedCount>0){
                    refetch()
                  Swal.fire({
                    title: "Deleted!",
                    text: `${item.name} has been deleted.`,
                    icon: "success"
                  });
            }
                }
        });
        //todo
    }

    return (
        <div>
            <MainText text="Manage item" time=" what is"></MainText>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className=" text-[#D1A054] text-2xl font-bold">
                                <th>#</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>price</th>
                                <th>update</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menus?.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <th><img className="w-[80px] h-[50px]" src={user?.image} alt="" /></th>

                                    <td>{user?.name}</td>
                                    <td>{user?.price}$</td>
                                    
                                    <Link to={`/daseboard/update/${user._id}`}> <td><button ><FaEdit className="text-2xl text-white rounded-md bg-[#D1A054]"></FaEdit></button></td></Link>
                                    
                                    <td><button onClick={() => hendledelete(user)}><MdDelete className="text-2xl text-white rounded-md bg-red-500"></MdDelete></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manageitem;