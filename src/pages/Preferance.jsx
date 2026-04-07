import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import 'animate.css';
import { SbCheckGroup, SbCheckItem } from "../components/SbCheck";
import Cookies from 'js-cookie';



const incomes = [
    "Any",
    "Under 10 Lakhs",
    "10 Lakhs and Above",
    "20 Lakhs and Above",
    "30 Lakhs and Above",
    "40 Lakhs and Above",
    "50 Lakhs and Above",
    "60 Lakhs and Above",
    "70 Lakhs and Above",
    "80 Lakhs and Above",
    "90 Lakhs and Above",
    "1 Crore and Above",
    "5 Crore and Above",
];
const religionOptions = [
    "Hindu",
    "Sikh",
    "Christian",
    "Jain",
    "Buddhist",
    "Muslim",
];
const marriedStatus = ["Any", "Never Married", "Divorced", "Widowed"];
const location = ["Any where", "India", "Abroad"];

const Preferance = ({ next, back }) => {
    const token = Cookies.get("mm-token")
    const [heightFeet, setHeightFeet] = useState('5');
    const [heightInch, setHeightInch] = useState('2');
    const [fromAge, setFromAge] = useState('55');
    const [toAge, setToAge] = useState('75');
    const [education, setEducation] = useState('Any');
    const [familyBg, setFamilyBg] = useState('Any');
    const [income, setIncome] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('Any');
    const [selectRelegion, setSelectedRelegion] = useState([]);

    const [error, setError] = useState(null);
    const [data, setData] = useState({
        "age_preference": { from: '', to: '' },
        "height_preference": '',
        "education_preference": '',
        "family_background_preference": '',
        "personal_income_preference": '',
        "marriage_status_preference": '',
        "religion_preference": [],
        "preferred_location": 'Any',
    })


    // Get Preferance
    useEffect(() => {
        (async () => {
            try {
                const URL = `${import.meta.env.VITE_API_URL}/preferance/get`;
                const req = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ token })
                })
                const res = await req.json();
                if (req.status !== 200) {
                    console.warn("No preferance set");
                    return;
                }

                setHeightFeet(res.height_preference.split(".")[0]);
                setHeightInch(res.height_preference.split(".")[1]);
                setFromAge(res.age_preference.from);
                setToAge(res.age_preference.to);
                setEducation(res.education_preference);
                setFamilyBg(res.family_background_preference);
                setIncome(res.personal_income_preference);
                setMaritalStatus(res.marriage_status_preference);
                setSelectedRelegion(res.religion_preference);

                setData({...res, update: true});

            } catch (err) {
                return alert("Something went wrong");
            }
        })()
    }, [])


    const handleSave = async () => {
        let newErrors = false;

        Object.keys(data).map((k, i) => {
            if (data[k] === "" && k !== "six") {
                newErrors = true;
                return;
            }
        })
        setError(newErrors);
        if (newErrors) return;

        try {
            const URL = `${import.meta.env.VITE_API_URL}/preferance/add`;
            const req = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    "age_preference": { from: fromAge, to: toAge },
                    "height_preference": `${heightFeet}.${heightInch}`,
                    "education_preference": education,
                    "family_background_preference": familyBg,
                    "personal_income_preference": income,
                    "marriage_status_preference": maritalStatus,
                    "religion_preference": selectRelegion,
                    "preferred_location": data.preferred_location,
                    token
                })
            })
            const res = await req.json();
            if (req.status !== 200) {
                return alert(res.err);
            }

            next();

        } catch (err) {
            return alert("Something went wrong");
        }
    }



    return (
        <>
            {error && <span className='error__text'>Please select all prefereances.</span>}
            <div className='w-[80%] md:w-[40%] bg-white shadow-xl rounded-xl flex flex-col
                gap-4 overflow-hidden p-4 animate-slide-in'
            >
                <div className="pref__system self-start animate__animated animate__fadeInLeft">
                    Let’s get to know about your preferences for a suitable match !
                </div>
                <div className="pref__system self-start animate__animated animate__fadeInLeft">
                    What is the age you preferred ?
                </div>
                <div className="pref__user self-end animate__animated animate__fadeInRight">
                    <div className="w-full flex justify-between text-xs">
                        <p className="text-center">From (Year)</p>
                        <p className="text-center">To (Year)</p>
                    </div>
                    <div className="w-full flex gap-5 mt-1">
                        <select
                            onChange={(e) => {
                                setFromAge(e.target.value)
                            }}
                            value={fromAge}
                        >
                            <option value="">Select</option>
                            {
                                Array.from({ length: 57 }, (_, index) => index + 21).map((item, index) => {
                                    return (
                                        <option value={item} key={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                        <select
                            onChange={(e) => {
                                setToAge(e.target.value);
                            }}
                            value={toAge}
                        >
                            <option value="" >Select</option>
                            {
                                Array.from({ length: 57 }, (_, index) => index + 21).map((item, index) => {
                                    return (
                                        <option value={item} key={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button className="pref__next"
                        onClick={() => {
                            setData({
                                ...data, age_preference: {
                                    from: fromAge,
                                    to: toAge
                                }
                            })
                            setError(false);
                        }}
                    >
                        Next
                    </button>
                </div>

                {
                    data.age_preference.from && data.age_preference.to && (
                        <>
                            <div className="pref__system self-start animate__animated animate__fadeInLeft">
                                What is the minimum height preferred? (Height is a physical attribute that may or may not define your compatiblity)
                            </div>

                            <div className="pref__user self-end animate__animated animate__fadeInRight">
                                <div className="w-full flex justify-between text-xs">
                                    <p className="text-center">Feet</p>
                                    <p className="text-center">Inch</p>
                                </div>
                                <div className="w-full flex gap-5 mt-1">
                                    <select onChange={(e) => setHeightFeet(e.target.value)} value={heightFeet}>
                                        <option value="">Select</option>
                                        {
                                            [4, 5, 6, 7].map((item, index) => {
                                                return (
                                                    <option value={item} key={item}>{item}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <select onChange={(e) => setHeightInch(e.target.value)} value={heightInch}>
                                        <option value="" >Select</option>
                                        {
                                            Array.from({ length: 11 }, (_, index) => index + 1).map((item, index) => {
                                                return (
                                                    <option value={item} key={item}>{item}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <button className="pref__next" onClick={() => {
                                    if (!heightFeet || !heightInch) return;

                                    setData({ ...data, height_preference: `${heightFeet}.${heightInch}` })
                                    setError(false);
                                }}>
                                    Next
                                </button>
                            </div>

                        </>
                    )
                }

                {/* Qualification */}
                {
                    data.height_preference && (
                        <>
                            <div className="pref__system self-start animate__animated animate__fadeInLeft">
                                What is the preferred education qualification?
                            </div>

                            <div className="pref__user self-end animate__animated animate__fadeInRight">
                                <div className="w-full flex gap-5 mt-1">
                                    <select
                                        onChange={(e) => setEducation(e.target.value)}
                                        value={education}
                                    >
                                        <option value="">Select</option>
                                        {
                                            ["Any", "School", "Graduation", "Post-Grad", "Ph.D"].map((item, index) => {
                                                return (
                                                    <option value={item} key={index}>{item}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <button className="pref__next"
                                    onClick={() => {
                                        setData({ ...data, education_preference: education })
                                        setError(false);
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )
                }


                {/* Select education_preference */}
                {
                    data.education_preference && (
                        <>
                            <div className="pref__system self-start animate__animated animate__fadeInLeft">
                                Preferred family background?
                            </div>

                            <div className="pref__user self-end animate__animated animate__fadeInRight">
                                <div className="w-full flex gap-5 mt-1">
                                    <select
                                        onChange={(e) => setFamilyBg(e.target.value)}
                                        value={familyBg}
                                    >
                                        <option value="">Select</option>
                                        {
                                            ["Any", "Business", "Service"].map((item, index) => {
                                                return (
                                                    <option value={item} key={index}>{item}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <button className="pref__next"
                                    onClick={() => {
                                        setData({ ...data, family_background_preference: familyBg })
                                        setError(false);
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )
                }

                {/* Income */}
                {
                    data.family_background_preference && (
                        <>
                            <div className="pref__system self-start animate__animated animate__fadeInLeft">
                                What is the income preferred?
                            </div>

                            <div className="pref__user self-end animate__animated animate__fadeInRight">
                                <div className="w-full flex gap-5 mt-1">
                                    <select
                                        onChange={(e) => setIncome(e.target.value)}
                                        value={income}
                                    >
                                        <option value="">Select</option>
                                        {
                                            incomes.map((item, index) => {
                                                return (
                                                    <option value={item} key={index}>{item}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <button className="pref__next"
                                    onClick={() => {
                                        setData({ ...data, personal_income_preference: income })
                                        setError(false);
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )
                }

                {/* Marital Status */}
                {
                    data.personal_income_preference && (
                        <>
                            <div className="pref__system self-start animate__animated animate__fadeInLeft">
                                What is the preferred marital status of your partner?
                            </div>

                            <div className="pref__user self-end animate__animated animate__fadeInRight">
                                <div className="w-full flex gap-5 mt-1">
                                    <select
                                        onChange={(e) => setMaritalStatus(e.target.value)}
                                        value={maritalStatus}
                                    >
                                        <option value="">Select</option>
                                        {
                                            marriedStatus.map((item, index) => {
                                                return (
                                                    <option value={item} key={index}>{item}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <button className="pref__next"
                                    onClick={() => {
                                        setData({ ...data, marriage_status_preference: maritalStatus })
                                        setError(false);
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )
                }

                {/* Relegion status */}
                {
                    data.marriage_status_preference && (
                        <>
                            <div className="pref__system self-start animate__animated animate__fadeInLeft">
                                What is the relegions you are open to
                            </div>

                            <div className="pref__user self-end animate__animated animate__fadeInRight">
                                <div className="w-full flex gap-5 mt-1">
                                    <SbCheckGroup
                                        value={selectRelegion}
                                        onChange={(v) => {
                                            setSelectedRelegion(pv => {
                                                return pv.includes(v) ? pv.filter(i => i !== v) : [...pv, v]
                                            })
                                        }}
                                    >
                                        {
                                            religionOptions.map((item, index) => {
                                                return (
                                                    <SbCheckItem value={item} title={item} key={index} />
                                                )
                                            })
                                        }
                                    </SbCheckGroup>
                                </div>
                                <button className="pref__next"
                                    onClick={() => {
                                        setData({ ...data, religion_preference: selectRelegion })
                                        setError(false);
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )
                }

                {/* Select Location */}
                {
                    data.religion_preference.length > 0 && (
                        <>
                            <div className="pref__system self-start animate__animated animate__fadeInLeft">
                                What is the preferred location?
                            </div>

                            <div className="pref__user self-end animate__animated animate__fadeInRight">
                                <div className="w-full flex gap-5 mt-1">
                                    <select
                                        onChange={(e) => {
                                            setData({ ...data, preferred_location: e.target.value })
                                            setError(false);
                                        }}
                                        value={data.preferred_location}
                                    >
                                        <option value="">Select</option>
                                        {
                                            location.map((item, index) => {
                                                return (
                                                    <option value={item} key={index}>{item}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
            <div className="flex items-center justify-between mt-5 gap-4 w-[80%] md:w-[30%] my-4">
                <button className="back__btn" onClick={back}>
                    <FaArrowLeft className="inline mr-1" />
                    Back
                </button>
                <button className='grad__btn' onClick={handleSave}>
                    Save
                </button>
            </div>
        </>
    )
}

export default Preferance