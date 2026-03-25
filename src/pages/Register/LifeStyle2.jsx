import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { SbCheckGroup, SbCheckItem } from '../../components/SbCheck'

const LifeStyle2 = ({ next, back }) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState([])


    const handleContinue = async () => {
        if (data.length < 1) {
            setError(true);
            return;
        }
        if (data.length < 5) {
            setError("Select minimum 5 interest");
            return;
        }

        try {
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
                <h1 className=''>Select up to 5 interest</h1>

                <div className="text-[13px] mt-5">
                    <p className="mb-1">What are your interest</p>
                    <SbCheckGroup value={data} onChange={(v) => {
                        const value = v;

                        setData(prev => {
                            if (prev.includes(value)) {
                                return prev.filter(i => i !== value);
                            } else {
                                return [...prev, value];
                            }
                        });
                        setError(false);
                    }}>
                        <SbCheckItem title="Music" value="Music" />
                        <SbCheckItem title="Literature" value="Literature" />
                        <SbCheckItem title="Art" value="Art" />
                        <SbCheckItem title="Adventure" value="Adventure" />
                        <SbCheckItem title="Sports" value="Sports" />
                        <SbCheckItem title="Dance" value="Dance" />
                        <SbCheckItem title="Fitness & Wellness" value="Fitness & Wellness" />
                        <SbCheckItem title="Travel" value="Travel" />
                        <SbCheckItem title="Politics" value="Politics" />
                        <SbCheckItem title="Pets" value="Pets" />
                        <SbCheckItem title="Foods" value="Foods" />
                        <SbCheckItem title="Cooking" value="Cooking" />
                        <SbCheckItem title="Photography" value="Photography" />
                        <SbCheckItem title="Theatre" value="Theatre" />
                        <SbCheckItem title="Nature" value="Nature" />
                        <SbCheckItem title="Sprituality" value="Nature" />
                    </SbCheckGroup>
                    {error && <span className='error__text'>
                        {typeof (error) === "string" ? error : "This field is required"}
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

export default LifeStyle2