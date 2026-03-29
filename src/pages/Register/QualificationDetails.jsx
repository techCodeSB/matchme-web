import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import useSaveLocalStorageData from "../../hooks/useSaveLocalStorageData";
import useGetFormData from "../../hooks/useGetFormData";


const QualificationDetails = ({ next, back }) => {
    const saveData = useSaveLocalStorageData();
    const getData = useGetFormData();
    const [error, setError] = useState({});
    const [data, setData] = useState({
        "highest_qualification": "",
        "school_name": "",
        "ug_college_name": "",
        "pg_college_name": "",
        "phd_college_name": "",
        "other_qualification_details": "",
        "highest_degree": ""
    })


    useEffect(() => {
        const presistentData = getData(data);
        setData(presistentData)
    }, [])


    const handleContinue = async () => {
        const newErrors = {};

        for (let k of Object.keys(data)) {
            if (data[k] === "") {
                if (k === "ug_college_name" && data['highest_qualification'] === "School")
                    continue
                if (k === "pg_college_name" && (data['highest_qualification'] === "School" || data['highest_qualification'] === "Graduation"))
                    continue
                if (k === "phd_college_name" && data['highest_qualification'] != "Ph.D")
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
                <h1 className='reg__title'>Qualification Details</h1>

                <div className='input__field mt-3'>
                    <p>Your Highest Qualification</p>
                    <select
                        value={data.highest_qualification}
                        onChange={(e) => {
                            setData({ ...data, highest_qualification: e.target.value });
                            setError({ ...error, highest_qualification: false });
                        }}
                    >
                        <option value="">Select</option>
                        <option value="School">School</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Post-Grad">Post-Grad</option>
                        <option value="Ph.D">Ph.D</option>
                    </select>
                    {error.highest_qualification && <span className='error__text'>
                        This field is required
                    </span>}
                </div>
                <div className='input__field'>
                    <p>Your School</p>
                    <input type="text"
                        placeholder="Enter Your School Name"
                        value={data.school_name}
                        onChange={(e) => {
                            setData({ ...data, school_name: e.target.value });
                            setError({ ...error, school_name: false });
                        }}
                    />
                    {error.school_name && <span className='error__text'>
                        This field is required
                    </span>}
                </div>
                {
                    data.highest_qualification && (data.highest_qualification === "Graduation" || data.highest_qualification === "Post-Grad" || data.highest_qualification === "Ph.D") && (
                        <div className='input__field'>
                            <p>UG College Name</p>
                            <input type="text"
                                placeholder="Enter Your UG College Name"
                                value={data.ug_college_name}
                                onChange={(e) => {
                                    setData({ ...data, ug_college_name: e.target.value });
                                    setError({ ...error, ug_college_name: false });
                                }}
                            />
                            {error.ug_college_name && <span className='error__text'>
                                This field is required
                            </span>}
                        </div>
                    )
                }

                {
                    data.highest_qualification && (data.highest_qualification === "Post-Grad" || data.highest_qualification === "Ph.D") && (
                        <div className='input__field'>
                            <p>PG College Name</p>
                            <input type="text"
                                placeholder="Enter Your PG College Name"
                                value={data.pg_college_name}
                                onChange={(e) => {
                                    setData({ ...data, pg_college_name: e.target.value });
                                    setError({ ...error, pg_college_name: false });
                                }}
                            />
                            {error.pg_college_name && <span className='error__text'>
                                This field is required
                            </span>}
                        </div>
                    )
                }

                {
                    data.highest_qualification && data.highest_qualification === "Ph.D" && (
                        <div className='input__field'>
                            <p>Ph.D College Name</p>
                            <input type="text"
                                placeholder="Enter Your Ph.D College Name"
                                value={data.phd_college_name}
                                onChange={(e) => {
                                    setData({ ...data, phd_college_name: e.target.value });
                                    setError({ ...error, phd_college_name: false });
                                }}
                            />
                            {error.phd_college_name && <span className='error__text'>
                                This field is required
                            </span>}
                        </div>
                    )
                }

                <div className='input__field'>
                    <p>Highest Degree</p>
                    <input type="text"
                        placeholder="Enter Your Highest Degree"
                        value={data.highest_degree}
                        onChange={(e) => {
                            setData({ ...data, highest_degree: e.target.value });
                            setError({ ...error, highest_degree: false });
                        }}
                    />
                    {error.highest_degree && <span className='error__text'>
                        This field is required
                    </span>}
                </div>
                <div className='input__field'>
                    <p>Other Details</p>
                    <input type="text"
                        placeholder="Enter Your Other Details"
                        value={data.other_qualification_details}
                        onChange={(e) => {
                            setData({ ...data, other_qualification_details: e.target.value });
                            setError({ ...error, other_qualification_details: false });
                        }}
                    />
                    {error.other_qualification_details && <span className='error__text'>
                        This field is required
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

export default QualificationDetails;