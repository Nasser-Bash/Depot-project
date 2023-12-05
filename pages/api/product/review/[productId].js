
let reviews = [];
export default function ProductsReview(req, res) {
    if (req.method === 'POST') {
        const productId = req.query.productId; 
        const review = { ...req.body, productId }; 
          reviews.push(review);
          res.status(201).json(review);
          res.status(400).json({ message: 'userId not found in the request body' });
        } else if (req.method === 'GET') {
        const { productId } = req.query;
        const productReviews = reviews.filter(review => review.productId.toString() === productId);
        res.status(200).json(productReviews)
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }