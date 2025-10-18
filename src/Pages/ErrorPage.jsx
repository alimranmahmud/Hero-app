import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleNavigate=()=>{
        navigate(-1)
    }
    return (
        <div className='mx-auto'>
            <div className='text-center'>
                <img className='w-[500px] h-[500px] mx-auto' src="/src/assets/error-404.png" alt="" />
           <h1 className='text-4xl font-bold mb-2'>Oops, page not found!</h1>
           <p><small>The page you are looking for is not available.</small></p>
           <button onClick={handleNavigate} className='rounded mt-5 mx-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  px-3 py-2 text-white'>Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;