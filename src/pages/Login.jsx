import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import LoginNav from "../components/LoginNav";
import { Link } from "react-router-dom";


const Login = () => {
    const [data, setData] = useState({ username: "", password: "" });


    const submitData = async (e) => {
        e.preventDefault();

        console.log("login...")

    }

    return (
        <>
            <LoginNav />
            <main className='login_main'>
                <div className='flex items-stretch w-[90%] lg:w-[70%] bg-white shadow-lg rounded-3xl overflow-hidden'>
                    {/* Image */}
                    <div className='hidden lg:flex login_side__bg'>
                        <h1>Find the one</h1>
                        <h1>Who speaks to your soul.</h1>
                        <p className='mt-2'>An editorial approch to Connection, curated for those who</p>
                        <p>value depth.</p>
                    </div>
                    {/* Login form */}
                    <div className='w-full p-10 lg:px-20'>
                        <h1 className='text-2xl font-bold'>Welcome Back</h1>
                        <p className='text-gray-500 text-xs'>Enter your details to continue your journey.</p>

                        <form onSubmit={(e) => submitData(e)} className='mt-8'>
                            <div className='input__field'>
                                <p>Username</p>
                                <input type="text"
                                    placeholder='Enter Username'
                                    value={data.username}
                                    onChange={(e) => setData({ ...data, username: e.target.value })}
                                />
                            </div>
                            <div className='input__field mt-4'>
                                <p>Password</p>
                                <input type="password"
                                    placeholder='Enter Password'
                                    value={data.password}
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                />
                            </div>
                            <button className='grad__btn mt-5'>
                                Sign In
                                <FaArrowRight className="inline ml-1" />
                            </button>
                        </form>
                        <p className='mt-5 text-slate-500 text-xs text-center font-semibold'>
                            New to Matchme? <Link to="/signup" className="underline">Create an account</Link>
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login