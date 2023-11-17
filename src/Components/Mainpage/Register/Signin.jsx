import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from "../Hooks/useAuth";
import useAxousPublic from "../Hooks/useAxousPublic";


const Signin = () => {
    const { UserLogin,UserGoogleLogin } = useAuth()
    const [disable, setdisable] = useState(true);
    const [error, seterror] = useState("");
    const Axospublic = useAxousPublic();
    const navigate = useNavigate();
    const loc = useLocation()
    const from = loc.state?.from?.pathname || "/"

    const hendlesigin = (e) => {

        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        UserLogin(email, password)
            .then((result) => {
                const loggedinUpser = result.user;
                console.log(loggedinUpser)
              navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error.message)
                seterror(error.message)
                return;
            })
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const hendlecapcha = (e) => {
        const Capcha = e.target.value;
        console.log(Capcha)
        if (validateCaptcha(Capcha)) {
            setdisable(false)
        } else {
            setdisable(true)
        }
    }
    const hendleGoogleLogin = () => {
        UserGoogleLogin()
            .then((result) => {
                console.log(result.user);
                const userinfo = {
                    email: result?.user?.email,
                    name:result?.user?.displayName,
                }
                Axospublic.post("/users",userinfo)
                .then(res=>{
                    console.log(res.data)
                    navigate(loc?.state ? loc.state:"/");
                })          
            })
            .catch(error => {
                console.log(error.message)
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
                        <form className="card-body" onSubmit={hendlesigin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={hendlecapcha} placeholder="write above" name="capcha" className="input input-bordered" required />

                                <label className="label">
                                    <p href="#" className="label-text-alt ">All Ready Account <Link to="/signup" className="text-green-600">Signup</Link></p>
                                </label>
                                <label className="label">
                                    <p href="#" className="label-text-alt text-red-600 ">Error</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" disabled={disable} className="btn btn-success" value="Login" />
                            </div>
                        </form>
                     <div className="text-center mb-5 px-10 ">   <button className="btn w-full  btn-success" onClick={hendleGoogleLogin}>google</button></div>
                    </div>
                    
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;