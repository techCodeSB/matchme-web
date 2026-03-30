import { Link, useNavigate } from 'react-router-dom'
import { FaBrain, FaCircleUser, FaUser } from "react-icons/fa6";
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';


const BottomNav = ({ active }) => {
    const token = Cookies.get("mm-token");
    const navigate = useNavigate();





    return (
        <div className='w-full h-15 bg-white items-center shadow fixed bottom-0 left-0 z-999999 flex lg:hidden border-t border-gray-300'>
            <div className='w-[90%] lg:w-[70%] mx-auto flex items-center justify-between'>
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
                <Link to={"/psychometric-test"} className={`nav__link ${active === 3 ? 'active' : ''}`}>
                    <div className='flex flex-col items-center gap-2'>
                        <FaBrain size={20} />
                        <p className='text-xs'>Psychometric</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BottomNav;
