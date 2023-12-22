import nodemailer from 'nodemailer';

async function sendResetEmail(email, resetToken) {

    const transporter = nodemailer.createTransport({
  
      service: 'Gmail',
      auth: {
        user: 'nasserbash8@gmail.com',
        pass: 'crqv ogpx iizu dmyb',
      },
    });
  
    // Define the ResetPassword URL
    const ResetPasswordURL = `http://localhost:3000/reset_password?token=${resetToken}`;
  
    // Configure the email options
    const mailOptions = {
      from: 'nasserbash8@gmail.com',
      to: email,
      subject: ' Reset Password',
      text: `Please click the following link to Reset your Password: ${ResetPasswordURL}
     
      `,
      html: `<p>Please click the following link to Reset your Password:</p><a href="${ResetPasswordURL}">${ResetPasswordURL}
      </a>
      `,
    };
  
    // Send the email
    await transporter.sendMail(mailOptions);
  }
  export default sendResetEmail