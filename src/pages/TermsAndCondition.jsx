import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import Cookies from 'js-cookie';


const TermsAndCondition = ({ next, back }) => {
    const token = Cookies.get("mm-token");
    const [acceptTerms, setAcceptTerms] = useState(false);


    const submitTerms = async () => {
        if (!acceptTerms) {
            alert("Please accept Terms and Condition");
            return;
        }

        try {
            const URL = `${import.meta.env.VITE_API_URL}/users/update`;
            const req = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token, registration_status: "1", accept_terms_condition: acceptTerms
                })
            });
            const res = await req.json();
            if (req.status !== 200) {
                return alert(res.err);
            }

            next();
        } catch (err) {
            return alert("Something went wrong while completing the profile. Please try again.");
        }
    }


    return (
        <>
            <div className='w-[80%] md:w-[40%] bg-white shadow-xl rounded-xl flex flex-col
                gap-4 overflow-hidden p-4 animate-slide-in'
            >
                <div className='text-xs max-h-75 overflow-y-auto'>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>

                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                    </p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                    </p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>

                <div >
                    <input type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => {
                            setAcceptTerms(e.target.checked);
                        }}
                        id='termsAndCondition'
                    />
                    <label htmlFor="termsAndCondition" className='ml-2'>I agree to the Terms and Conditions</label>
                </div>
            </div>
            <div className="flex items-center justify-between mt-5 gap-4 w-[80%] md:w-[30%] my-4">
                <button className="back__btn" onClick={back}>
                    <FaArrowLeft className="inline mr-1" />
                    Back
                </button>
                <button className='grad__btn' onClick={submitTerms}>
                    Save
                </button>
            </div>
        </>
    )
}

export default TermsAndCondition;