import React from 'react';
import useReviews from '../../useReview/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useReviews();

    // console.log(reviews);

    return (
        <div className='grid grid-cols-3 bg-slate-200'>
            {
                reviews.map(review => <ReviewCard
                    key={review.id}
                    review={review}
                ></ReviewCard>)
            }
        </div>
    );
};

export default Review;