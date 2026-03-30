import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import useSaveLocalStorageData from "../../hooks/useSaveLocalStorageData";
import useGetFormData from "../../hooks/useGetFormData";
import useGetFormDB from '../../hooks/useGetFromDB';


const FamilyDetails = ({ next, back }) => {
    const saveData = useSaveLocalStorageData();
    const getData = useGetFormData();
    const getDB = useGetFormDB();

    const [error, setError] = useState({});
    const [data, setData] = useState({
        "father_name": "",
        "father_occupation": "",
        "mother_name": "",
        "mother_occupation": "",
        "no_of_siblings": "",
        "family_background": "",
        "hometown": "",
        "family_anual_income": "",
        "family_description": "",
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
                <h1 className='reg__title'>Family Details</h1>

                <div className='input__field mt-3'>
                    <p>Father's Name</p>
                    <input type="text"
                        placeholder="Enter Your Father's Name"
                        value={data.father_name}
                        onChange={(e) => {
                            setData({ ...data, father_name: e.target.value });
                            setError({ ...error, father_name: false });
                        }}
                    />
                    {error.father_name && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Father's Occupation</p>
                    <select
                        value={data.father_occupation}
                        onChange={(e) => {
                            setData({ ...data, father_occupation: e.target.value });
                            setError({ ...error, father_occupation: false });
                        }}
                    >
                        <option value="">Select</option>
                        <option value="Business">Business</option>
                        <option value="Service">Service</option>
                        <option value="Profession">Profession</option>
                        <option value="N.a.">N.a.</option>
                    </select>
                    {error.father_occupation && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Mother's Name</p>
                    <input type="text"
                        placeholder="Enter Your Mother's Name"
                        value={data.mother_name}
                        onChange={(e) => {
                            setData({ ...data, mother_name: e.target.value });
                            setError({ ...error, mother_name: false });
                        }}
                    />
                    {error.mother_name && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Mother's Occupation</p>
                    <select
                        value={data.mother_occupation}
                        onChange={(e) => {
                            setData({ ...data, mother_occupation: e.target.value });
                            setError({ ...error, mother_occupation: false });
                        }}
                    >
                        <option value="">Select</option>
                        <option value="Business">Business</option>
                        <option value="Service">Service</option>
                        <option value="Profession">Profession</option>
                        <option value="Homemaker">Homemaker</option>
                        <option value="N.a.">N.a.</option>
                    </select>
                    {error.mother_occupation && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>No of Siblings</p>
                    <select
                        value={data.no_of_siblings}
                        onChange={(e) => {
                            setData({ ...data, no_of_siblings: e.target.value });
                            setError({ ...error, no_of_siblings: false });
                        }}
                    >
                        <option value="">Select</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3+">3+</option>
                    </select>
                    {error.no_of_siblings && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Home Town</p>
                    <input type="text"
                        placeholder="Enter Your Home Town"
                        value={data.hometown}
                        onChange={(e) => {
                            setData({ ...data, hometown: e.target.value });
                            setError({ ...error, hometown: false });
                        }}
                    />
                    {error.hometown && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Family Background</p>
                    <select
                        value={data.family_background}
                        onChange={(e) => {
                            setData({ ...data, family_background: e.target.value });
                            setError({ ...error, family_background: false });
                        }}
                    >
                        <option value="">Select</option>
                        <option value="Business owners">Business owners</option>
                        <option value="Goverment employees">Goverment employees</option>
                        <option value="Private employees">Private employees</option>
                        <option value="Self-employed">Self-employed</option>
                        <option value="Retired">Retired</option>
                        <option value="Others">Others</option>
                    </select>
                    {error.family_background && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Family Annual Income</p>
                    <select
                        value={data.family_anual_income}
                        onChange={(e) => {
                            setData({ ...data, family_anual_income: e.target.value });
                            setError({ ...error, family_anual_income: false });
                        }}
                    >
                        <option value="">Select</option>
                        <option value="> 10L">&gt; 10L</option>
                        <option value="> 25L">&gt; 25L</option>
                        <option value="> 50L">&gt; 50L</option>
                        <option value="> 1Cr">&gt; 1Cr</option>
                        <option value="> 5Cr">&gt; 5Cr</option>
                        <option value="> 10Cr">&gt; 10Cr</option>
                    </select>
                    {error.family_anual_income && <span className='error__text'>This field is required</span>}
                </div>
                <div className='input__field'>
                    <p>Family Description</p>
                    <textarea type="text"
                        rows={3}
                        placeholder="Describe your family in your words"
                        value={data.family_description}
                        onChange={(e) => {
                            setData({ ...data, family_description: e.target.value });
                            setError({ ...error, family_description: false });
                        }}
                    ></textarea>
                    {error.family_description && <span className='error__text'>This field is required</span>}
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

export default FamilyDetails