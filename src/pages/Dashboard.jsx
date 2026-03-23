import React from 'react'
import Nav from '../components/Nav'
import { FaArrowRight, FaUserLarge } from 'react-icons/fa6'
import { MdOutlineForwardToInbox } from 'react-icons/md'
import { IoMdHeart } from 'react-icons/io'
import { GiDoorRingHandle } from 'react-icons/gi'
import { HiStar } from 'react-icons/hi'
import Footer from '../components/Footer'

const Dashboard = () => {
    return (
        <>
            <Nav active={1} />
            <main className='dashboard__main'>
                <section className='w-full flex flex-col lg:flex-row items-center gap-4'>
                    <div className='dashboard__new__match'>
                        <h1 className='text-white text-xl font-semibold mt-5'>New match profile</h1>
                        <p className='text-xs text-white mt-1'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>

                        <div className='mt-10'>
                            <div className='badge gray-badge'>NEW MATCH</div>
                            <h1 className='text-white text-3xl mt-2 font-bold'>Jhane Doe, 24</h1>
                            <p className='text-xs text-white my-2 w-[70%]'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.
                            </p>
                            <button className='text-white rounded-full px-5 py-1.5 viewnow__btn text-[13px] cursor-pointer mt-3'>
                                View Now <FaArrowRight className="inline ml-1" />
                            </button>
                        </div>
                    </div>
                    <div className='dashboard__admin__choice'>
                        <div>
                            <h1 className='text-white text-xl font-semibold mt-5'>
                                Admin's Choice
                            </h1>
                            <p className='text-xs text-white mt-1'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.
                            </p>
                        </div>
                        <button className='bg-white w-full rounded-full text-xs p-2.5 cursor-pointer uppercase'>
                            Read Story
                        </button>
                    </div>
                </section>

                {/* Navigation */}
                <section className='w-full items-center gap-4 mt-10'>
                    <h1 className='text-xl font-semibold my-2'>Navigations</h1>
                    <div className="navigation mt-4">
                        <div className='navigation__menu'>
                            <FaUserLarge />
                            <p>My Profile</p>
                        </div>
                        <div className='navigation__menu'>
                            <MdOutlineForwardToInbox />
                            <p>Inbox</p>
                        </div>
                        <div className='navigation__menu'>
                            <IoMdHeart />
                            <p>Matches</p>
                        </div>
                        <div className='navigation__menu'>
                            <HiStar />
                            <p>Interest</p>
                        </div>
                        <div className='navigation__menu'>
                            <GiDoorRingHandle />
                            <p>Connection</p>
                        </div>
                        <div className='navigation__menu'>
                            <FaUserLarge />
                            <p>Gallery</p>
                        </div>
                    </div>
                    <div className="recent__activity">

                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Dashboard