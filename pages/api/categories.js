
import Category from "@/models/Category";
import dbConnect from "../../utils/dbConnect"
export default async function Categories(req, res) {
      try{
          await dbConnect();
          const categories= await Category.find()
          if(req.method === 'GET'){
            res.status(200).json(categories)
            }else{
              res.status(405).json({ message: 'Method Not Allowed' });
            }
      }catch(error){
        console.log(error);
      }
  
  }
  