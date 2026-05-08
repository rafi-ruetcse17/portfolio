import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Portfolio Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="margin-top: 20px;"><strong>Message:</strong></p>
          <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    }

    // Send email to receiver
    await transporter.sendMail(mailOptions)

    // Confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Receipt Confirmation: Your message to Rafi Alam`,
      text: `Hi ${name},\n\nThank you for reaching out! This is to confirm that I have received your message. I will review it and get back to you at my earliest convenience.\n\nBest regards,\nRafi Alam`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">Hello ${name},</h2>
          <p>Thank you for reaching out! This is to confirm that I have received your message through my portfolio website.</p>
          <p>I will review your inquiry and get back to you at my earliest convenience.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 0.9em; color: #666;">Best regards,<br><strong>Rafi Alam</strong></p>
        </div>
      `,
    }

    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
