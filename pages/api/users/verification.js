import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";


export default async function  Verification(req, res) {
  
  try {
    await dbConnect();
    if (req.method === 'POST') {
      const { verificationCode } = req.body;
  
      if (!verificationCode) {
        return res.status(400).json({ error: 'Verification code is required' });
      }
  
      try {
        const user = await User.findOne({ verificationCode });
  
        if (!user || user.verificationCode !== verificationCode) {
          return res.status(400).json({ error: 'Incorrect verification code' });
        }
  
        user.active = true;
        await user.save();
  
        return res.status(200).json({ message: 'Account verified successfully' });
      } catch (error) {
        return res.status(500).json({ error: 'Failed to verify account' });
      }
    }else{
        res.status(405).json({ message: 'Method Not Allowed' });
      }
  } catch (error) {
    res.status(500).json({ message:error });
  }
}