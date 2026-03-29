import { Link, useNavigate } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";
import Cookies from 'js-cookie';


const Nav = ({ active }) => {
    const navigate = useNavigate();


    const logout=()=>{
        Cookies.remove("mm-token");
        navigate("/login");
    }

    return (
        <nav className='w-full h-12 flex items-center bg-white shadow sticky top-0 z-90'>
            <div className='w-[90%] lg:w-[70%] mx-auto flex items-center justify-between'>
                <div>
                    <img src="/matchme-logo.png" alt="logo" className='h-[40px]' />
                </div>
                <div className='items-center gap-8 text-[13px] hidden lg:flex'>
                    <Link to={"/"} className={`nav__link ${active === 1 ? 'active' : ''}`}>
                        My Profile
                    </Link>
                    <Link to={"/edit-profile"} className={`nav__link ${active === 2 ? 'active' : ''}`}>
                        Edit Profile
                    </Link>
                    <Link to={"/"} className={`nav__link ${active === 3 ? 'active' : ''}`}>
                        Psychometric Test
                    </Link>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='logout__btn' onClick={logout}>
                        Logout
                    </button>
                    <div>
                        <FaCircleUser size={30} color='lightgrey' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav