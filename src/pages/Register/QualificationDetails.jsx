import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";


const QualificationDetails = ({ next, back }) => {
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
                <h1 className='reg__title'>Qualification Details</h1>


                <div className='input__field mt-3'>
                    <p>Your Highest Qualification</p>
                    <select>
                        <option value="">Select</option>
                        <option value="am">School</option>
                        <option value="pm">Graduation</option>
                        <option value="pm">Post-Grad</option>
                        <option value="pm">Ph.D</option>
                    </select>
                </div>
                <div className='input__field'>
                    <p>Your School</p>
                    <input type="text"
                        placeholder="Enter Your School Name"
                    />
                </div>
                <div className='input__field'>
                    <p>UG College Name</p>
                    <input type="text"
                        placeholder="Enter Your UG College Name"
                    />
                </div>
                <div className='input__field'>
                    <p>PG College Name</p>
                    <input type="text"
                        placeholder="Enter Your PG College Name"
                    />
                </div>
                <div className='input__field'>
                    <p>Ph.D College Name</p>
                    <input type="text"
                        placeholder="Enter Your Ph.D College Name"
                    />
                </div>
                <div className='input__field'>
                    <p>Highest Degree</p>
                    <input type="text"
                        placeholder="Enter Your Highest Degree"
                    />
                </div>
                <div className='input__field'>
                    <p>Other Details</p>
                    <input type="text"
                        placeholder="Enter Your Other Details"
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

export default QualificationDetails;