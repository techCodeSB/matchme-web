import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6'
import { LuDownload, LuUpload } from 'react-icons/lu'
import Cookies from 'js-cookie';


const Aggrement = ({ next, back }) => {
    const token = Cookies.get("mm-token");
    const [downloading, setDownloading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);



    const downloadAgreement = async () => {
        setDownloading(true);
        const URL = `${import.meta.env.VITE_API_URL}/users/view-agreement`;
        const req = await fetch(URL);
        const res = await req.blob();
        if (req.status !== 200) {
            return alert(res.err);
        }

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(res);
        link.download = 'agreement.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloading(false);
    }


    const handleUpload = async () => {
        const selectedType = ['pdf'];
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/pdf";

        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const fileType = file.type.split("/")[1];

            if (!selectedType.includes(fileType)) {
                alert("Invalid file type Allow:pdf only");
                return;
            }

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                setUploadedFile(reader.result);
            };
        };

        input.click();
        return;
    }


    const profileComplete = async () => {
        try{
            const URL = `${import.meta.env.VITE_API_URL}/users/update`;
            const req = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token, registration_status: "1"})
            });
            const res = await req.json();
            if (req.status !== 200) {
                return alert(res.err);
            }
        }catch(err){
            return alert("Something went wrong while completing the profile. Please try again.");
        }
    }


    const submitAgreement = async () => {
        if (!uploadedFile) {
            alert("Please upload the signed agreement before submitting.");
            return;
        }
        setUploading(true);

        try {
            const URL = `${import.meta.env.VITE_API_URL}/users/upload-agreement`;
            const req = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ file: uploadedFile, token })
            });
            const res = await req.json();
            if (req.status !== 200) {
                return alert(res.err || "Failed to upload the agreement. Please try again.");
            }

            await profileComplete();
            next();

        } catch (err) {
            return alert("Something went wrong while submitting the agreement. Please try again.");
        }finally{
            setUploading(false);
        }
    }



    return (
        <>
            <div className='w-[80%] md:w-[40%] bg-white shadow-xl rounded-xl flex flex-col
                gap-4 overflow-hidden p-4 animate-slide-in'
            >
                <div
                    onClick={downloadAgreement}
                    className='w-full border-dashed border-2 border-gray-300 rounded-xl flex items-center justify-center gap-2 p-4 cursor-pointer'>
                    <LuDownload />
                    {downloading ? <p>Downloading...</p> : <p>Download Agreement</p>}
                </div>
            </div>
            <div className='w-[80%] md:w-[40%] bg-white shadow-xl rounded-xl flex flex-col
                gap-4 overflow-hidden p-4 animate-slide-in'
            >
                <div
                    onClick={handleUpload}
                    className='w-full border-dashed border-2 border-gray-300 rounded-xl flex items-center justify-center gap-2 p-4 cursor-pointer'>
                    <LuUpload />
                    {uploading && <p>Uploading...</p> }
                    {!uploading && <p>{uploadedFile ? "File Uploaded" : "Upload Signed Agreement"}</p>}
                </div>

            </div>
            <div className="flex items-center justify-between mt-5 gap-4 w-[80%] md:w-[30%] my-4">
                <button className="back__btn" onClick={back}>
                    <FaArrowLeft className="inline mr-1" />
                    Back
                </button>
                <button className='grad__btn' onClick={submitAgreement}>
                    Save
                </button>
            </div>
        </>
    )
}

export default Aggrement