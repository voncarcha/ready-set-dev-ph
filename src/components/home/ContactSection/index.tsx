import React from 'react';
import WaveLine from '@/components/global/WaveLine';
import dynamic from 'next/dynamic';

import SvgBackground from './SvgBackground';
import ThankyouModal from './ThankyouModal';

const ContactForm = dynamic(() => import('./ContactForm'), {
  ssr: false,
});

const ContactSection = () => {
  return (
    <article
      className="relative w-full bg-primary px-[15px] py-[50px] overflow-hidden"
      id="contact"
    >
      <section className="mx-auto flex max-w-[1200px] flex-col justify-between lg:flex-row">
        <header className="relative max-w-[500px] ">
          <span className="absolute left-[-30px] top-[-30px]">
            <SvgBackground />
          </span>
          <WaveLine />
          <h2 className="max-w-[700px] text-[40px] font-bold leading-tight text-white">
            Ready to Work Together?
          </h2>
          <p className="mt-[20px] max-w-[700px] text-[20px] text-white">
            Send us a message and we will get back to you as soon as possible.
          </p>
        </header>
        <aside className="mb-[50px] mt-[30px] w-full max-w-[500px] lg:mt-0">
          <ContactForm />
        </aside>
        <ThankyouModal />
      </section>
    </article>
  );
};

export default ContactSection;
