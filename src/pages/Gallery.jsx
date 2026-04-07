import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { RiAddLine } from "react-icons/ri";
import Cookies from 'js-cookie';
import useGetFormDB from '../hooks/useGetFromDB';
import Loading from "../components/Loading";


const Gallery = ({ next, back }) => {
    const token = Cookies.get("mm-token")
    const getDB = useGetFormDB();
    const selectedType = ['png', 'jpg', 'jpeg'];
    const [error, setError] = useState(null);
    // Base64Data
    const [data, setData] = useState({
        one: "", two: "", three: "", four: '', five: "", six: ''
    })
    const formDataRef = useRef(new FormData());
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        (async () => {
            const dbData = await getDB({ image: '' });
            const pathObj = {};

            if (dbData.image) {
                for (let k of Object.keys(dbData.image)) {
                    pathObj[k] = `${import.meta.env.VITE_API_URL}/users/upload/${dbData.image[k]}`;
                }

                setData(pathObj);
            }

        })()
    }, [])


    const handleUpload = async (which) => {
        let file;

        if (window.showOpenFilePicker) {
            const [fileHandle] = await window.showOpenFilePicker();
            file = await fileHandle.getFile();
        } else {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/png, image/jpeg";

            input.onchange = async (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const fileType = file.type.split("/")[1];

                if (!selectedType.includes(fileType)) {
                    alert("Invalid file type Allow:[jpg, png, jpeg] only");
                    return;
                }

                formDataRef.current.append(which, file);

                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    const allData = { ...data };
                    allData[which] = reader.result;

                    setData({ ...allData });
                    setError(false);
                };
            };

            input.click();
            return;
        }


        const fileType = file.type.split("/")[1];
        if (!selectedType.includes(fileType)) {
            alert("Invalid file type Allow:[jpg, png, jpeg] only");
            return;
        };

        //Set Files only;
        formDataRef.current.append(which, file);

        // Set Base64 data
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            const allData = { ...data };
            allData[which] = reader.result;

            setData({ ...allData });
            setError(false);
        }

    }


    const handleContinue = async () => {
        let newErrors = false;

        // * Check first - five fields;
        // Object.keys(data).map((k, i) => {
        //     if (data[k] === "" && k !== "six") {
        //         newErrors = true;
        //         return;
        //     }
        // })

        // * Check only first fields;
        if (data['one'] === "" || !data['one']) {
            newErrors = true;
        }
        setError(newErrors);
        if (newErrors) return;

        try {
            // If no new files uploaded skip API call
            if (![...formDataRef.current.keys()].length) {
                return next();
            }

            setLoading(true);
            const URL = `${import.meta.env.VITE_API_URL}/users/upload`;
            formDataRef.current.append("token", token.toString());
            const req = await fetch(URL, {
                method: 'POST',
                body: formDataRef.current
            })
            const res = await req.json();
            if (req.status !== 200) {
                return alert(res.err);
            }

            next();

        } catch (err) {
            return alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <h1 className="text-2xl font-bold mt-4">Your Gallery</h1>
            <p className="text-xs w-62.5 lg:w-full text-center">A glimpse into your world. Please upload 5 photos that capture your true self.</p>
            {error && <span className='error__text mt-2'>Please upload Main Portrait photo</span>}

            <div className='w-[80%] md:w-[50%] flex flex-col lg:flex-row items-center gap-4 overflow-hidden p-4 animate-slide-in mt-5'>
                <div className="main__photo relative" onClick={() => handleUpload('one')}>
                    {data.one && <img src={data.one} className="absolute top-0 left-0 w-full h-full" />}
                    <div className="w-10 h-10 rounded-full bg-red-100 grid place-items-center">
                        <MdOutlineAddAPhoto className="text-red-700 " size={20} />
                    </div>
                    <h1 className="mt-2 font-bold text-lg">Main Portrait</h1>
                    <p className="text-xs text-gray-500 w-50 text-center mt-2">This is the first photo others will see. Make it count.</p>
                </div>
                <div className="all__photo">
                    <div onClick={() => handleUpload('two')}>
                        {data.two && <img src={data.two} className="absolute top-0 left-0 w-full h-full" />}
                        <p className="photo__num__badge">1</p>
                        <RiAddLine />
                    </div>
                    <div onClick={() => handleUpload('three')}>
                        {data.three && <img src={data.three} className="absolute top-0 left-0 w-full h-full" />}
                        <p className="photo__num__badge">2</p>
                        <RiAddLine />
                    </div>
                    <div onClick={() => handleUpload('four')}>
                        {data.four && <img src={data.four} className="absolute top-0 left-0 w-full h-full" />}
                        <p className="photo__num__badge">3</p>
                        <RiAddLine />
                    </div>
                    <div onClick={() => handleUpload('five')}>
                        {data.five && <img src={data.five} className="absolute top-0 left-0 w-full h-full" />}
                        <p className="photo__num__badge">4</p>
                        <RiAddLine />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-5 gap-4 w-[80%] md:w-[30%] my-4">
                <button className="back__btn" onClick={back}>
                    <FaArrowLeft className="inline mr-1" />
                    Back
                </button>
                <button className='grad__btn flex items-center gap-2' onClick={handleContinue}>
                    Continue {loading && <Loading />}
                </button>
            </div>
        </>
    )
}

export default Gallery