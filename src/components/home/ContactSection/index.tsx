import React from 'react';
import WaveLine from '@/components/global/WaveLine';
import dynamic from 'next/dynamic';

import SvgBackground from './SvgBackground';

const ContactForm = dynamic(() => import('./ContactForm'), {
  ssr: false,
});

const ContactSection = () => {
  return (
    <article className="w-full bg-primary px-[15px] py-[50px]">
      <section className="mx-auto flex max-w-[1200px] justify-between">
        <header className="relative max-w-[500px]">
          <span className="absolute left-[-30px] top-[-30px]">
            <SvgBackground />
          </span>
          <WaveLine />
          <h2 className="max-w-[700px] text-[40px] font-bold leading-tight text-white">
            Ready to Work Together In New Projects ?
          </h2>
          <p className="mt-[20px] max-w-[700px] text-[20px] text-white">
            Send us a message and we will get back to you as soon as possible.
          </p>
        </header>

        <aside className="w-full max-w-[500px]">
          <ContactForm />
        </aside>
      </section>
    </article>
  );
};

export default ContactSection;
