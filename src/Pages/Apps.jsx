import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../Components/ProductCard';
import NoAppsFound from '../Components/NoAppsFound';

const Apps = () => {

    const productsData = useProducts()
    const products = productsData.products

    const [search, setSearch] = useState("")
    const term = search.trim().toLocaleLowerCase()
    const searchProducts = term ? products.filter(product => product.title.toLocaleLowerCase().includes(term)) : products

    return (
        <div className='bg-[#02000014]'>

            <div className='text-center py-15'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='mt-3'><small className='text-[#627382]'>Explore All Apps on the Market Developed by  us. We code for Millions</small></p>
            </div>

            <div className='flex mb-10 justify-between items-center mx-auto w-13/14'>
                <p className='text-xl font-bold'>{searchProducts.length} Apps Found</p>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="search Apps" />
                </label>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 w-'>
                {
                    searchProducts.length != 0 ? searchProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                        : <NoAppsFound></NoAppsFound>
                }
            </div>
        </div>
    );
};

export default Apps;