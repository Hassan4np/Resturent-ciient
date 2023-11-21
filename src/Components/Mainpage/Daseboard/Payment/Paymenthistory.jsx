import { useQuery } from "react-query";
import useAuth from "../../Hooks/useAuth";
import useAxousSecret from "../../Hooks/useAxousSecret";


const Paymenthistory = () => {
    const { user } = useAuth();
    const axiossecret = useAxousSecret();
    const { data: paymets=[] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiossecret.get(`/payments/${user.email}`)
            return res.data
        }

    })
    console.log(paymets)
    return (
        <div className="px-10">
            <h1>{paymets.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Tnx Id</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        paymets.map((item,idx)=> <tr key={idx}>
                            <th>{idx+1}</th>
                            <td>{item.price}</td>
                            <td>{item.transactionId}</td>
                            <td>{item.status}</td>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Paymenthistory;