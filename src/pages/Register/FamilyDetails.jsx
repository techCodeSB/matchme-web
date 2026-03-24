import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";


const FamilyDetails = ({ next, back }) => {
    const [data, setData] = useState({
        eatingPref: ""
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
                <h1 className='reg__title'>Family Details</h1>

                <div className='input__field mt-3'>
                    <p>Father's Name</p>
                    <input type="text"
                        placeholder="Enter Your Father's Name"
                    />
                </div>
                <div className='input__field'>
                    <p>Father's Occupation</p>
                    <select>
                        <option value="">Select</option>
                        <option value="am">Business</option>
                        <option value="pm">Service</option>
                        <option value="pm">Profession</option>
                        <option value="pm">N.a.</option>
                    </select>
                </div>
                <div className='input__field'>
                    <p>Mother's Name</p>
                    <input type="text"
                        placeholder="Enter Your Mother's Name"
                    />
                </div>
                <div className='input__field'>
                    <p>Mother's Occupation</p>
                    <select>
                        <option value="">Select</option>
                        <option value="am">Business</option>
                        <option value="pm">Service</option>
                        <option value="pm">Profession</option>
                        <option value="pm">Homemaker</option>
                        <option value="pm">N.a.</option>
                    </select>
                </div>
                <div className='input__field'>
                    <p>No of Siblings</p>
                    <select>
                        <option value="">Select</option>
                        <option value="am">0</option>
                        <option value="pm">1</option>
                        <option value="pm">2</option>
                        <option value="pm">3</option>
                        <option value="pm">3+</option>
                    </select>
                </div>
                <div className='input__field'>
                    <p>Home Town</p>
                    <input type="text"
                        placeholder="Enter Your Home Town"
                    />
                </div>
                <div className='input__field'>
                    <p>Family Background</p>
                    <select>
                        <option value="">Select</option>
                        <option value="am">Business owners</option>
                        <option value="pm">Goverment employees</option>
                        <option value="pm">Private employees</option>
                        <option value="pm">Self-employed</option>
                        <option value="pm">Retired</option>
                        <option value="pm">Others</option>
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

export default FamilyDetails