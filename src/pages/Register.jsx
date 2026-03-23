import React, { useState } from 'react'
import LoginNav from '../components/LoginNav'
import PersonalInfo1 from './Register/PersonalInfo1'
import PersonalInfo2 from './Register/PersonalInfo2'
import PersonalInfo3 from './Register/PersonalInfo3'
import FamilyDetails from './Register/FamilyDetails'

const Register = () => {
    const [step, setStep] = useState(1);

    return (
        <>
            <LoginNav />
            <main className='login_main relative'>
                <div className='reg__circle__left hidden lg:block'></div>
                <div className='reg__circle__right hidden lg:block'></div>
                {/* Steps */}
                <div className='w-[30%] mx-auto flex items-center justify-between text-xs mt-3'>
                    <p>Step {step} of 2</p>
                    <p>Personal Info</p>
                </div>
                <div className='relative w-[30%] h-1.25 bg-gray-300 rounded-2xl overflow-hidden mx-auto mt-1 mb-4'>
                    <div className='absolute w-[30%] h-1.25 bg-red-500 rounded-2xl'></div>
                </div>

                {/* main form */}
                {step === 1 && <PersonalInfo1 next={() => setStep(2)} />}
                {
                    step === 2 && (
                        <PersonalInfo2
                            next={() => setStep(3)}
                            back={() => setStep(step - 1)}
                        />
                    )
                }
                {
                    step === 3 && (
                        <PersonalInfo3
                            next={() => setStep(4)}
                            back={() => setStep(step - 1)}
                        />
                    )
                }
                {
                    step === 4 && (
                        <FamilyDetails
                            next={() => setStep(5)}
                            back={() => setStep(step - 1)}
                        />
                    )
                }

            </main>
        </>
    )
}

export default Register