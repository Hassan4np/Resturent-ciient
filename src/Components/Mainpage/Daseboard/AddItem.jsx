import { useForm } from "react-hook-form";
import MainText from "../Global/MainText";
import { FaUtensilSpoon } from "react-icons/fa";
import useAxousPublic from "../Hooks/useAxousPublic";
import useAxousSecret from "../Hooks/useAxousSecret";
import Swal from "sweetalert2";
// require("dotenv").config();

const img_hosting_key = 'b877f7b6b89626ad96ae8c7d071095de'
// const image_hosting_key= import.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const AddItem = () => {
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
                image: res.data.display_url
            }
            const menures = await axioussecret.post('/bistoboss', menuitem);
            console.log(menures.data)
            if(menures.data.insertedId){
                reset()
                //todo
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Item add Successfully ',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        }
    }
    return (
        <div>
            <MainText text="Add item" time="what is now"></MainText>
            <div className="px-10" >
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipi Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Peceri Name" className="input input-bordered w-full" />

                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recipi Name</span>
                            </label>
                            <select defaultValue="default"
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
                            <input type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control w-full mt-3">

                        <input type="file" {...register('image', { required: true })} className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-success mt-3">Add item <FaUtensilSpoon></FaUtensilSpoon></button>
                </form>
            </div>

        </div>
    );
};

export default AddItem;