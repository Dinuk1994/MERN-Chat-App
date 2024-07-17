/* eslint-disable no-unused-vars */
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../src/context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const{authUser , setAuthUser}=useAuthContext()

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender })
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/signup",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({ fullName, userName, password, confirmPassword, gender })
            })
            toast.success("Register Successful !")
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
           //localStorage
           localStorage.setItem("chat-user",JSON.stringify(data))

           //context
           setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading , signup}
}
export default useSignup


function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error('Please fill all the fields!')
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match!')
        return false
    }
    if (password.length < 6) {
        toast.error('Password must be at least 6 charactors')
        return false;
    }
    return true
}