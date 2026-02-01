# Email Verification Setup Instructions

## Required Environment Variables

Add these to your `.env` file:

```env
# Email Configuration for Nodemailer
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

## Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select your device
   - Click "Generate"
   - Copy the 16-character password
   - Use this as `EMAIL_PASSWORD` in your .env

3. **Update your .env file**:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   ```

## Alternative Email Providers

### SendGrid
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
```

### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

### Custom SMTP
```env
EMAIL_HOST=your-smtp-host
EMAIL_PORT=587
EMAIL_USER=your-username
EMAIL_PASSWORD=your-password
```

## Database Migration

Run this command to update your database schema:

```bash
npx prisma migrate dev --name add-email-verification
```

Or for production:

```bash
npx prisma migrate deploy
```

## Testing

1. Register a new user
2. Check your email for verification link
3. Click the verification link
4. You'll be redirected to login page with success message
5. Login with verified account

## Features Added

✅ Email verification on signup
✅ Verification token with 24-hour expiration
✅ Beautiful HTML email templates with red/pink gradient theme
✅ Welcome email after verification
✅ Login blocked until email is verified
✅ Verification status messages on login page
✅ Expired token handling
✅ Already verified account handling

## Security Notes

- Verification tokens are stored hashed in the database
- Tokens expire after 24 hours
- Users cannot login until email is verified
- App password is more secure than regular password for Gmail
- Never commit .env file to version control
