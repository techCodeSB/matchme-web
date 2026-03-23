import React from 'react'

const PersonalInfo1 = ({next}) => {


    return (
        <div className='w-[80%] flex justify-center gap-8 overflow-hidden p-4 animate-slide-in'>
            <div>
                <div className='hidden lg:flex side__bg'>
                </div>
                <h1 className='text-xl text-gray-600 font-bold mt-2'>Tell us about you.</h1>
                <p className='text-xs text-gray-400'>Let's build the foundation of your curated</p>
                <p className='text-xs text-gray-400'>experience</p>
            </div>
            <div className='w-[40%] flex flex-col gap-4 bg-white rounded-2xl shadow-2xl p-8'>
                <h1 className='reg__title'>Personal Details</h1>

                <div className='input__field mt-3'>
                    <p>Full Name</p>
                    <input type="text"
                        placeholder='Enter Your Fullname'
                    />
                </div>
                <div className='input__field'>
                    <p>Nick Name</p>
                    <input type="text"
                        placeholder='Enter Your Nickname'
                    />
                </div>
                <div className='input__field'>
                    <p>Gender Identity</p>
                    <select>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className='input__field'>
                    <p>Date of Birth</p>
                    <div className='w-full flex items-center gap-4'>
                        <select>
                            <option value="">Day</option>
                            {
                                Array.from({ length: 31 }, (n, i) => {
                                    return <option key={n} value={i}>{i + 1}</option>
                                })
                            }
                        </select>
                        <select>
                            <option value="">Month</option>
                            {
                                Array.from({ length: 12 }, (n, i) => {
                                    return <option key={n} value={i}>{i + 1}</option>
                                })
                            }
                        </select>
                        <select>
                            <option value="">Year</option>
                            {
                                Array.from({ length: 2024 - 1989 + 1 }, (_, i) => {
                                    const year = 1989 + i;
                                    return (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='input__field'>
                    <p>Date of Time</p>
                    <div className='w-full flex items-center gap-4'>
                        <select>
                            <option value="">Hour</option>
                            {
                                Array.from({ length: 12 }, (n, i) => {
                                    return <option key={n}>{i + 1}</option>
                                })
                            }
                        </select>
                        <select>
                            <option value="">Minute</option>
                            {
                                Array.from({ length: 60 }, (n, i) => {
                                    return <option key={n}>{i + 1}</option>
                                })
                            }
                        </select>
                        <select>
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                        </select>
                    </div>
                </div>
                <div className='input__field'>
                    <p>Place of Birth</p>
                    <input type="text"
                        placeholder='Enter Your Place of Birth'
                    />
                </div>
                <button className='grad__btn mt-5' onClick={next}>
                    Continue
                </button>
            </div>
        </div>
    )
}

export default PersonalInfo1