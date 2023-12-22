import dbConnect from "@/utils/dbConnect";
import WishList from "../../../models/WishList";

export default async function  UserWishList(req, res) {
  try {
    await dbConnect();
  
    if (req.method === 'POST') {
        const { userId, products  } = req.body;

      const newWishList = new WishList({
        userId,
        products
      });

      const savedWishList = await newWishList.save();
      res.status(201).json(savedWishList);
  
     
    }else if(req.method==='GET'){
        const userId = req.headers.user_id;
        const userWishList = await WishList.findOne({ userId: userId });
        if(!userId){
          res.status(404).json({ message: "User's id not found" });
        }else{
        if (userWishList) {

          res.status(200).json(userWishList);
        } else {

          res.status(404).json({ message: "User's WishList not found" });
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