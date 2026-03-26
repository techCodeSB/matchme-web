import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import LoginNav from "../components/LoginNav";
import Loading from "../components/Loading";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [resErr, setResErr] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({ username: "", password: "" });



    useEffect(() => {
        const timer = setTimeout(() => {
            setResErr(null);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [resErr]);

    const submitData = async (e) => {
        e.preventDefault();
        const newErrors = {};

        Object.keys(data).map((k, i) => {
            if (data[k] === "") {
                newErrors[k] = true;
                return;
            }
        })
        setError((prev) => ({
            ...prev,
            ...newErrors
        }));
        if (Object.keys(newErrors).length > 0) return;



        try {
            setLoading(true);
            const URL = `${import.meta.env.VITE_API_URL}/users/login`;
            const req = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userid: data.username,
                    pass: data.password
                })
            })
            const res = await req.json();

            if(req.status !== 200){
                setResErr(res.err);
                return;
            }

            Cookies.set("mm-token", res.token);
            navigate("/");

        } catch (err) {
            setResErr("Something went wrong");
            return;
        }finally{
            setLoading(false);
        }
    }

    return (
        <>
            <LoginNav />
            <main className='main'>
                <div className='flex items-stretch w-[90%] lg:w-[65%] bg-white shadow-lg rounded-3xl overflow-hidden'>
                    {/* Image */}
                    <div className='hidden lg:flex login_side__bg'>
                        <h1>Find the one</h1>
                        <h1>Who speaks to your soul.</h1>
                        <p className='mt-2'>An editorial approch to Connection, curated for those who</p>
                        <p>value depth.</p>
                    </div>
                    {/* Login form */}
                    <div className='w-full p-7 '>
                        <h1 className='text-2xl font-bold'>Welcome Back</h1>
                        <p className='text-gray-500 text-xs'>Enter your details to continue your journey.</p>

                        <form onSubmit={(e) => submitData(e)} className='mt-8'>
                            {
                                resErr && (
                                    <div className="res__error animate__animated animate__bounceIn">
                                        {resErr}<span>Error</span>
                                    </div>
                                )
                            }
                            <div className='input__field'>
                                <p>Username</p>
                                <input type="text"
                                    placeholder='Enter Username'
                                    value={data.username}
                                    onChange={(e) => {
                                        setData({ ...data, username: e.target.value });
                                        setError({ ...error, username: false });
                                    }}
                                />
                                {error.username && <span className='error__text'>This field is required</span>}
                            </div>
                            <div className='input__field mt-4'>
                                <p>Password</p>
                                <input type="password"
                                    placeholder='Enter Password'
                                    value={data.password}
                                    onChange={(e) => {
                                        setData({ ...data, password: e.target.value });
                                        setError({ ...error, password: false });
                                    }}
                                />
                                {error.password && <span className='error__text'>This field is required</span>}
                            </div>
                            <button className='grad__btn mt-5'>
                                Sign In
                                {!loading && <FaArrowRight className="inline ml-1" />}
                                {loading && <Loading />}
                            </button>
                        </form>
                        {/* <p className='mt-5 text-slate-500 text-xs text-center font-semibold'>
                            New to Matchme? <Link to="/signup" className="underline">Create an account</Link>
                        </p> */}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login