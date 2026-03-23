import React from 'react'
import { Link } from 'react-router-dom'

const LoginNav = () => {
    return (
        <nav className='w-full px-10 h-15 flex items-center justify-between sticky top-0'>
            <img src="/matchme-logo.png" alt="logo" className='h-[40px]'/>

            <div className='flex items-center gap-4 text-xs'>
                <Link>About</Link>
                <Link>Help</Link>
                <Link className='underline text-red-500 font-bold'>Sign Up</Link>
            </div>
        </nav>
    )
}

export default LoginNav