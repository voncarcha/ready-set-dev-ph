'use server';

import { Resend } from 'resend';
import { ContactFormData, ContactFormSchema } from '@/types';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(contactFormData: ContactFormData) {
  const validatedSchema = ContactFormSchema.safeParse(contactFormData);

  if (!validatedSchema.success) {
    return {
      message: `Something went wrong.`,
    };
  }

  try {
    const response = await resend.emails.send({
      from: 'ReadySetDev <onboarding@resend.dev>',
      to: ['voncarcha@gmail.com', 'hello.maplrcarcha@gmail.com'],
      subject: 'Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${contactFormData.name}</p>
        <p><strong>Email:</strong> ${contactFormData.email}</p>
        <p><strong>Message:</strong> ${contactFormData.message}</p>
      `,
    });

    return {
      message: 'Message Sent. Thank you!',
      data: response.data,
      success: true,
    };
  } catch (error: any) {
    console.log(error);
    if (error.response.data.error.message) {
      console.log(error.response);
      return {
        message: `Something went wrong. Please try again later. Thank you!`,
        success: false,
      };
    }
    return {
      message: `Something went wrong. Please try again later. Thank you!`,
      success: false,
    };
  }
}
