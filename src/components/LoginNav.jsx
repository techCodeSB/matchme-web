import { Link } from 'react-router-dom';

const LoginNav = ({ register }) => {
    return (
        <nav className='w-full flex items-center sticky top-0 z-90 shadow bg-white'>
            <div className='w-full lg:w-[70%] mx-auto px-4 lg:px-10 h-12 flex items-center justify-between '>
                <img src="/matchme-logo.png" alt="logo" className='h-[30px]' />

                <div className='flex items-center gap-8 text-xs'>
                    <a href='https://www.matchmeglobal.com/about' target='_blank' className='hover:underline'>About</a>
                    <a href='https://www.matchmeglobal.com/contact' target='_blank' className='hover:underline'>Help</a>
                    {!register && <Link className='underline text-red-500 font-bold' to={"/signup"}>Sign Up</Link>}
                </div>
            </div>
        </nav>
    )
}

export default LoginNav;