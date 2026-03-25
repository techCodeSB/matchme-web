import { FaArrowLeft } from "react-icons/fa6";
import { SbRadio, SbRadioGroup } from "../../components/SbRadio";
import { useEffect, useState } from "react";


const PersonalInfo3 = ({ next, back }) => {
    const [heightFeet, setHeightFeet] = useState(null);
    const [heightInch, setHeightInch] = useState(null);
    const [weight, setWeight] = useState(null);
    const [weightUnit, setWeightUnit] = useState(null);

    const [error, setError] = useState({});
    const [data, setData] = useState({
        "whatsapp_number": "",
        "height": "",
        "weight": "",
        "should_weight_display_on_profile": "",
        "marital_status": "",
        "eating_preferences": "",
        "do_have_kids": "",
        "marital_status_from_year": "",
        "marital_status_to_year": "",
    })

    useEffect(() => {
        if (!heightFeet || !heightInch) return;
        setData({ ...data, height: `${heightFeet?.trim()}.${heightInch?.trim()}` });
    }, [heightFeet, heightInch])

    useEffect(() => {
        if (!weight || !weightUnit) return;
        setData({ ...data, weight: `${weight?.trim()}.${weightUnit}` });
    }, [weight, weightUnit])

    // Whatsapp number validation
    const isValidPhone = (value) => {
        const regex = /^\+?\d+$/;
        return regex.test(value);
    };


    const handleContinue = async () => {
        const newErrors = {};

        for (let k of Object.keys(data)) {
            if (data[k] === "") {
                if(k === "marital_status_from_year" && data['marital_status'] == "never-married") 
                    continue
                if(k === "marital_status_to_year" && data['marital_status'] == "never-married") 
                    continue
                if(k === "do_have_kids" && data['marital_status'] == "never-married") 
                    continue
                if(k === "should_weight_display_on_profile") 
                    continue

                newErrors[k] = true;
            }
        }

        if (!isValidPhone(data.whatsapp_number)) {
            newErrors['whatsapp_number'] = " Only numbers and +symbol allowed (no space, (),-)Ex. (+919876543210, +143890999909)";
        }

        setError((prev) => ({
            ...prev,
            ...newErrors
        }));
        if (Object.keys(newErrors).length > 0) return;

        try {
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
                    <p>Enter Whatsapp Number</p>
                    <input type="text"
                        placeholder='+9194XXX, +143XXX'
                        value={data.whatsapp_number}
                        onChange={(e) => {
                            setData({ ...data, whatsapp_number: e.target.value });
                            setError({ ...error, whatsapp_number: false });
                        }}
                    />
                    {error.whatsapp_number && <span className='error__text'>This field is required</span>}
                    {typeof (error.whatsapp_number) === "string" && <span className='error__text'>
                        {error.whatsapp_number}
                    </span>}
                </div>

                <div className="input__field">
                    <p>Enter Your Height</p>
                    <div className="flex items-center gap-4">
                        <div className='input__field w-full'>
                            <input type="text"
                                placeholder='Feet'
                                value={heightFeet}
                                onChange={(e) => {
                                    setHeightFeet(e.target.value);
                                    setError({ ...error, height: false });
                                }}
                            />
                        </div>
                        <div className='input__field w-full'>
                            <input type="text"
                                placeholder='Inch'
                                value={heightInch}
                                onChange={(e) => {
                                    setHeightInch(e.target.value);
                                    setError({ ...error, height: false });
                                }}
                            />
                        </div>
                    </div>
                    {error.height && <span className='error__text'>This field is required</span>}
                </div>

                <div className="input__field">
                    <p>Enter Your Weight</p>
                    <div className="flex items-center gap-4">
                        <div className='input__field w-full'>
                            <input type="text"
                                placeholder='Weight'
                                value={weight}
                                onChange={(e) => {
                                    setWeight(e.target.value);
                                    setError({ ...error, weight: false });
                                }}
                            />
                        </div>
                        <select
                            value={weightUnit}
                            onChange={(e) => {
                                setWeightUnit(e.target.value);
                                setError({ ...error, weight: false });
                            }}
                        >
                            <option value="">Select unit</option>
                            <option value="Kgs">Kgs</option>
                            <option value="lbs">lbs</option>
                        </select>
                    </div>
                    {error.weight && <span className='error__text'>This field is required</span>}
                </div>
                <div className="w-full flex items-center gap-2 text-xs">
                    <input type="checkbox" id="dontProfile"
                        value={data.should_weight_display_on_profile}
                        onChange={(e) => {
                            setData({ ...data, should_weight_display_on_profile: e.target.checked })
                            setError({ ...error, should_weight_display_on_profile: false });
                        }}
                    />
                    <label htmlFor="dontProfile">Don't display on my profile</label>
                </div>


                <div className="text-[13px]">
                    <p className="mb-1">Tell us about your eating preferences?</p>
                    <SbRadioGroup
                        value={data.eating_preferences}
                        onChange={(v) => {
                            setData({ ...data, eating_preferences: v })
                            setError({ ...error, eating_preferences: false });
                        }} 
                        name="etingPref"
                    >
                        <SbRadio title="Veg" value="veg" />
                        <SbRadio title="Non-Veg" value="non-veg" />
                        <SbRadio title="Vegan" value="vegan" />
                    </SbRadioGroup>
                    {error.eating_preferences && <span className='error__text'>This field is required</span>}
                </div>

                <div className='input__field'>
                    <p>Select Marital Status</p>
                    <select
                        value={data.marital_status}
                        onChange={(e) => {
                            setData({
                                ...data, marital_status: e.target.value, do_have_kids: '',
                                marital_status_from_year: '', marital_status_to_year: ''
                            })
                            setError({
                                ...error, marital_status: false, do_have_kids: false,
                                marital_status_from_year: false, marital_status_to_year: false
                            });
                        }}
                    >
                        <option value="">Select</option>
                        <option value="never-married">Never Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                    </select>
                    {error.marital_status && <span className='error__text'>This field is required</span>}
                </div>
                {
                    (data.marital_status && data.marital_status !== "never-married") && (
                        <>
                            <div className="flex gap-4 items-center">
                                <div className='input__field w-full'>
                                    <p>Select From</p>
                                    <input type="month"
                                        value={data.marital_status_from_year}
                                        onChange={(e) => {
                                            setData({ ...data, marital_status_from_year: e.target.value })
                                            setError({ ...error, marital_status_from_year: false });
                                        }}
                                    />
                                    {error.marital_status_from_year && <span className='error__text'>This field is required</span>}
                                </div>
                                <div className='input__field w-full'>
                                    <p>Select To</p>
                                    <input type="month"
                                        value={data.marital_status_to_year}
                                        onChange={(e) => {
                                            setData({ ...data, marital_status_to_year: e.target.value })
                                            setError({ ...error, marital_status_to_year: false });
                                        }}
                                    />
                                    {error.marital_status_to_year && <span className='error__text'>This field is required</span>}
                                </div>
                            </div>

                            <div className="text-[13px]">
                                <p className="mb-1">Do you have kids?</p>
                                <SbRadioGroup
                                    value={data.do_have_kids}
                                    onChange={(v) => {
                                        setData({ ...data, do_have_kids: v })
                                        setError({ ...error, do_have_kids: false });
                                    }} 
                                    name="kids"
                                >
                                    <SbRadio title="Yes" value="Yes" />
                                    <SbRadio title="No" value="No" />
                                </SbRadioGroup>
                                {error.do_have_kids && <span className='error__text'>
                                    This field is required
                                </span>}
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

export default PersonalInfo3