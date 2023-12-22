import mongoose from 'mongoose';
const cartSchema = new mongoose.Schema({
    userId:String,
    products: [
        {
          productId: Number,
          quantity: Number
        }
      ]
});

 const Cart = mongoose.models.Cart || mongoose.model('Cart',cartSchema);

export default Cart;