import React, { useState } from 'react'
import { SbRadio, SbRadioGroup } from '../../components/SbRadio'
import { FaArrowLeft } from 'react-icons/fa6'
import { SbCheckGroup, SbCheckItem } from '../../components/SbCheck'

const LifeStyle5 = ({ next, back }) => {
    const [data, setData] = useState({
        holidays: []
    })


    return (
        <div className='w-full lg:w-[80%] flex justify-center gap-8 overflow-hidden p-4 lg:p-0 animate-slide-in'>
            <div className='hidden md:block'>
                <div className='side__bg'>
                </div>
                <h1 className='text-xl text-gray-600 font-bold mt-2'>Tell us about you.</h1>
                <p className='text-xs text-gray-400'>Let's build the foundation of your curated</p>
                <p className='text-xs text-gray-400'>experience</p>
            </div>
            <div className='w-full lg:w-[40%] flex flex-col gap-4 bg-white rounded-2xl shadow-2xl p-8'>
                <h1 className='reg__title'>Life Style</h1>

                <div className='input__field mt-3'>
                    <p>Please write a bride introduction</p>
                    <textarea
                        rows={5}
                        placeholder='Enter Introduction'
                    ></textarea>
                </div>

                <div className="flex items-center justify-between mt-5 gap-4">
                    <button className="back__btn" onClick={back}>
                        <FaArrowLeft className="inline mr-1" />
                        Back
                    </button>
                    <button className='grad__btn' onClick={next}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LifeStyle5;