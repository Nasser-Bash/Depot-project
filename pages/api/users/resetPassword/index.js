import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";

export default async function  ResetPassword(req, res) {
  
  try {
    await dbConnect();
    if (req.method === 'POST') {
      const { resetToken, newPassword } = req.body;
  
      try {
        const user = await User.findOne({ resetToken });
  
        if (!resetToken) {
          return res.status(404).json({ error: ' reset token not found' });
        }
  
        if (user.resetTokenExpiration < Date.now()) {
          return res.status(401).json({ error: 'Reset token has expired' });
        }
  
        user.password = newPassword;
        user.resetToken = null;
        user.resetTokenExpiration = null;
        await user.save();
  
        return res.status(200).json({ message: 'Password reset successful' });
      } catch (error) {
        return res.status(500).json({ error: 'Failed to reset password' });
      }
    }else{
        res.status(405).json({ message: 'Method Not Allowed' });
      }
  } catch (error) {
    res.status(500).json({ message:error });
  }
}