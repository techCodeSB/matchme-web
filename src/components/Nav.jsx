import { Link, useNavigate } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';


const Nav = ({ active }) => {
    const token = Cookies.get("mm-token");
    const navigate = useNavigate();
    const [profileImg, setProfileImg] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const URL = `${import.meta.env.VITE_API_URL}/users/get`;
                const req = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ token, fieldsArr: ['image'] })
                })
                const res = await req.json();
                if (req.status !== 200) {
                    if (token) alert(res.err);
                }
                setProfileImg(`${import.meta.env.VITE_API_URL}/users/upload/${res?.image?.one}`)

            } catch (err) {
                alert("Something went wrong");
            }

        })()
    }, [])

    const logout = () => {
        Cookies.remove("mm-token");
        navigate("/login");
    }

    return (
        <nav className='w-full h-12 flex items-center bg-white shadow sticky top-0 z-999999'>
            <div className='w-[90%] lg:w-[70%] mx-auto flex items-center justify-between'>
                <div>
                    <img src="/matchme-logo.png" alt="logo" className='h-10' />
                </div>
                <div className='items-center gap-8 text-[13px] hidden lg:flex'>
                    <Link to={"/"} className={`nav__link ${active === 1 ? 'active' : ''}`}>
                        My Profile
                    </Link>
                    <Link to={"/edit-profile"} className={`nav__link ${active === 2 ? 'active' : ''}`}>
                        Edit Profile
                    </Link>
                    <Link to={"/psychometric-test"} className={`nav__link ${active === 3 ? 'active' : ''}`}>
                        Psychometric Test
                    </Link>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='logout__btn' onClick={logout}>
                        Logout
                    </button>
                    <div className='hidden lg:block'>
                        {
                            profileImg ?
                                <img src={profileImg} 
                                    className='h-10 w-10 rounded-full border-2 border-gray-400'
                                />
                                : <FaCircleUser size={30} color='lightgrey' />
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav