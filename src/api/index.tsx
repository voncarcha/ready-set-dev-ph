'use server';

import axios from 'axios';

export const zeptoMailApi = axios.create({
  baseURL: 'https://api.zeptomail.eu/v1.1/email',
  headers: {
    Authorization: `Zoho-enczapikey ${process.env.ZEPTO_MAIL_API_KEY}`,
  },
});
