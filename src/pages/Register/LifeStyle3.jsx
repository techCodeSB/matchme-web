import React, { useEffect, useState } from 'react'
import { SbRadio, SbRadioGroup } from '../../components/SbRadio'
import { FaArrowLeft } from 'react-icons/fa6'
import { SbCheckGroup, SbCheckItem } from '../../components/SbCheck'
import useSaveLocalStorageData from '../../hooks/useSaveLocalStorageData'
import useGetFormData from '../../hooks/useGetFormData'



const LifeStyle3 = ({ next, back }) => {
    const saveData = useSaveLocalStorageData();
    const getData = useGetFormData();
    const [error, setError] = useState({});
    const [data, setData] = useState({
        "holidays_prefrences": [],
        "how_often_you_eat_out": '',
        "how_often_you_travel": '',
    })




    useEffect(()=>{
        const presistentData = getData(data);
        setData(presistentData)
    },[])

    const handleContinue = async () => {
        const newErrors = {};

        Object.keys(data).map((k, i) => {
            if (Array.isArray(data[k]) && data[k].length < 1) {
                newErrors[k] = true;
                return;
            }
            else if (data[k] === "") {
                newErrors[k] = true;
                return;
            }
        })
        setError((prev) => ({
            ...prev,
            ...newErrors
        }));
        if (Object.keys(newErrors).length > 0) return;

        try {
            saveData(data);
            next();

        } catch (err) {
            return alert("Something went wrong");
        }
    }


    return (
        <div className='w-full lg:w-[80%] flex justify-center gap-8 overflow-hidden p-4 lg:p-0 animate-slide-in'>
            <div className='hidden md:block'>
                <div className='hidden lg:flex side__bg'>
                </div>
                <h1 className='text-xl text-gray-600 font-bold mt-2'>Tell us about you.</h1>
                <p className='text-xs text-gray-400'>Let's build the foundation of your curated</p>
                <p className='text-xs text-gray-400'>experience</p>
            </div>
            <div className='reg__form'>
                <h1 className='reg__title'>Life Style</h1>

                <div className="text-[13px] mt-3">
                    <p className="mb-1">How often do eat out?</p>
                    <SbRadioGroup
                        name={"eatout"}
                        value={data.how_often_you_eat_out}
                        onChange={(v) => {
                            setData({ ...data, how_often_you_eat_out: v });
                            setError({ ...error, how_often_you_eat_out: false });
                        }}
                    >
                        <SbRadio title="Occasionally" value="occasionally" />
                        <SbRadio title="Weekends" value="weekends" />
                        <SbRadio title="Regularly" value="regularly" />
                    </SbRadioGroup>
                    {error.how_often_you_eat_out && <span className='error__text'>
                        This field is required
                    </span>}
                </div>
                <div className="text-[13px]">
                    <p className="mb-1">How often do you travel (For leisure)</p>
                    <SbRadioGroup
                        name={"travel"}
                        value={data.how_often_you_travel}
                        onChange={(v) => {
                            setData({ ...data, how_often_you_travel: v });
                            setError({ ...error, how_often_you_travel: false });
                        }}
                    >
                        <SbRadio title="Often" value="Often" />
                        <SbRadio title="Twice a Year" value="Twice a Year" />
                        <SbRadio title="Once a Year" value="Once a Year" />
                        <SbRadio title="Never" value="never" />
                    </SbRadioGroup>
                    {error.how_often_you_travel && <span className='error__text'>
                        This field is required
                    </span>}
                </div>
                <div className="text-[13px]">
                    <p className="mb-1">What kind of holidays do your prefer</p>
                    <SbCheckGroup value={data.holidays_prefrences} onChange={(v) => {
                        let selected = data.holidays_prefrences || [];
                        const value = v;

                        if (selected.includes(value))
                            selected = selected.filter(i => i !== value);
                        else
                            selected.push(value);

                        setData({ ...data, holidays_prefrences: selected });
                        setError({ ...error, holidays_prefrences: false });
                    }}>
                        <SbCheckItem title="Luxury" value="Luxury" />
                        <SbCheckItem title="Budget" value="Budget" />
                        <SbCheckItem title="Well planned" value="Well planned" />
                        <SbCheckItem title="Unplanned trips" value="Unplanned trips" />
                    </SbCheckGroup>
                    {error.holidays_prefrences && <span className='error__text'>
                        This field is required
                    </span>}
                </div>




                <div className="flex items-center justify-between mt-5 gap-4">
                    <button className="back__btn" onClick={back}>
                        <FaArrowLeft className="inline mr-1" />
                        Back
                    </button>
                    <button className='grad__btn' onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LifeStyle3