'use client';

import { useForm } from 'react-hook-form';
import useGlobalStore from '@/hooks/useGlobalStore';
import { ContactFormData } from '@/types';
import { ContactFormSchema } from '@/types';
import sendEmail from '@/api/sendEmail';
import { zodResolver } from '@hookform/resolvers/zod';
import FormTextField from '@/components/global/FormTextField';
import { useState } from 'react';

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });
  const { setContactSuccess } = useGlobalStore();

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    const payload = data;

    const response = await sendEmail(payload);

    if (response.success) {
      setContactSuccess(true);
      reset();
    } else {
      alert(response?.message || 'Something went wrong');
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[20px]"
    >
      <FormTextField
        type="text"
        placeholder="*Full Name"
        name="name"
        register={register}
        error={errors.name}
      />
      <FormTextField
        type="email"
        placeholder="*Email"
        name="email"
        register={register}
        error={errors.email}
      />
      <FormTextField
        type="textarea"
        placeholder="*Message"
        name="message"
        register={register}
        error={errors.message}
      />
      <button
        type="submit"
        className={`${
          isLoading
            ? 'cursor-not-allowed bg-slate-900'
            : 'bg-gradient-app hover:bg-gradient-app-hover'
        } h-[50px] rounded-[10px] text-[20px] font-bold text-white`}
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default ContactForm;
