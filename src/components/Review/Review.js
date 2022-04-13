import React from 'react';
import useReviews from '../../useReview/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useReviews();

    // console.log(reviews);

    return (
        <div className='bg-slate-200'>
            <div>
                <h2 className='text-4xl mb-3 p-5'>Our beloved customer <span className='font-bold text-red-900 '>Review</span></h2>
            </div>
            <div className='grid grid-cols-3 '>
                {
                    reviews.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;