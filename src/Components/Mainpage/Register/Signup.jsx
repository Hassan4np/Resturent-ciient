import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from 'react-hook-form';
import useAxousPublic from "../Hooks/useAxousPublic";


const Signup = () => {
    const loc = useLocation();
    console.log(loc)
    const navigate = useNavigate()
    const {UserSignup} = useAuth();
    const [error,seterror] = useState('');
    const Axouspublic = useAxousPublic();
    const hendlesignup=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name?.value;
        const photo = form.photo?.value;
        const email = form.email?.value;
        const password = form.password?.value;
        console.log(name,email,password,photo)
        
        UserSignup(email,password)
        .then((result)=>{
            console.log(result.user)
              updateProfile(result.user,{
                displayName:name,
                photoURL:photo,
            })
            .then(()=>{
                //some thing wrong-------------------------->
                const usersinfo = {
                    email:email,
                    name:name,
                }
                console.log(usersinfo)
                Axouspublic.post('/users',usersinfo)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.acknowledged){
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your Register Successfully ',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        navigate('/login')
                    }
                })
                .catch(error=>{
                    console.log(error)
                })
            })
           

        })
        .catch(error=>{
            seterror(error.message)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content  flex-col lg:flex-row">
                    <div className="text-center lg:text-left hidden lg:block flex-1">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in.br <br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 mt-10  w-full max-w-sm shadow-2xl bg-base-100 flex-1">
                        <form className="card-body" onSubmit={hendlesignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"  name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="photo" name="photo" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <p href="#" className="label-text-alt ">Create an Account <Link to="/login" className="text-green-600">Login</Link></p>
                                </label>
                                <label className="label">
                                    <p href="#" className="label-text-alt text-red-600 ">Error</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                               <input type="submit" className="btn btn-success" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;