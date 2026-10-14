import random
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timedelta

# In a production app, use Redis. For this MVP, we use an in-memory dict.
# Structure: {"email": {"otp": "123456", "expires_at": datetime, "user_data": {}}}
OTP_STORE = {}

def generate_otp() -> str:
    return str(random.randint(100000, 999999))

def send_otp_email(receiver_email: str, otp: str):
    # Configure your SMTP credentials (use environment variables in production)
    SMTP_SERVER = "smtp.gmail.com"
    SMTP_PORT = 587
    SENDER_EMAIL = "abhishekghadmode1@gmail.com" # Replace with your email
    SENDER_PASSWORD = "ddju jmcm vghc lout" # Use an App Password, not normal password

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Your Laxvira Verification Code"
    msg["From"] = SENDER_EMAIL
    msg["To"] = receiver_email

    html = f"""
    <html>
      <body style="font-family: Arial, sans-serif; color: #0f172a; text-align: center;">
        <h2>Laxvira Authentication</h2>
        <p>Your one-time password (OTP) is:</p>
        <h1 style="color: #C5A059; letter-spacing: 4px;">{otp}</h1>
        <p style="color: #64748b; font-size: 12px;">This code expires in 5 minutes.</p>
      </body>
    </html>
    """
    msg.attach(MIMEText(html, "html"))

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, receiver_email, msg.as_string())
        server.quit()
    except Exception as e:
        print(f"Failed to send email: {e}")
        # In development, you might want to raise an HTTPException here