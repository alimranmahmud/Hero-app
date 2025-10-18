import React from 'react';

const NoAppsFound = () => {
    return (
<div className=' text-center'>
            <div className='w-[300px] mx-auto' >
            <h1 className='text-4xl font-bold my-15'>No Apps Found</h1>
            <button className='px-3 py-2 bg-blue-900 mb-10 text-white rounded '>Show All Apps</button>
        </div>
</div>
    );
};

export default NoAppsFound;