import React, { useState } from 'react'

const PersonalInfo1 = ({ next }) => {
    const [error, setError] = useState({});
    const [data, setData] = useState({
        fullName: '', nickName: '', gender: '', dob: '',
        timeOfBirth: '', placeOfBirth: ''
    })



    const handleContinue = async () => {
        const newErrors = {};

        Object.keys(data).map((k, i) => {
            if (data[k] === "") {
                newErrors[k] = true;
                return;
            }
        })
        setError((prev) => ({
            ...prev,
            ...newErrors
        }));
        if (Object.keys(newErrors).length > 0) return;

        try{
            next();

        }catch(err){
            return alert("Something went wrong");
        }
    }

    return (
        <div className='w-full lg:w-[80%] flex justify-center gap-8 overflow-hidden p-4 lg:p-0 animate-slide-in'>
            <div className='hidden md:block'>
                <div className='side__bg'>
                </div>
                <h1 className='text-xl text-gray-600 font-bold mt-2'>Tell us about you.</h1>
                <p className='text-xs text-gray-400'>Let's build the foundation of your curated</p>
                <p className='text-xs text-gray-400'>experience</p>
            </div>
            <div className='w-full lg:w-[40%] flex flex-col gap-4 bg-white rounded-2xl shadow-2xl p-8 mb-3'>
                <h1 className='reg__title'>Personal Details</h1>

                <div className='input__field mt-3'>
                    <p>Full Name</p>
                    <input type="text"
                        placeholder='Enter Your Fullname'
                        value={data.fullName}
                        onChange={(e) => {
                            setData({ ...data, fullName: e.target.value });
                            setError({ ...error, fullName: false });
                        }}
                    />
                    {error.fullName && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Nick Name</p>
                    <input type="text"
                        placeholder='Enter Your Nickname'
                        value={data.nickName}
                        onChange={(e) => {
                            setData({ ...data, nickName: e.target.value });
                            setError({ ...error, nickName: false });
                        }}
                    />
                    {error.nickName && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Gender Identity</p>
                    <select
                        value={data.gender}
                        onChange={(e) => {
                            setData({ ...data, gender: e.target.value });
                            setError({ ...error, gender: false });
                        }}
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {error.gender && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Date of Birth</p>
                    <input type="date"
                        value={data.dob}
                        onChange={(e) => {
                            setData({ ...data, dob: e.target.value });
                            setError({ ...error, dob: false });
                        }}
                    />
                    {/* <div className='w-full flex items-center gap-4'>
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
                    </div> */}
                    {error.dob && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Date of Time</p>
                    <input type="time"
                        value={data.timeOfBirth}
                        onChange={(e) => {
                            setData({ ...data, timeOfBirth: e.target.value });
                            setError({ ...error, timeOfBirth: false });
                        }}
                    />
                    {/* <div className='w-full flex items-center gap-4'>
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
                    </div> */}
                    {error.timeOfBirth && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Place of Birth</p>
                    <input type="text"
                        placeholder='Enter Your Place of Birth'
                        value={data.placeOfBirth}
                        onChange={(e) => {
                            setData({ ...data, placeOfBirth: e.target.value });
                            setError({ ...error, placeOfBirth: false });
                        }}
                    />
                    {error.placeOfBirth && <span className='error__text'>This field is required</span>}
                </div>
                <button className='grad__btn mt-5' onClick={handleContinue}>
                    Continue
                </button>
            </div>
        </div>
    )
}

export default PersonalInfo1