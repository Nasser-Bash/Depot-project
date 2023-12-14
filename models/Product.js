import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    id : Number,
    categories: [
        {
          id: Number,
          name: String,
        },
      ],
    price: Number,
    mainImage: String,
    galleryimages: [String],
    description: String,
    addtionalInfo: {
      weight: String,
      dimensions: String,
      color: String,
      material: String,
    },
});

const Product = mongoose.models.Product || mongoose.model('Product',productSchema);

export default Product;