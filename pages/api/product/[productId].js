import { products } from "@/public/products";


export default function Productsdetail(req, res) {
  if (req.method === 'GET') {
    const { productId } = req.query;
 
    const product = products.find((item) => item.id === parseInt(productId));
    res.status(200).json(product)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}