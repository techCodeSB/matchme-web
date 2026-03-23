import { Link } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";


const Nav = ({ active }) => {
    return (
        <nav className='w-full h-12 flex items-center bg-white shadow sticky top-0 z-90'>
            <div className='w-[90%] lg:w-[70%] mx-auto flex items-center justify-between'>
                <div>
                    <img src="/matchme-logo.png" alt="logo" className='h-[30px]' />
                </div>
                <div className='items-center gap-8 text-[13px] hidden lg:flex'>
                    <Link to={"/"} className={`nav__link ${active === 1 ? 'active' : ''}`}>Discover</Link>
                    <Link to={"/"} className={`nav__link ${active === 2 ? 'active' : ''}`}>Messages</Link>
                    <Link to={"/"} className={`nav__link ${active === 3 ? 'active' : ''}`}>My Profile</Link>
                </div>
                <div>
                    <div>
                        <FaCircleUser size={30} color='lightgrey' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav