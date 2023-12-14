import mongoose from 'mongoose';

const productReview = new mongoose.Schema({
    productId: {
        type: Number,
        ref: 'Product',
      },
    name: String,
    email: String,
    rate: Number,
    comment: String
});

const Review = mongoose.models.Review || mongoose.model('Review',productReview);

export default Review;