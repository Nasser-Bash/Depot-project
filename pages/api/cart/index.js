import dbConnect from "@/utils/dbConnect";
import Cart from "../../../models/Cart";

export default async function  UserCart(req, res) {
  try {
    await dbConnect();
  
    if (req.method === 'POST') {
        const { userId, products  } = req.body;

      const newCart = new Cart({
        userId,
        products
      });

      const savedCart = await newCart.save();
      res.status(201).json(savedCart);
  
     
    }else if(req.method==='GET'){
        const userId = req.headers.user_id;
        const userCart = await Cart.findOne({ userId: userId });
        if(!userId){
          res.status(404).json({ message: "User's id not found" });
        }else{
        if (userCart) {

          res.status(200).json(userCart);
        } else {

          res.status(404).json({ message: "User's cart not found" });
        }
      }
    }
    else{
        res.status(405).json({ message: 'Method Not Allowed' });
      }
  } catch (error) {

    res.status(500).json({ message:error });
  }
 
}