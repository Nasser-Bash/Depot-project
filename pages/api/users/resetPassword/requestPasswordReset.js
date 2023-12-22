import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import validator from 'validator';
import { v4 as uuidv4 } from 'uuid';
import sendResetEmail from "@/utils/sendResetEmail";

export default async function  RequestPasswordResetHandler(req, res) {
        try {
            await dbConnect();
    if (req.method === 'POST') {
      const { email } = req.body;
      if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }
  
      try {
        const user = await User.findOne({ email });
  
        if (!user) {
          return res.status(404).json({ error: 'Email not found' });
        }
  
        const resetToken = uuidv4();
        user.resetToken = resetToken;
        user.resetTokenExpiration = Date.now() + 600000 ; 
        await user.save();
  
     
        sendResetEmail(email, resetToken);
  
        return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to request password reset' });
      }
    }
} catch (error) {
    res.status(500).json({ message:error });
  }
  };
  