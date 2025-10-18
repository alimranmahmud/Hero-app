import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import { Link, useParams } from 'react-router';
import { ArrowDownToLine, Star, ThumbsUp } from 'lucide-react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AppDetails = () => {
const [btn,setBtn]= useState(true)
    const { products } = useProducts();
    const { id } = useParams()
    if (!products || products.length === 0) {
        return <p className='text-center text-gray-500'>Loading...</p>
    }

    const productFind = products.find(product => String(product.id) === String(id))
    if (!productFind) {
        return <p className='text-center text-red-500 py-10'>Product not found.</p>;
    }
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = productFind




    const handleAddToLocalStorage = () => {
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        let updatedList = []
        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === productFind.id)
            if (isDuplicate) {
                return alert("✅ already installed");

            }
            updatedList = [...existingList, productFind]
        } else {
            updatedList.push(productFind)
        }

        localStorage.setItem('wishlist', JSON.stringify(updatedList))
        alert("✅ Successfully installed!");
        setBtn(false)

    }


    return (
        <div className='bg-[#02000014]'>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p><small>Developed by: <span className='text-[#632EE3]'> {companyName}</span></small></p>
                        <hr className="border-t-1 border-gray-300 my-4 w-13/14 mx-auto" />

                        <div className='flex gap-20 items-center mb-10'>
                            <div>
                                <ArrowDownToLine color="#2fd057" />
                                <p><small>Downloads</small></p>
                                <h1 className='text-2xl font-bold'>{downloads}M</h1>
                            </div>
                            <div>
                                <Star />
                                <p><small>Average Ratings</small></p>
                                <h1 className='text-2xl font-bold'>{ratingAvg}</h1>
                            </div>
                            <div>
                                <ThumbsUp />
                                <p><small>Total Reviews</small></p>
                                <h1 className='text-2xl font-bold'>{reviews}</h1>
                            </div>
                        </div>

{
                        <button onClick={handleAddToLocalStorage} className='text-white rounded bg-[#00D3D2] py-2 px-3'>{btn?`Install Now (${size} MB)`:'Installed'}</button>


}
                    </div>
                </div>
            </div>

            <h1 className='text-2xl font-bold'>Ratings</h1>
            <ComposedChart
                layout="vertical"
                style={{ width: '100%', maxWidth: '900px', maxHeight: '70vh', aspectRatio: 1 / 1.618 }}
                responsive
                data={ratings}
                margin={{
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" width="auto" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" barSize={20} fill="#FF8811" />
            </ComposedChart>


            <div>
                <h1 className='text-2xl font-bold mt-5'>Description</h1>
                <p className='py-5'>{description}</p>

            </div>

        </div>
    );
};

export default AppDetails;