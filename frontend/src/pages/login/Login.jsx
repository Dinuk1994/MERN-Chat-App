import { useState } from "react";
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";


const Login = () => {

    const[userName ,setUserName] = useState("");
    const[password ,setPassword] = useState("");
    const{loading,login} = useLogin()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await login(userName,password)
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full w-full bg-green-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-5 shadow-lg shadow-gray-600 p-6">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Login
                    <span className="text-sky-700 font-semibold font-serif ml-3">CHATZ</span>
                </h1>
                <form className="mt-6" action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="" className="p-2">
                            <span className="text-white label-text ">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="input bg-gray-600 text-white mt-2 input-bordered w-full h-10 max-w-xs" 
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="p-2">
                            <span className="text-white label-text ">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="input bg-gray-600 text-white mt-2 input-bordered w-full h-10 max-w-xs" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/signup" className="p-2 text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block">
                        {"Don't"} have an account?
                    </Link>
                    <div className="p-2 mr-2">
                        <button className="btn scroll mr-7 btn-block btn-sm text-white h-8 bg-cyan-500 hover:bg-cyan-700 "
                        disabled={loading}
                        > {loading ? <span className="loadin loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login