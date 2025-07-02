'use server';

import { zeptoMailApi } from '@/api';
import contactFormEmailToCompany from '@/templates/contactFormEmailToCompany';
import { ContactFormData, ContactFormSchema } from '@/types';

export default async function sendEmail(contactFormData: ContactFormData) {
  const validatedSchema = ContactFormSchema.safeParse(contactFormData);

  if (!validatedSchema.success) {
    return {
      message: `Something went wrong. Please email info@php.je for concerns. Thank you!`,
    };
  }

  const dataToCompany = {
    from: {
      address: process.env.MAIL_CONTACT_FORM_RECEIVER_ADDRESS_FROM,
    },
    to: [
      {
        email_address: {
          address: process.env.MAIL_CONTACT_FORM_RECEIVER_ADDRESS_TO,
        },
      },
    ],
    subject: process.env.MAIL_CONTACT_FORM_SUBJECT,
    htmlbody: contactFormEmailToCompany(contactFormData),
  };

  try {
    await zeptoMailApi.post('', dataToCompany);

    return {
      message: 'Message Sent. Thank you!',
      success: true,
    };
  } catch (error: any) {
    if (error.response.data.error.message) {
      return {
        message: error.response.data.error.message,
        success: false,
      };
    }
    return {
      message: `Something went wrong. Please try again later. Thank you!`,
      success: false,
    };
  }
}
