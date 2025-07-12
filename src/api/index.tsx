'use server';

import axios from 'axios';

export const emailClient = axios.create({
  baseURL: 'https://api.resend.com',
  headers: {
    Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  },
});
