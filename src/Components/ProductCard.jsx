import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({product}) => {
   const {id,image,title,ratingAvg,downloads}=product
    return (
     <Link to={`/appDetails/${id}`}>
        <div className='p-3 bg-white rounded shadow-sm hover:scale-105 transition ease-in-out'>  
            <div className='bg-[#D9D9D9] h-[316px] rounded'>
                <img className=' rounded w-full h-full object-cover' src={image} alt="" />
            </div>
            <p className='my-3 font-bold'>{title}</p>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-1 bg-[#F1F5E8] p-1'>
                    <ArrowDownToLine size={20} color="#00D390" strokeWidth={1.75} />
                    <p className='  text-[#00D390]'>{downloads}M</p>
                </div>

                <div className='flex justify-center items-center gap-1 bg-[#FFF0E1]  p-1'>
                    <Star size={20} color="#FF8811" strokeWidth={1.25} />
                    <p className=' text-[#FF8811]'> {ratingAvg}</p>
                </div>
            </div>
            
        </div>
     </Link>
    );
};

export default ProductCard;