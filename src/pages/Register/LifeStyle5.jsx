import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

const LifeStyle5 = ({ next, back }) => {
    const [error, setError] = useState({});
    const [data, setData] = useState({
        about_yourself: ''
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

        try {
            next();

        } catch (err) {
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
                <h1 className='reg__title'>Life Style</h1>

                <div className='input__field mt-3'>
                    <p>Please write a bride introduction</p>
                    <textarea
                        rows={5}
                        placeholder='Enter Introduction'
                        value={data.about_yourself}
                        onChange={(e) => {
                            setData({ ...data, about_yourself: e.target.value });
                            setError({ ...error, about_yourself: false });
                        }}
                    ></textarea>
                    {error.about_yourself && <span className='error__text'>This field is required</span>}
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

export default LifeStyle5;