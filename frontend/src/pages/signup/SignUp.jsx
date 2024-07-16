import GenderBox from "./GenderBox"

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full w-full bg-green-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-10 shadow-lg shadow-gray-600 p-6">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
                    <span className="text-sky-700 font-semibold font-serif ml-3">CHATZ</span>
                </h1>
                <form className="mt-6" action="">
                    <div>
                        <label htmlFor="" className="p-2">
                            <span className="text-white label-text ">Full Name</span>
                        </label>
                        <input type="text" placeholder="Harry Potter" className="input bg-gray-600 text-white mt-2 input-bordered w-full h-10 max-w-xs" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="p-2">
                            <span className="text-white label-text ">Username</span>
                        </label>
                        <input type="text" placeholder="harrypotter" className="input bg-gray-600 text-white mt-2 input-bordered w-full h-10 max-w-xs" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="p-2">
                            <span className="text-white label-text ">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="input bg-gray-600 text-white mt-2 input-bordered w-full h-10 max-w-xs" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="p-2">
                            <span className="text-white label-text ">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Re-enter password" className="input bg-gray-600 text-white mt-2 input-bordered w-full h-10 max-w-xs" />
                    </div>
                    <div className="mt-3">
                        <GenderBox />
                    </div>
                    <a href="#" className="text-sm px-2 text-white hover:underline hover:text-blue-600  inline-block">
                        Already have an account?
                    </a>
                    <div className="p-2  mr-2">
                        <button className="btn scroll mr-7 btn-block btn-sm text-white h-8 bg-cyan-500 hover:bg-cyan-700 "> Sign Up</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SignUp