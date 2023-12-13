import Product from "@/models/Product";
import dbConnect from "../../utils/dbConnect";

export default async function  Products(req, res) {
  try {
    await dbConnect();
    const products = await Product.find();
    if(req.method === 'GET'){
      res.status(200).json( 
        products
      )
      }else{
        res.status(405).json({ message: 'Method Not Allowed' });
      }
  } catch (error) {

    res.status(500).json({ error: 'An error occurred while retrieving the products' });
  }
 
}