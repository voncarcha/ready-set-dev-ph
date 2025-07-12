'use server';

import { Resend } from 'resend';
import contactFormEmailToCompany from '@/templates/contactFormEmailToCompany';
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
      to: ['voncarcha@gmail.com'],
      subject: 'Contact Form Submission',
      html: contactFormEmailToCompany(contactFormData),
    });
    console.log(response);
    return {
      message: 'Message Sent. Thank you!',
      success: true,
    };
  } catch (error: any) {
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
