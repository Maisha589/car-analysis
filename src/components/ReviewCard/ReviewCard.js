import React from 'react';


const ReviewCard = (props) => {
    const { name, review, rating, img } = props.review;
    return (
        <div className='border-8 border-red-200 rounded m-4 p-5'>
            <img className='h-80 w-80 p-3 m-5 align-center' src={img} alt="" />
            <p className='text-3xl font-semibold'>{name}</p>
            <p className='text-1xl text-red-900 m-5 p-3'>{review}</p>
            <p>{rating}</p>
        </div>
    );
};

export default ReviewCard;