import React, { useEffect, useState } from 'react';
import { SbRadio, SbRadioGroup } from '../../components/SbRadio';
import { FaArrowLeft } from 'react-icons/fa6';
import { SbCheckGroup, SbCheckItem } from '../../components/SbCheck';
import useSaveLocalStorageData from '../../hooks/useSaveLocalStorageData';
import useGetFormData from '../../hooks/useGetFormData';
import useGetFormDB from '../../hooks/useGetFromDB';


const LifeStyle1 = ({ next, back }) => {
    const saveData = useSaveLocalStorageData();
    const getData = useGetFormData();
    const getDB = useGetFormDB();

    const [error, setError] = useState({});
    const [data, setData] = useState({
        'how_often_you_drink': '',
        'are_you_a_smoker': '',
        'how_often_you_workout': '',
        'favourite_weekend_activities': []
    })



    useEffect(() => {
        (async () => {
            const presistentData = getData(data);
            const dbData = await getDB(data);

            if (Object.values(dbData).length < 1) {
                setData(presistentData)
            } else {
                setData(dbData);
            }
        })()
    }, [])

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
                    <p className="mb-1">How often do you drink</p>
                    <SbRadioGroup
                        name={"drink"}
                        value={data.how_often_you_drink}
                        onChange={(v) => {
                            setData({ ...data, how_often_you_drink: v });
                            setError({ ...error, how_often_you_drink: false });
                        }}
                    >
                        <SbRadio title="Never" value="Never" />
                        <SbRadio title="Occasionally" value="Occasionally" />
                        <SbRadio title="Weekends" value="Weekends" />
                        <SbRadio title="Regularly" value="Regularly" />
                    </SbRadioGroup>
                    {error.how_often_you_drink && <span className='error__text'>
                        This field is required
                    </span>}
                </div>
                <div className="text-[13px]">
                    <p className="mb-1">Are you smoker?</p>
                    <SbRadioGroup
                        name={"smoker"}
                        value={data.are_you_a_smoker}
                        onChange={(v) => {
                            setData({ ...data, are_you_a_smoker: v });
                            setError({ ...error, are_you_a_smoker: false });
                        }}
                    >
                        <SbRadio title="Yes" value="Yes" />
                        <SbRadio title="No" value="No" />
                        <SbRadio title="Occasionally" value="Occasionally" />
                    </SbRadioGroup>
                    {error.are_you_a_smoker && <span className='error__text'>
                        This field is required
                    </span>}
                </div>
                <div className="text-[13px]">
                    <p className="mb-1">How often do you workout</p>
                    <SbRadioGroup
                        name={"workout"}
                        value={data.how_often_you_workout}
                        onChange={(v) => {
                            setData({ ...data, how_often_you_workout: v });
                            setError({ ...error, how_often_you_workout: false });
                        }}
                    >
                        <SbRadio title="Regularly" value="Regularly" />
                        <SbRadio title="Sometime" value="Sometime" />
                        <SbRadio title="Few days a week" value="Few days a week" />
                        <SbRadio title="Never" value="Never" />
                    </SbRadioGroup>
                    {error.how_often_you_workout && <span className='error__text'>
                        This field is required
                    </span>}
                </div>
                <div className="text-[13px]">
                    <p className="mb-1">Your favourite weekend activities</p>
                    <SbCheckGroup
                        value={data.favourite_weekend_activities}
                        onChange={(v) => {
                            let selected = data.favourite_weekend_activities || [];
                            const value = v;

                            if (selected.includes(value))
                                selected = selected.filter(i => i !== value);
                            else
                                selected.push(value);

                            setData({ ...data, favourite_weekend_activities: selected });
                            setError({ ...error, favourite_weekend_activities: false });
                        }}>
                        <SbCheckItem title="Outdoor Activity" value="Outdoor Activity" />
                        <SbCheckItem title="Partying" value="Partying" />
                        <SbCheckItem title="Indoor activities(eg: playing music, reading, etc)" value="Indoor activities(eg: playing music, reading, etc)" />
                        <SbCheckItem title="Netflix and chill" value="Netflix and chill" />
                        <SbCheckItem title="Family Time" value="Family Time" />
                        <SbCheckItem title="Eat out with family/friends" value="Eat out with family/friends" />
                    </SbCheckGroup>
                    {error.favourite_weekend_activities && <span className='error__text'>
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

export default LifeStyle1