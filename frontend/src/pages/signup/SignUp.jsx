import { Link } from "react-router-dom"
import GenderBox from "./GenderBox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    // eslint-disable-next-line no-unused-vars
    const { loading, signup } = useSignup()

    const handleCheckBox = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full w-full bg-green-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-10 shadow-lg shadow-gray-600 p-6">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
                    <span className="text-sky-700 font-semibold font-serif ml-3">CHATZ</span>
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="" className="p-2">
                            <span className="text-white label-text ">Full Name</span>
                        </label>
                        <input type="text" placeholder="Harry Potter" className="input bg-gray-600 text-white mt-2 input-bordered w-full h-10 max-w-xs"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="p-2">
                            <span className="text-white label-text ">Username</span>
                        </label>
                        <input type="text" placeholder="harrypotter" className="input bg-gray-600 text-white mt-2 input-bordered w-full h-10 max-w-xs"
                            value={inputs.userName}
                            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="p-2">
                            <span className="text-white label-text ">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="input bg-gray-600 text-white mt-2 input-bordered w-full h-10 max-w-xs"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="p-2">
                            <span className="text-white label-text ">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Re-enter password" className="input bg-gray-600 text-white mt-2 input-bordered w-full h-10 max-w-xs"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    <div className="mt-3">
                        <GenderBox onCheckBoxChange={handleCheckBox} selectedGender={inputs.gender} />
                    </div>
                    <Link to="/login" className="text-sm px-2 text-white hover:underline hover:text-blue-600  inline-block">
                        Already have an account?
                    </Link>
                    <div className="p-2  mr-2">
                        <button disabled={loading} className="btn scroll mr-7 btn-block btn-sm text-white h-8 bg-cyan-500 hover:bg-cyan-700 ">
                            {loading ? <span className="loading-spinner"></span> : "Sign Up"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SignUp