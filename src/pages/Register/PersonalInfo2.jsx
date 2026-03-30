import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import useSaveLocalStorageData from "../../hooks/useSaveLocalStorageData";
import useGetFormData from "../../hooks/useGetFormData";
import useGetFormDB from '../../hooks/useGetFromDB';


const PersonalInfo2 = ({ next, back }) => {
    const saveData = useSaveLocalStorageData();
    const getData = useGetFormData();
    const getDB = useGetFormDB();

    const [error, setError] = useState({});
    const [data, setData] = useState({
        country: '', city: '', locality: '', nationality: '',
        community: '', medical_history: '', religion: ''
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
                <h1 className='reg__title'>Personal Details</h1>

                <div className='input__field mt-3'>
                    <p>Enter Country(current residency)</p>
                    <input type="text"
                        placeholder='Enter Your Country'
                        value={data.country}
                        onChange={(e) => {
                            setData({ ...data, country: e.target.value });
                            setError({ ...error, country: false });
                        }}
                    />
                    {error.country && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Enter City</p>
                    <input type="text"
                        placeholder='Enter Your City'
                        value={data.city}
                        onChange={(e) => {
                            setData({ ...data, city: e.target.value });
                            setError({ ...error, city: false });
                        }}
                    />
                    {error.city && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Enter Locality</p>
                    <input type="text"
                        placeholder='Enter Your Locality'
                        value={data.locality}
                        onChange={(e) => {
                            setData({ ...data, locality: e.target.value });
                            setError({ ...error, locality: false });
                        }}
                    />
                    {error.locality && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Select Nationality</p>
                    <select
                        value={data.nationality}
                        onChange={(e) => {
                            setData({ ...data, nationality: e.target.value });
                            setError({ ...error, nationality: false });
                        }}
                    >
                        <option value="">Select</option>
                        <option value="Indian">Indian</option>
                        <option value="NRI">NRI</option>
                    </select>
                    {error.nationality && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Select Religion</p>
                    <select
                        value={data.religion}
                        onChange={(e) => {
                            setData({ ...data, religion: e.target.value });
                            setError({ ...error, religion: false });
                        }}
                    >
                        <option value="">Select</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Sikh">Sikh</option>
                        <option value="Christian">Christian</option>
                        <option value="Jain">Jain</option>
                        <option value="Buddhist">Buddhist</option>
                        <option value="Muslim">Muslim</option>
                    </select>
                    {error.religion && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Enter Community Name(optional)</p>
                    <input type="text"
                        placeholder='Enter Your Community Name'
                        value={data.community}
                        onChange={(e) => {
                            setData({ ...data, community: e.target.value });
                            setError({ ...error, community: false });
                        }}
                    />
                    {error.community && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Enter Medical History</p>
                    <input type="text"
                        placeholder='Enter Your Medical History'
                        value={data.medical_history}
                        onChange={(e) => {
                            setData({ ...data, medical_history: e.target.value });
                            setError({ ...error, medical_history: false });
                        }}
                    />
                    {error.medical_history && <span className='error__text'>This field is required</span>}
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

export default PersonalInfo2