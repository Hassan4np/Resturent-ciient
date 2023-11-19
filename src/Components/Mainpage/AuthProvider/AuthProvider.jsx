import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import useAxousPublic, { axiospublic } from "../Hooks/useAxousPublic";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);


//constext ------>
export const AuthContext = createContext(null);

//mainProjcet---------->
const AuthProvider = ({ children }) => {
    const axospublic = useAxousPublic()
    const [user, setuser] = useState({});
    const [loading, setloading] = useState(true)

    //Usersignup----------->
    const UserSignup = (email, password) => {
        // setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //UserLOgin----------->
    const UserLogin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //google login--------------->
    const UserGoogleLogin = () => {
        return signInWithPopup(auth, provider);
    }
    // Auth state change------------>
    useEffect(() => {
        onAuthStateChanged(auth, (current) => {
            setuser(current)
            if (current) {
                const userinfo = { email: current?.email }
                axospublic.post('jwt', userinfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            } else {
                //todo
                localStorage.removeItem('access-token')
            }
            setloading(false)

        })
    }, [])
    // console.log(user)
    //UserLogout------->
    const UserLogout = () => {
        setloading(true)
        return signOut(auth);
    }

    const Authinfo = {
        UserLogin,
        UserLogout,
        UserSignup,
        user,
        loading,
        UserGoogleLogin,
    }
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;