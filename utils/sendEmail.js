import nodemailer from 'nodemailer';

async function sendVerificationEmail(email, verificationToken,verificationCode) {

    const transporter = nodemailer.createTransport({
  
      service: 'Gmail',
      auth: {
        user: 'nasserbash8@gmail.com',
        pass: 'crqv ogpx iizu dmyb',
      },
    });
  
    // Define the verification URL
    const verificationURL = `http://localhost:3000/verify?token=${verificationToken}`;
  
    // Configure the email options
    const mailOptions = {
      from: 'nasserbash8@gmail.com',
      to: email,
      subject: 'Account Verification',
      text: `Please click the following link to verify your account: ${verificationURL}
     
      `,
      html: `<p>Please click the following link to verify your account:</p><a href="${verificationURL}">${verificationURL}
      </a>
        <p>
        and your verification Code is : ${verificationCode}
        </p>
      `,
    };
  
    // Send the email
    await transporter.sendMail(mailOptions);
  }
  export default sendVerificationEmail