import { FaArrowLeft } from "react-icons/fa6";
import { SbRadio, SbRadioGroup } from "../../components/SbRadio";
import { useState } from "react";


const PersonalInfo3 = ({ next, back }) => {
    const [data, setData] = useState({
        eatingPref: ""
    })


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
                    <p>Enter Whatsapp Number</p>
                    <input type="text"
                        placeholder='+9194XXX, +143XXX'
                    />
                </div>

                <div className="input__field">
                    <p>Enter Your Height</p>
                    <div className="flex items-center gap-4">
                        <div className='input__field w-full'>
                            <input type="text"
                                placeholder='Feet'
                            />
                        </div>
                        <div className='input__field w-full'>
                            <input type="text"
                                placeholder='Inch'
                            />
                        </div>
                    </div>
                </div>

                <div className="input__field">
                    <p>Enter Your Weight</p>
                    <div className="flex items-center gap-4">
                        <div className='input__field w-full'>
                            <input type="text"
                                placeholder='Weight'
                            />
                        </div>
                        <select>
                            <option value="">Select unit</option>
                            <option value="Kgs">Kgs</option>
                            <option value="lbs">lbs</option>
                        </select>
                    </div>
                </div>
                <div className="w-full flex items-center gap-2 text-xs">
                    <input type="checkbox" id="dontProfile" />
                    <label htmlFor="dontProfile">Don't display on my profile</label>
                </div>


                <div className="text-[13px]">
                    <p className="mb-1">Select Your Gender</p>
                    <SbRadioGroup value={data.eatingPref} onChange={(v) => setData({ ...data, eatingPref: v })} name="etingPref">
                        <SbRadio title="Veg" value="veg" />
                        <SbRadio title="Non-Veg" value="non-veg" />
                        <SbRadio title="Vegan" value="vegan" />
                    </SbRadioGroup>
                </div>

                <div className='input__field'>
                    <p>Select Marital Status</p>
                    <select>
                        <option value="">Select</option>
                        <option value="never-married">Never Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                    </select>
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

export default PersonalInfo3