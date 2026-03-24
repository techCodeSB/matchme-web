import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import 'animate.css';
import { SbCheckGroup, SbCheckItem } from "../components/SbCheck";

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
    const [heightInch, setHeightInch] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [fromAge, setFromAge] = useState();
    const [toAge, setToAge] = useState();
    const [education, setEducation] = useState('');
    const [familyBg, setFamilyBg] = useState('');
    const [income, setIncome] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [selectRelegion, setSelectedRelegion] = useState([]);


    const [data, setData] = useState({
        agePref: { from: '', to: '' }, height: "", education: "", familyBg: "",
        personalIncome: "", marriageStatus: "", relegion: [], location: ""
    })



    return (
        <>
            <div className='w-[80%] md:w-[40%] bg-white shadow-xl rounded-xl flex flex-col
            gap-4 overflow-hidden p-4 animate-slide-in'>
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
                                Array.from({ length: 24 }, (_, index) => index + 21).map((item, index) => {
                                    return (
                                        <option value={item} key={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                        <select
                            onChange={(e) => {
                                setToAge(e.target.value)
                            }}
                            value={toAge}
                        >
                            <option value="" >Select</option>
                            {
                                Array.from({ length: 24 }, (_, index) => index + 21).map((item, index) => {
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
                                ...data, agePref: {
                                    from: fromAge,
                                    to: toAge
                                }
                            })
                        }}
                    >
                        Next
                    </button>
                </div>

                {
                    data.agePref.from && data.agePref.to && (
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
                                <button className="pref__next" onClick={() => setData({ ...data, height: `${heightFeet}.${heightInch}` })}>
                                    Next
                                </button>
                            </div>

                        </>
                    )
                }

                {/* Qualification */}
                {
                    data.height && (
                        <>
                            <div className="pref__system self-start animate__animated animate__fadeInLeft">
                                What is the preferred education qualification?
                            </div>

                            <div className="pref__user self-end animate__animated animate__fadeInRight">
                                <div className="w-full flex justify-between text-xs">
                                    <p className="text-center">Education</p>
                                </div>
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
                                        setData({ ...data, education: education })
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )
                }


                {/* Select Education */}
                {
                    data.education && (
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
                                        setData({ ...data, familyBg: familyBg })
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
                    data.familyBg && (
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
                                        setData({ ...data, personalIncome: income })
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
                    data.personalIncome && (
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
                                        setData({ ...data, marriageStatus: income })
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
                    data.marriageStatus && (
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
                                        setData({ ...data, relegion: selectRelegion })
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
                    data.relegion.length > 0 && (
                        <>
                            <div className="pref__system self-start animate__animated animate__fadeInLeft">
                                What is the preferred location?
                            </div>

                            <div className="pref__user self-end animate__animated animate__fadeInRight">
                                <div className="w-full flex gap-5 mt-1">
                                    <select
                                        onChange={(e) => setData({ ...data, location: e.target.value })}
                                        value={data.location}
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
                <button className='grad__btn' onClick={next}>
                    Continue
                </button>
            </div>
        </>
    )
}

export default Preferance