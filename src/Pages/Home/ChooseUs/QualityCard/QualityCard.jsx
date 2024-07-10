import React from 'react';

const QualityCard = ({img, quality, isColored}) => {
    return (
        <div className='p-4 hover:bg-[#FF3811] flex flex-col justify-center items-center hover:text-white border'>
           <img src={img} alt="" className={isColored ? 'bg-[#FF3811]' : ''} /> 
           <p>{quality}</p>
        </div>
    );
};

export default QualityCard;