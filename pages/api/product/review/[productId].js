import Review from "@/models/Review";
import dbConnect from "../../../../utils/dbConnect";

export default async function ProductsReview(req, res) {
  {
    try {
      await dbConnect(); 
  
      if (req.method === 'GET') {
        const { productId } = req.query;
        const reviews = await Review.find({ productId });
        res.status(200).json(reviews);
      } else if (req.method === 'POST') {
        const { productId, name, email, rate, comment } = req.body;
        const newReview = new Review({
          productId,
          name,
          email,
          rate,
          comment,
        });
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
      } else {
        res.status(405).json({ message: 'Method Not Allowed' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' }); // Send an appropriate error response to the client
    }
  }
  
}