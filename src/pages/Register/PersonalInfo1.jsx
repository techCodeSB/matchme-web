import React, { useState } from 'react'

const PersonalInfo1 = ({ next }) => {
    const [error, setError] = useState({});
    const [data, setData] = useState({
        full_name: '', nick_name: '', gender: '', dob: '',
        birth_time: '', birth_place: ''
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
            <div className='reg__form'>
                <h1 className='reg__title'>Personal Details</h1>

                <div className='input__field mt-3'>
                    <p>Full Name</p>
                    <input type="text"
                        placeholder='Enter Your Fullname'
                        value={data.full_name}
                        onChange={(e) => {
                            setData({ ...data, full_name: e.target.value });
                            setError({ ...error, full_name: false });
                        }}
                    />
                    {error.full_name && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Nick Name</p>
                    <input type="text"
                        placeholder='Enter Your Nickname'
                        value={data.nick_name}
                        onChange={(e) => {
                            setData({ ...data, nick_name: e.target.value });
                            setError({ ...error, nick_name: false });
                        }}
                    />
                    {error.nick_name && <span className='error__text'>This field is required</span>}
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
                        value={data.birth_time}
                        onChange={(e) => {
                            setData({ ...data, birth_time: e.target.value });
                            setError({ ...error, birth_time: false });
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
                    {error.birth_time && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Place of Birth</p>
                    <input type="text"
                        placeholder='Enter Your Place of Birth'
                        value={data.birth_place}
                        onChange={(e) => {
                            setData({ ...data, birth_place: e.target.value });
                            setError({ ...error, birth_place: false });
                        }}
                    />
                    {error.birth_place && <span className='error__text'>This field is required</span>}
                </div>
                <button className='grad__btn mt-5' onClick={handleContinue}>
                    Continue
                </button>
            </div>
        </div>
    )
}

export default PersonalInfo1