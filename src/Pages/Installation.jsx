import { ArrowDownToLine, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Installation = () => {

    const [installation, setInstalltion] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() => {
        const saveinstalltion = JSON.parse(localStorage.getItem('wishlist'))
        if (saveinstalltion) {
            setInstalltion(saveinstalltion)
        }
    }, [])


    const sortedOrder = (() => {
        if (sortOrder === 'asc') {
            return [...installation].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === 'dsc') {
            return [...installation].sort((a, b) => b.downloads - a.downloads)

        } else {
            return installation
        }
    }) ()


const handleRemove = id=>{
    const existingList  = JSON.parse(localStorage.getItem('wishlist'))
    let updatedList =  existingList.filter(p=>p.id!==id)
    // for ui instant update 

setInstalltion(updatedList)

    localStorage.setItem('wishlist',JSON.stringify(updatedList))
}
    return (
        <div className='bg-[#02000014] p-4 lg:p-0' >
            <div className='py-10 md:w-13/14 mx-auto'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>Your Installed Apps</h1>

                    <p className='mt-3'><small className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</small></p>
                </div>

                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-xl'>{installation.length} Apps Found</h2>


                    <label>
                        <select className='px-3 py-2 border  rounded ' value={sortOrder}
                            onChange={e => setSortOrder(e.target.value)}>

                            <option value="none">Sort by Size</option>
                            <option value="asc">Low-&gt;High</option>
                            <option value="dsc">High-&gt;Low</option>

                        </select>
                    </label>        


                </div>

                {
                    sortedOrder.map(installData => <div key={installData.id} className='bg-[#FFFFFF] p-2 flex justify-between items-center my-4 mx-2 rounded'>
                        <div className='flex items-center'>
                            <img className='w-20 h-20 bg-[#D9D9D9]' src={installData.image} alt="" />
                            <div className='ml-4'>
                                <p>{installData.title}</p>
                                <div className='flex items-center gap-5 mt-3'>
                                    <div className='flex items-center gap-1'>
                                        <ArrowDownToLine />
                                        <p>{installData.downloads}M</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <Star />
                                        <p>{installData.ratingAvg}</p>
                                    </div>
                                    <p>{installData.size} MB</p>
                                </div>

                            </div>
                        </div>
                        <button onClick={()=>handleRemove(installData.id)} className='text-white font-bold rounded bg-[#00D390] px-3 py-2'>Uninstall</button>

                    </div>)
                }

            </div>
        </div>
    );
};

export default Installation;