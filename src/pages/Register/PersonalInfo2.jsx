import { FaArrowLeft } from "react-icons/fa6";


const PersonalInfo2 = ({next, back}) => {


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
                    <p>Enter Country(current residency)</p>
                    <input type="text"
                        placeholder='Enter Your Country'
                    />
                </div>
                <div className='input__field'>
                    <p>Enter City</p>
                    <input type="text"
                        placeholder='Enter Your City'
                    />
                </div>
                <div className='input__field'>
                    <p>Enter Locality</p>
                    <input type="text"
                        placeholder='Enter Your Locality'
                    />
                </div>
                <div className='input__field'>
                    <p>Select Nationality</p>
                    <select>
                        <option value="">Select</option>
                        <option value="india">Indian</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className='input__field'>
                    <p>Select Religion</p>
                    <select>
                        <option value="">Select</option>
                        <option value="india">Hindu</option>
                        <option value="female">Muslim</option>
                        <option value="others">Sikh</option>
                    </select>
                </div>
                <div className='input__field'>
                    <p>Enter Community Name(optional)</p>
                    <input type="text"
                        placeholder='Enter Your Community Name'
                    />
                </div>
                <div className='input__field'>
                    <p>Enter Medical History</p>
                    <input type="text"
                        placeholder='Enter Your Medical History'
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

export default PersonalInfo2