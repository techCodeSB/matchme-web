import React, { useState } from 'react'
import { SbRadio, SbRadioGroup } from '../../components/SbRadio'
import { FaArrowLeft } from 'react-icons/fa6'
import { SbCheckGroup, SbCheckItem } from '../../components/SbCheck'

const LifeStyle3 = ({ next, back }) => {
    const [data, setData] = useState({
        holidays: []
    })


    return (
        <div className='w-full lg:w-[80%] flex justify-center gap-8 overflow-hidden p-4 lg:p-0 animate-slide-in'>
            <div className='hidden md:block'>
                <div className='hidden lg:flex side__bg'>
                </div>
                <h1 className='text-xl text-gray-600 font-bold mt-2'>Tell us about you.</h1>
                <p className='text-xs text-gray-400'>Let's build the foundation of your curated</p>
                <p className='text-xs text-gray-400'>experience</p>
            </div>
            <div className='w-full lg:w-[40%] flex flex-col gap-4 bg-white rounded-2xl shadow-2xl p-8'>
                <h1 className='reg__title'>Life Style</h1>

                <div className="text-[13px] mt-3">
                    <p className="mb-1">How often do eat out?</p>
                    <SbRadioGroup>
                        <SbRadio title="Occasionally" value="occasionally" />
                        <SbRadio title="Weekends" value="weekends" />
                        <SbRadio title="Regularly" value="regularly" />
                    </SbRadioGroup>
                </div>
                <div className="text-[13px]">
                    <p className="mb-1">How often do you travel (For leisure)</p>
                    <SbRadioGroup>
                        <SbRadio title="Often" value="Often" />
                        <SbRadio title="Twice a Year" value="Twice a Year" />
                        <SbRadio title="Once a Year" value="Once a Year" />
                        <SbRadio title="Never" value="never" />
                    </SbRadioGroup>
                </div>
                <div className="text-[13px]">
                    <p className="mb-1">How often do you workout</p>
                    <SbRadioGroup>
                        <SbRadio title="Regularly" value="regularly" />
                        <SbRadio title="Sometime" value="sometime" />
                        <SbRadio title="Few days a week" value="few-day" />
                        <SbRadio title="Never" value="never" />
                    </SbRadioGroup>
                </div>
                <div className="text-[13px]">
                    <p className="mb-1">Your favourite weekend activities</p>
                    <SbCheckGroup value={data.holidays} onChange={(v) => {
                        let selected = data.holidays || [];
                        const value = v;

                        if (selected.includes(value))
                            selected = selected.filter(i => i !== value);
                        else
                            selected.push(value);

                        setData({ ...data, holidays: selected });
                    }}>
                        <SbCheckItem title="Luxury" value="Luxury" />
                        <SbCheckItem title="Budget" value="Budget" />
                        <SbCheckItem title="Well planned" value="Well planned" />
                        <SbCheckItem title="Unplanned trips" value="Unplanned trips" />
                    </SbCheckGroup>
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

export default LifeStyle3