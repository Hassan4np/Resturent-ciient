// import { useQuery } from "react-query";
// import useAuth from "../Hooks/useAuth";
// import useAxousSecret from "../Hooks/useAxousSecret";

import { useQuery } from "react-query";
import useAxousSecret from "../Hooks/useAxousSecret";
import { MdDelete, } from 'react-icons/md';
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axioussecret = useAxousSecret();

    const { data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
       const res =  await  axioussecret.get(`/users`)
            return res.data
        }
    })
    const hendledelete = (id) => {
        console.log(id)
        axioussecret.delete(`users/${id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.acknowledged){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your user delete ',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  refetch()
            }
        })
        .then(error=>{
        console.log(error)
        })
    }
    const hendlemakeuser=(user)=>{
        axioussecret.patch(`/users/admin/${user?._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${user?.name} Now admin `,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=" text-[#D1A054] text-2xl font-bold">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                {
                                    user.role==="admin" ? "Admin":<td><button onClick={()=>hendlemakeuser(user)}><FaUsers className="text-2xl text-white rounded-md bg-[#D1A054]"></FaUsers></button></td>
                                }
                                <td><button onClick={() => hendledelete(user._id)}><MdDelete className="text-2xl text-white rounded-md bg-red-500"></MdDelete></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;