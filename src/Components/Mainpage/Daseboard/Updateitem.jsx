import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import MainText from "../Global/MainText";
import { useForm } from "react-hook-form";
import { FaUtensilSpoon } from "react-icons/fa";
import useAxousPublic from "../Hooks/useAxousPublic";
import useAxousSecret from "../Hooks/useAxousSecret";
import Swal from "sweetalert2";


/// img bbb section--------->
const img_hosting_key = 'b877f7b6b89626ad96ae8c7d071095de'
// const image_hosting_key= import.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`

//update section-------->
const Updateitem = () => {
    const {name,category,price,recipe} = useLoaderData();
const navigate = useNavigate()
    const {id} = useParams()
 
    const { register, handleSubmit, reset } = useForm();
    const axouspublic = useAxousPublic();
    const axioussecret = useAxousSecret();
    const onSubmit = async (data) => {
        console.log(data)
        const imgfile = { image: data.image[0] };
        const res = await axouspublic.post(img_hosting_api, imgfile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)
        if (res.data.success) {
            const menuitem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res?.data?.data?.display_url,
            }
            const menures = await axioussecret.patch(`/bistoboss/${id}`, menuitem);
            console.log(menures.data)
            if(menures.data.modifiedCount>0){
                reset()
                //todo
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Item update Successfully ',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/daseboard/manage')
            }

        }
    }
    return (
        <div>
           <MainText text="Update item" time=" what is" ></MainText>
           <div className="px-10" >
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipi Name</span>
                        </label>
                        <input type="text" defaultValue={name} {...register("name", { required: true })} placeholder="Peceri Name" className="input input-bordered w-full" />

                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recipi Name</span>
                            </label>
                            <select defaultValue={category}
                                {...register('category', { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="default">select category</option>
                                <option>dessert</option>
                                <option>salad</option>
                                <option>drinks</option>
                                <option>pizza</option>
                                <option>soup</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recipi Name</span>
                            </label>
                            <input type="text" defaultValue={price} {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea defaultValue={recipe} {...register('recipe')} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control w-full mt-3">

                        <input type="file"  {...register('image', { required: true })} className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-success mt-3">Add item <FaUtensilSpoon></FaUtensilSpoon></button>
                </form>
            </div>

        </div>
    );
};

export default Updateitem;