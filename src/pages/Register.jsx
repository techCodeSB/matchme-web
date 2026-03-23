import React, { useState } from 'react'
import LoginNav from '../components/LoginNav'
import PersonalInfo1 from './Register/PersonalInfo1'
import PersonalInfo2 from './Register/PersonalInfo2'
import PersonalInfo3 from './Register/PersonalInfo3'
import FamilyDetails from './Register/FamilyDetails'
import QualificationDetails from './Register/QualificationDetails'
import WorkDetails from './Register/WorkDetails'
import LifeStyle1 from './Register/LifeStyle1'
import LifeStyle2 from './Register/LifeStyle2'
import LifeStyle3 from './Register/LifeStyle3'
import LifeStyle4 from './Register/LifeStyle4'
import LifeStyle5 from './Register/LifeStyle5'

const Register = () => {
    const [step, setStep] = useState(1);

    return (
        <>
            <LoginNav register={true}/>
            <main className='login_main relative'>
                <div className='reg__circle__left hidden lg:block'></div>
                <div className='reg__circle__right hidden lg:block'></div>
                {/* Steps */}
                <div className='w-[30%] mx-auto flex items-center justify-between text-xs mt-6'>
                    <p>Step {step} of 12</p>
                    <p>Personal Info</p>
                </div>
                <div className='relative w-[30%] h-1.25 bg-gray-300 rounded-2xl overflow-hidden mx-auto mt-1 mb-2'>
                    <div className='absolute w-[30%] h-1.25 bg-red-500 rounded-2xl'></div>
                </div>

                {/* Main form */}
                {step === 1 && <PersonalInfo1 next={() => setStep(2)} />}
                {step === 2 && (
                    <PersonalInfo2
                        next={() => setStep(3)}
                        back={() => setStep(step - 1)}
                    />
                )}
                {step === 3 && (
                    <PersonalInfo3
                        next={() => setStep(4)}
                        back={() => setStep(step - 1)}
                    />
                )}
                {step === 4 && (
                    <FamilyDetails
                        next={() => setStep(5)}
                        back={() => setStep(step - 1)}
                    />
                )}
                {step === 5 && (
                    <QualificationDetails
                        next={() => setStep(6)}
                        back={() => setStep(step - 1)}
                    />
                )}
                {step === 6 && (
                    <WorkDetails
                        next={() => setStep(7)}
                        back={() => setStep(step - 1)}
                    />
                )}
                {step === 7 && (
                    <LifeStyle1
                        next={() => setStep(8)}
                        back={() => setStep(step - 1)}
                    />
                )}
                {step === 8 && (
                    <LifeStyle2
                        next={() => setStep(9)}
                        back={() => setStep(step - 1)}
                    />
                )}
                {step === 9 && (
                    <LifeStyle3
                        next={() => setStep(10)}
                        back={() => setStep(step - 1)}
                    />
                )}
                {step === 10 && (
                    <LifeStyle4
                        next={() => setStep(11)}
                        back={() => setStep(step - 1)}
                    />
                )}
                {step === 11 && (
                    <LifeStyle5
                        next={() => setStep(12)}
                        back={() => setStep(step - 1)}
                    />
                )}
            </main>
        </>
    )
}

export default Register