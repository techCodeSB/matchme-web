import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full flex items-center text-xs bg-[#F4F3F2] py-10 mt-10'>
        <div className='w-[90%] lg:w-[70%] mx-auto flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 items-center justify-between'>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved. MATCHME</p>

            <div className='flex items-center gap-4'>
                <a href="https://www.matchmeglobal.com/contact" target='_blank' className='hover:underline'>
                    Contact Us
                </a>
                <a href="https://www.matchmeglobal.com/privacy-policy" target='_blank' className='hover:underline'>
                    Privacy Policy
                </a>
                <a href="https://www.matchmeglobal.com/terms-and-conditions" target='_blank' className='hover:underline'>
                    Terms & Conditions
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer