import { products } from "@/public/products";


export default function Products(req, res) {
  if(req.method === 'GET'){
  res.status(200).json(products)
  }else{
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}