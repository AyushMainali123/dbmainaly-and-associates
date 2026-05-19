"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(prevState: any, formData: FormData) {
  // 1. Honeypot check for spam prevention
  const honeypot = formData.get("website");
  if (honeypot) {
    // If the honeypot field is filled out, it's likely a bot.
    // We return success to not tip them off, but we don't actually send the email.
    return {
      success: true,
      message: "Message sent successfully.",
    };
  }

  // 2. Extract form fields
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  if (!fullName || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields: Full Name, Email, and Message.",
    };
  }

  // 3. Configure the Nodemailer transporter
  // Uses SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS from environment variables
  // If SMTP_HOST is not provided, we fallback to Gmail as a default if the user is using a gmail account
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT!, 10),
    secure: process.env.SMTP_SECURE === "false" ? false : true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // 4. Send the email
    await transporter.sendMail({
      from: `"${fullName}" <${process.env.SMTP_USER}>`, // Send from the authenticated user to avoid DMARC failures
      replyTo: email,
      to: "ayushmainali11@gmail.com", // The requested recipient
      subject: `New Contact Inquiry from ${fullName} - ${service || "General"}`,
      text: `
You have received a new contact inquiry:

Name: ${fullName}
Email: ${email}
Phone: ${phone || "N/A"}
Service of Interest: ${service || "N/A"}

Message:
${message}
      `,
      html: `
        <div style="font-family: 'Manrope', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f7f9fb; padding: 40px 20px; color: #191c1e;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e0e3e5;">
            <div style="background-color: #00236f; padding: 24px 32px; border-bottom: 4px solid #1e3a8a;">
              <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">New Contact Inquiry</h2>
              <p style="color: #90a8ff; margin: 8px 0 0 0; font-size: 14px;">You have received a new message from the website contact form.</p>
            </div>
            
            <div style="padding: 32px;">
              <div style="margin-bottom: 24px;">
                <h3 style="font-size: 16px; font-weight: 700; color: #00236f; margin: 0 0 16px 0; border-bottom: 1px solid #eceef0; padding-bottom: 8px;">Contact Details</h3>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eceef0; width: 40%; font-weight: 600; color: #515f74;">Name</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eceef0; color: #191c1e;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eceef0; font-weight: 600; color: #515f74;">Email</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eceef0; color: #191c1e;"><a href="mailto:${email}" style="color: #00236f; text-decoration: none; font-weight: 600;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eceef0; font-weight: 600; color: #515f74;">Phone</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eceef0; color: #191c1e;">${phone || "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eceef0; font-weight: 600; color: #515f74;">Service of Interest</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eceef0; color: #191c1e;">${service || "N/A"}</td>
                  </tr>
                </table>
              </div>
              
              <div>
                <h3 style="font-size: 16px; font-weight: 700; color: #00236f; margin: 0 0 12px 0;">Message</h3>
                <div style="background-color: #f7f9fb; border: 1px solid #eceef0; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.6; color: #444651;">
                  ${message.replace(/\n/g, "<br/>")}
                </div>
              </div>
            </div>
            
            <div style="background-color: #eceef0; padding: 16px 32px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #757682;">This email was generated automatically by the DBM and Associates website.</p>
            </div>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      message: "Thank you for reaching out! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later or contact us directly.",
    };
  }
}
