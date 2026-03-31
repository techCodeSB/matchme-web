import { Link, useNavigate } from 'react-router-dom'
import { FaBrain, FaUser } from "react-icons/fa6";
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';


const BottomNav = ({ active }) => {
    const token = Cookies.get("mm-token");
    const navigate = useNavigate();
    const [psychometricDone, setPsychometricDone] = useState(false);


    useEffect(() => {
        (async () => {
            try {
                const URL = `${import.meta.env.VITE_API_URL}/users/get`;
                const req = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ token, fieldsArr: ['psychometric_test'] })
                })
                const res = await req.json();
                if (req.status !== 200) {
                    if (token) alert(res.err);
                }

                setPsychometricDone(res?.psychometric_test)

            } catch (err) {
                alert("Something went wrong");
            }

        })()
    }, [])





    return (
        <div className='lg:hidden block'>
            <br />
            <br />
            <br />
            <div className='w-full h-15 bg-white items-center shadow fixed bottom-0 left-0 z-999999 flex lg:hidden border-t border-gray-300'>
                <div className='w-[90%] lg:w-[70%] mx-auto flex items-center justify-center gap-10'>
                    <Link to={"/"} className={`nav__link ${active === 1 ? 'active' : ''}`}>
                        <div className='flex flex-col items-center gap-2'>
                            <FaUser size={20} />
                            <p className='text-xs'>Profile</p>
                        </div>
                    </Link>
                    <Link to={"/edit-profile"} className={`nav__link ${active === 2 ? 'active' : ''} ml-8`}>
                        <div className='flex flex-col items-center gap-2'>
                            <FaUserEdit size={25} />
                            <p className='text-xs'>Edit Profile</p>
                        </div>
                    </Link>
                    {
                        !psychometricDone && (
                            <Link to={"/psychometric-test"} className={`nav__link ${active === 3 ? 'active' : ''}`}>
                                <div className='flex flex-col items-center gap-2'>
                                    <FaBrain size={20} />
                                    <p className='text-xs'>Psychometric</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default BottomNav;
