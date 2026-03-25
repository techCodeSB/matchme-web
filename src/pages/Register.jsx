import { useState } from 'react';
import LoginNav from '../components/LoginNav';
import PersonalInfo1 from './Register/PersonalInfo1';
import PersonalInfo2 from './Register/PersonalInfo2';
import PersonalInfo3 from './Register/PersonalInfo3';
import FamilyDetails from './Register/FamilyDetails';
import QualificationDetails from './Register/QualificationDetails';
import WorkDetails from './Register/WorkDetails';
import LifeStyle1 from './Register/LifeStyle1';
import LifeStyle2 from './Register/LifeStyle2';
import LifeStyle3 from './Register/LifeStyle3';
import LifeStyle4 from './Register/LifeStyle4';
import LifeStyle5 from './Register/LifeStyle5';
import Gallery from './Gallery';
import Preferance from './Preferance';
import Nav from '../components/Nav';



const Register = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 13;
    const percentage = `${(step / totalSteps) * 100}%`;

    const nextStep = () => {
        if (step < totalSteps) {
            setStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(prev => prev - 1);
        }
    };


    return (
        <>
            <Nav active={2}/>

            <main className='login_main relative'>
                <div className='reg__circle__left'></div>
                <div className='reg__circle__right'></div>

                {/* Progress */}
                <div className='flex flex-col gap-2 w-full mt-6 mb-6'>
                    <div className='w-[70%] lg:w-[30%] mx-auto flex items-center justify-between text-xs'>
                        <p>Step {step} of {totalSteps}</p>
                        <p>Personal Info</p>
                    </div>

                    <div className='relative w-[70%] lg:w-[30%] h-1.5 bg-gray-300 rounded-2xl overflow-hidden mx-auto'>
                        <div
                            className="absolute h-1.5 bg-red-500 rounded-2xl transition-all duration-300"
                            style={{ width: percentage }}
                        ></div>
                    </div>
                </div>

                {/* Steps Rendering */}
                {step === 1 && <PersonalInfo1 next={nextStep} />}

                {step === 2 && <PersonalInfo2 next={nextStep} back={prevStep} />}

                {step === 3 && <PersonalInfo3 next={nextStep} back={prevStep} />}

                {step === 4 && <FamilyDetails next={nextStep} back={prevStep} />}

                {step === 5 && <QualificationDetails next={nextStep} back={prevStep} />}

                {step === 6 && <WorkDetails next={nextStep} back={prevStep} />}

                {step === 7 && <LifeStyle1 next={nextStep} back={prevStep} />}

                {step === 8 && <LifeStyle2 next={nextStep} back={prevStep} />}

                {step === 9 && <LifeStyle3 next={nextStep} back={prevStep} />}

                {step === 10 && <LifeStyle4 next={nextStep} back={prevStep} />}

                {step === 11 && <LifeStyle5 next={nextStep} back={prevStep} />}

                {step === 12 && <Gallery next={nextStep} back={prevStep} />}

                {step === 13 && <Preferance back={prevStep} />}
            </main>
        </>
    )
}

export default Register