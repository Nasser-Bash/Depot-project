import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import validator from 'validator';
import jwt from 'jsonwebtoken';
import sendVerificationEmail from "@/utils/sendEmail";
import { v4 as uuidv4 } from 'uuid';
export default async function  Users(req, res) {
  try {
    await dbConnect();
  
    if (req.method === 'POST') {
      const { email, password } = req.body;
      if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }
  
      try {
        const user = await User.findOne({ email, password });
  
        if (!user) {
          return res.status(404).json({ error: 'Email or password is invalid' });
        } else if (!user.active) {
          const verificationToken = uuidv4().replace(/-/g, '');
          const verificationCode = Math.floor(Math.random() * 9000) + 1000;
  
          // Update verification code in the user document
          user.verificationCode = verificationCode;
          await user.save();
  
          // Send verification email
          sendVerificationEmail(email, verificationToken, verificationCode);
  
          return res.status(403).json({ error: 'Your account is not active. Please check your email for the verification code.' });
        } else {
          const accessToken = jwt.sign({ id: user._id },process.env.JWT_SECRET_KEY, { expiresIn: '2w' });
          res.status(201).json({ user, accessToken });
        }
      } catch (error) {
        return res.status(500).json({ error: 'Failed to login' });
      }
    }else{
        res.status(405).json({ message: 'Method Not Allowed' });
      }
  } catch (error) {

    res.status(500).json({ message:error });
  }
 
}