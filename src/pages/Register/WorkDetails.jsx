import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";


const WorkDetails = ({ next, back }) => {
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
                <h1 className='reg__title'>Work Details</h1>


                <div className='input__field mt-3'>
                    <p>Nature of Work</p>
                    <select>
                        <option value="">Select</option>
                        <option value="am">Business</option>
                        <option value="pm">Service</option>
                        <option value="pm">Profession</option>
                    </select>
                </div>
                <div className='input__field'>
                    <p>Industry</p>
                    <input type="text"
                        placeholder="Enter Industry"
                    />
                </div>
                <div className='input__field'>
                    <p>Organization</p>
                    <input type="text"
                        placeholder="Enter Organization"
                    />
                </div>
                <div className='input__field'>
                    <p>Your Designation</p>
                    <input type="text"
                        placeholder="Enter Your Your Designation"
                    />
                </div>
                <div className='input__field'>
                    <p>Personal Anual Income</p>
                    <select>
                        <option value="">Select</option>
                        <option value="am">Under 10 Lakhs</option>
                        <option value="pm">10 Lakhs and Above</option>
                        <option value="pm">20 Lakhs and Above</option>
                        <option value="pm">30 Lakhs and Above</option>
                        <option value="pm">50 Lakhs and Above</option>
                        <option value="pm">60 Lakhs and Above</option>
                        <option value="pm">70 Lakhs and Above</option>
                        <option value="pm">80 Lakhs and Above</option>
                        <option value="pm">90 Lakhs and Above</option>
                        <option value="pm">1 Cr and Above</option>
                        <option value="pm">5 Cr and Above</option>
                    </select>
                </div>
                <div className='input__field'>
                    <p>Buisness Turnover</p>
                    <input type="text"
                        placeholder="Enter Buisness Turnover"
                    />
                </div>
                <div className='input__field'>
                    <p>Buisness Website</p>
                    <input type="text"
                        placeholder="Enter Buisness Website"
                    />
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

export default WorkDetails;