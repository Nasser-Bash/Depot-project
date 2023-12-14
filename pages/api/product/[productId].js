import Product from "@/models/Product";
import dbConnect from "../../../utils/dbConnect";


export default async function Productsdetail(req, res) {
  const { productId } = req.query;
  try{
    
      await dbConnect()
      const product = await Product.findOne({ id: productId })
      if (req.method === 'GET') {
        res.status(200).json(product)
      } else {
        res.status(405).json({ message: 'Method Not Allowed' });
      }
  }catch(error){
    console.log(error);
  }
  
}