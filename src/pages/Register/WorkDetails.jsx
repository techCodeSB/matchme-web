import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import useSaveLocalStorageData from "../../hooks/useSaveLocalStorageData";
import useGetFormData from "../../hooks/useGetFormData";


const WorkDetails = ({ next, back }) => {
    const saveData = useSaveLocalStorageData();
    const getData = useGetFormData();
    const [error, setError] = useState({});
    const [data, setData] = useState({
        "nature_of_work": "",
        "industry": "",
        "organization": "",
        "designation": "",
        "personal_anual_income": "",
        "business_turnover": "",
        "business_website": ""
    })


    useEffect(() => {
        const presistentData = getData(data);
        setData(presistentData)
    }, [])


    const handleContinue = async () => {
        const newErrors = {};

        for (let k of Object.keys(data)) {
            if (data[k] === "") {
                if ((k === "business_turnover" || k === "business_website") && data['nature_of_work'] !== "Business")
                    continue

                newErrors[k] = true;
            }
        }
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
                <h1 className='reg__title'>Work Details</h1>

                <div className='input__field mt-3'>
                    <p>Nature of Work</p>
                    <select
                        value={data.nature_of_work}
                        onChange={(e) => {
                            setData({ ...data, nature_of_work: e.target.value });
                            setError({ ...error, nature_of_work: false });
                        }}
                    >
                        <option value="">Select</option>
                        <option value="Business">Business</option>
                        <option value="Service">Service</option>
                        <option value="Profession">Profession</option>
                    </select>
                    {error.nature_of_work && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Industry</p>
                    <input type="text"
                        placeholder="Enter Industry"
                        value={data.industry}
                        onChange={(e) => {
                            setData({ ...data, industry: e.target.value });
                            setError({ ...error, industry: false });
                        }}
                    />
                    {error.industry && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Organization</p>
                    <input type="text"
                        placeholder="Enter Organization"
                        value={data.organization}
                        onChange={(e) => {
                            setData({ ...data, organization: e.target.value });
                            setError({ ...error, organization: false });
                        }}
                    />
                    {error.organization && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Your Designation</p>
                    <input type="text"
                        placeholder="Enter Your Your Designation"
                        value={data.designation}
                        onChange={(e) => {
                            setData({ ...data, designation: e.target.value });
                            setError({ ...error, designation: false });
                        }}
                    />
                    {error.designation && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Personal Anual Income</p>
                    <select
                        value={data.personal_anual_income}
                        onChange={(e) => {
                            setData({ ...data, personal_anual_income: e.target.value });
                            setError({ ...error, personal_anual_income: false });
                        }}
                    >
                        <option value="">Select</option>
                        <option value="Under 10 Lakhs">Under 10 Lakhs</option>
                        <option value="10 Lakhs and Above">10 Lakhs and Above</option>
                        <option value="20 Lakhs and Above">20 Lakhs and Above</option>
                        <option value="30 Lakhs and Above">30 Lakhs and Above</option>
                        <option value="50 Lakhs and Above">50 Lakhs and Above</option>
                        <option value="60 Lakhs and Above">60 Lakhs and Above</option>
                        <option value="70 Lakhs and Above">70 Lakhs and Above</option>
                        <option value="80 Lakhs and Above">80 Lakhs and Above</option>
                        <option value="90 Lakhs and Above">90 Lakhs and Above</option>
                        <option value="1 Cr and Above">1 Cr and Above</option>
                        <option value="5 Cr and Above">5 Cr and Above</option>
                    </select>
                    {error.personal_anual_income && <span className='error__text'>This field is required</span>}
                </div>

                {
                    data.nature_of_work === "Business" && (
                        <>
                            <div className='input__field'>
                                <p>Buisness Turnover</p>
                                <input type="text"
                                    placeholder="Enter Buisness Turnover"
                                    value={data.business_turnover}
                                    onChange={(e) => {
                                        setData({ ...data, business_turnover: e.target.value });
                                        setError({ ...error, business_turnover: false });
                                    }}
                                />
                                {error.business_turnover && <span className='error__text'>This field is required</span>}
                            </div>

                            <div className='input__field'>
                                <p>Buisness Website</p>
                                <input type="text"
                                    placeholder="Enter Buisness Website"
                                    value={data.business_website}
                                    onChange={(e) => {
                                        setData({ ...data, business_website: e.target.value });
                                        setError({ ...error, business_website: false });
                                    }}
                                />
                                {error.business_website && <span className='error__text'>This field is required</span>}
                            </div>

                        </>
                    )
                }

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

export default WorkDetails;