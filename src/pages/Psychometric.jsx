import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import BottomNav from '../components/BottomNav';



const Psychometric = () => {
    const navigate = useNavigate();
    const token = Cookies.get("mm-token");
    const [questions, setQuestions] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [answerObj, setAnswerObj] = useState([]); //Set id with answer | only for UI;
    const [success, setSuccess] = useState(false);



    // Get questions;
    useEffect(() => {
        (async () => {
            try {
                const URL = `${import.meta.env.VITE_API_URL}/psychometric/get`;
                const req = await fetch(URL, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                const res = await req.json();
                if (req.status !== 200) {
                    if (token) alert(res.err);
                }

                setQuestions(res);
            } catch (err) {
                return alert("Something went wrong");
            }
        })()
    }, [])


    const saveAnswer = async (id, op) => {
        const prevObj = answerObj.filter((a) => a.id !== id);
        prevObj.push({
            id: id,
            question: questions[currentStep].question,
            answer: op.answer,
            option: op
        });
        setAnswerObj(prevObj);
    }


    const submitAnswer = async () => {
        const answerSheet = [];
        answerObj.forEach((a, _) => {
            let obj = {
                _id: a.id,
                question: a.question,
                options: [a.option]
            }
            answerSheet.push(obj)
        })


        try {
            const URL = `${import.meta.env.VITE_API_URL}/psychometric/add`;
            const req = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ questionAnswer: answerSheet, token })
            })
            const res = await req.json();
            if (req.status !== 200) {
                if (token) alert(res.err);
            }

            setSuccess(true);
            navigate("/")
            // setTimeout(() => {
            // }, 1000)

        } catch (err) {
            return alert("Something went wrong");
        }
    }


    return (
        <>
            <Nav active={3} />
            <main className='main pt-5'>
                <div className='reg__circle__left'></div>
                {
                    success ? (
                        <section className='z-50 w-[90%] md:w-[40%] flex flex-col items-center text-left lg:items-stretch gap-2 p-4 bg-white shadow-2xl rounded-xl'>
                            <DotLottieReact
                                src="path/to/animation.lottie"
                                loop
                                autoplay
                            />
                        </section>
                    ) : (
                        <section className='z-50 w-[90%] md:w-[40%] flex flex-col items-center text-left lg:items-stretch gap-2 p-4 bg-white shadow-2xl rounded-xl'>
                            <p className='text-right text-xs'>{currentStep + 1}/{questions.length}</p>
                            <h1 className='psycho__q'>{questions[currentStep]?.question}</h1>
                            <div className='w-full mt-5 flex flex-col gap-2'>
                                {
                                    questions[currentStep]?.options?.map((op, _) => {
                                        const isActive = answerObj.find(
                                            (a) =>
                                                a.id === questions[currentStep]._id &&
                                                a.answer === op.answer
                                        );

                                        return (
                                            <button
                                                key={_}
                                                className={`psycho__ans ${isActive ? "active" : ""}`}
                                                onClick={() => saveAnswer(questions[currentStep]._id, op)}
                                            >
                                                {op.answer}
                                                {
                                                    isActive && <FaCircleCheck color="white" size={20} />
                                                }
                                            </button>
                                        )
                                    })
                                }
                            </div>

                            <div className='w-full flex md:flex-row gap-2 mt-14'>
                                {
                                    currentStep > 0 && (
                                        <button
                                            onClick={() => setCurrentStep(currentStep - 1)}
                                            className='w-full rounded-full p-2 bg-[#07bdbd] hover:bg-[#2ba0a0] text-white text-sm cursor-pointer'>
                                            Back
                                        </button>
                                    )
                                }

                                <button
                                    onClick={() => {
                                        const currentQuestionId = questions[currentStep]?._id;

                                        const isAnswered = answerObj.find(
                                            (a) => a.id === currentQuestionId
                                        );

                                        if (!isAnswered) {
                                            return alert("Please choose an option");
                                        }

                                        if ((questions.length - 1) === currentStep) {
                                            submitAnswer();
                                        } else {
                                            setCurrentStep(currentStep + 1);
                                        }
                                    }}
                                    className='w-full rounded-full p-2 bg-[#2B6969] hover:bg-[#2d8181] text-white text-sm cursor-pointer'>
                                    Next
                                </button>
                            </div>
                        </section>
                    )
                }

            </main>
            <BottomNav active={3} />
        </>
    )
}

export default Psychometric