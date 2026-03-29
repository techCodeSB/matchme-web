import React, { useEffect, useState } from 'react'
import { SbRadio, SbRadioGroup } from '../../components/SbRadio'
import { FaArrowLeft } from 'react-icons/fa6';
import useSaveLocalStorageData from '../../hooks/useSaveLocalStorageData'
import useGetFormData from '../../hooks/useGetFormData';



const LifeStyle4 = ({ next, back }) => {
    const saveData = useSaveLocalStorageData();
    const getData = useGetFormData();
    const [error, setError] = useState({});
    const [data, setData] = useState({
        "prefered_social_event": "",
        "whom_do_you_like_going_out_with": "",
        "how_spiritual_are_you": "",
        "how_religious_are_you": ""
    })



    useEffect(()=>{
        const presistentData = getData(data);
        setData(presistentData)
    },[])

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
                    <p className="mb-1">Do you like socialise?</p>
                    <SbRadioGroup
                        name={"socialise"}
                        value={data.prefered_social_event}
                        onChange={(v) => {
                            setData({ ...data, prefered_social_event: v });
                            setError({ ...error, prefered_social_event: false });
                        }}
                    >
                        <SbRadio title="Yes" value="Yes" />
                        <SbRadio title="Occasionally" value="Occasionally" />
                        <SbRadio title="No" value="No" />
                    </SbRadioGroup>
                    {error.prefered_social_event && <span className='error__text'>
                        This field is required
                    </span>}
                </div>
                <div className="text-[13px]">
                    <p className="mb-1">Whom do you mostly go out with</p>
                    <SbRadioGroup
                        name={"mostgo"}
                        value={data.whom_do_you_like_going_out_with}
                        onChange={(v) => {
                            setData({ ...data, whom_do_you_like_going_out_with: v });
                            setError({ ...error, whom_do_you_like_going_out_with: false });
                        }}
                    >
                        <SbRadio title="With Family" value="With Family" />
                        <SbRadio title="With Friends" value="With Friends" />
                        <SbRadio title="Solo" value="Solo" />
                    </SbRadioGroup>
                    {error.whom_do_you_like_going_out_with && <span className='error__text'>
                        This field is required
                    </span>}
                </div>
                <div className="text-[13px]">
                    <p className="mb-1">How Spritual you are?</p>
                    <SbRadioGroup
                        name={"spritual"}
                        value={data.how_spiritual_are_you}
                        onChange={(v) => {
                            setData({ ...data, how_spiritual_are_you: v });
                            setError({ ...error, how_spiritual_are_you: false });
                        }}
                    >
                        <SbRadio title="Not all" value="Not all" />
                        <SbRadio title="Little" value="Little" />
                        <SbRadio title="Moderate" value="Moderate" />
                        <SbRadio title="Very Spritual" value="Very Spritual" />
                    </SbRadioGroup>
                    {error.how_spiritual_are_you && <span className='error__text'>
                        This field is required
                    </span>}
                </div>
                <div className="text-[13px]">
                    <p className="mb-1">How religious you are?</p>
                    <SbRadioGroup
                        name={"religious"}
                        value={data.how_religious_are_you}
                        onChange={(v) => {
                            setData({ ...data, how_religious_are_you: v });
                            setError({ ...error, how_religious_are_you: false });
                        }}
                    >
                        <SbRadio title="Not all" value="Not all" />
                        <SbRadio title="Little" value="Little" />
                        <SbRadio title="Moderate" value="Moderate" />
                    </SbRadioGroup>
                    {error.how_religious_are_you && <span className='error__text'>
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

export default LifeStyle4;