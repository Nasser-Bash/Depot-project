import mongoose from 'mongoose';
const WishListSchema = new mongoose.Schema({
    userId:String,
    products: [
        {
          productId: Number
        }
      ]
});

 const WishList = mongoose.models.WishList || mongoose.model('WishList',WishListSchema);

export default WishList;