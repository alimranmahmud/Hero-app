import React from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../Components/ProductCard';
import { Link } from 'react-router';

const Home = () => {

    const { products } = useProducts();

    const sliceProduct = products.slice(0,8)
    console.log(sliceProduct)



    return (
        <div className='bg-[#02000014]'>
            <h1 className='pt-20 text-[#001931]  font-bold lg:text-6xl  text-3xl  text-center'>We Build <br />
                <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className='text-center mt-7  text-xl text-[#001931]      '>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center items-center gap-4  mt-7'>
                <Link to='https://play.google.com/store/games?hl=en'>
                <button className=' btn flex justify-center items-center gap-3'>
                    <img className='w-7' src="/src/assets/playStore.png" alt="" />
                    <h2>Google Play</h2>
                </button>
                </Link>
                <Link to='https://www.apple.com/app-store/'>
                <button className=' btn flex justify-center items-center gap-3'>
                    <img className='w-7' src="/src/assets/appStore.png" alt="" />
                    <h2>App Store</h2>
                </button>
                </Link>
            </div>

            <div className='mt-10'>
                <img className='mx-auto ' src="/src/assets/hero.png" alt="" />

                <div className='text-white text-center py-20 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                    <h1 className='font-bold lg:text-4xl text-xl'>Trusted By Millions, Built For You</h1>

                    <div className=' mt-10 flex justify-around items-center'>
                        <div className='text-center'>
                            <p><small>Total Downloads</small></p>
                            <h1 className='lg:text-6xl lg:font-extrabold text-2xl font-bold'>29.6M</h1>
                            <p><small>21% More Then last Month</small></p>
                        </div>
                        <div className='text-center'>
                            <p><small>Total Reviews</small></p>
                            <h1 className='lg:text-6xl lg:font-extrabold text-2xl font-bold'>906K</h1>
                            <p><small>46% More Then last Month</small></p>
                        </div>
                        <div className='text-center'>
                            <p><small>Active Apps</small></p>
                            <h1 className='lg:text-6xl lg:font-extrabold text-2xl font-bold'>132+</h1>
                            <p><small>31 More Will Launch</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center space-y-3 mt-15 mb-15'>
                <h1 className=' text-[#001931] font-bold text-3xl'>Trending Apps</h1>
                <p><small className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</small></p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 w-11/12 mx-auto'>
                {
                    sliceProduct.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
            <div className='flex justify-center py-15'>

                <Link to="/apps" className='text-white px-3 py-2 rounded  font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>Show All</Link>

            </div>
        </div>
    );
};

export default Home;     