import nodemailer from 'nodemailer';
import crypto from 'crypto';

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Generate OTP
export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP verification email
export async function sendOTPEmail(
  email: string,
  name: string | null,
  otp: string
) {
  const mailOptions = {
    from: `"FinScope" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Verify Your Email - FinScope',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .container {
              background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
              border-radius: 10px;
              padding: 40px;
              text-align: center;
            }
            .logo {
              background: linear-gradient(to right, #DC2626, #EF4444, #EC4899);
              color: white;
              width: 60px;
              height: 60px;
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 32px;
              font-weight: bold;
              margin: 0 auto 20px;
            }
            h1 {
              color: #ffffff;
              margin: 20px 0;
            }
            .gradient-text {
              background: linear-gradient(to right, #DC2626, #EF4444, #EC4899);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              font-weight: bold;
            }
            p {
              color: #d1d5db;
              margin: 15px 0;
            }
            .otp-box {
              background: rgba(255, 255, 255, 0.1);
              border: 2px solid #EC4899;
              border-radius: 12px;
              padding: 30px;
              margin: 30px 0;
            }
            .otp-code {
              font-size: 48px;
              font-weight: bold;
              color: #ffffff;
              letter-spacing: 10px;
              margin: 10px 0;
              font-family: 'Courier New', monospace;
            }
            .warning {
              background: rgba(239, 68, 68, 0.1);
              border: 1px solid rgba(239, 68, 68, 0.3);
              border-radius: 8px;
              padding: 15px;
              margin: 20px 0;
              color: #fca5a5;
              font-size: 14px;
            }
            .footer {
              color: #9ca3af;
              font-size: 12px;
              margin-top: 30px;
            }
            .divider {
              height: 1px;
              background: rgba(255, 255, 255, 0.1);
              margin: 30px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">F</div>
            <h1>Welcome to <span class="gradient-text">FinScope</span>!</h1>
            <p>Hi ${name || 'there'},</p>
            <p>Thank you for signing up! Please use the verification code below to verify your email address.</p>
            
            <div class="otp-box">
              <p style="color: #EC4899; margin: 0; font-weight: bold;">Your Verification Code</p>
              <div class="otp-code">${otp}</div>
              <p style="color: #9ca3af; font-size: 14px; margin-top: 10px;">Valid for 10 minutes</p>
            </div>
            
            <div class="warning">
              ⚠️ Never share this code with anyone. FinScope will never ask you for this code.
            </div>
            
            <div class="divider"></div>
            
            <div class="footer">
              <p>If you didn't create this account, please ignore this email.</p>
              <p>© 2026 FinScope. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

// Send welcome email after verification
export async function sendWelcomeEmail(email: string, name: string | null) {
  const mailOptions = {
    from: `"FinScope" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Welcome to FinScope!',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .container {
              background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
              border-radius: 10px;
              padding: 40px;
              text-align: center;
            }
            .logo {
              background: linear-gradient(to right, #DC2626, #EF4444, #EC4899);
              color: white;
              width: 60px;
              height: 60px;
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 32px;
              font-weight: bold;
              margin: 0 auto 20px;
            }
            h1 {
              color: #ffffff;
              margin: 20px 0;
            }
            .gradient-text {
              background: linear-gradient(to right, #DC2626, #EF4444, #EC4899);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              font-weight: bold;
            }
            p {
              color: #d1d5db;
              margin: 15px 0;
            }
            .features {
              text-align: left;
              margin: 30px 0;
            }
            .feature {
              margin: 15px 0;
              color: #d1d5db;
            }
            .button {
              display: inline-block;
              background: linear-gradient(to right, #DC2626, #EF4444, #EC4899);
              color: white;
              text-decoration: none;
              padding: 15px 40px;
              border-radius: 8px;
              margin: 20px 0;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">F</div>
            <h1>🎉 Welcome to <span class="gradient-text">FinScope</span>!</h1>
            <p>Hi ${name || 'there'},</p>
            <p>Your email has been verified! You're all set to start tracking markets.</p>
            
            <div class="features">
              <div class="feature">✅ Real-time crypto & stock prices</div>
              <div class="feature">📊 Interactive charts & analytics</div>
              <div class="feature">👀 Personal watchlists</div>
              <div class="feature">💼 Portfolio management</div>
              <div class="feature">📰 Latest market news</div>
            </div>
            
            <a href="${process.env.NEXTAUTH_URL}/dashboard" class="button">Start Trading</a>
            
            <p style="color: #9ca3af; font-size: 12px; margin-top: 30px;">© 2026 FinScope. All rights reserved.</p>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error };
  }
}
