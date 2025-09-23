import React from 'react';
import WaveLine from '@/components/global/WaveLine';
import Image from 'next/image';
import SvgBackground from './SvgBackground';

const Who = () => {
  return (
    <article
      className="w-full overflow-hidden bg-primary px-[15px] py-[50px]"
      id="about"
    >
      <section className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-[20px] lg:flex-row">
        <header className="relative">
          <span className="absolute left-[-30px] top-[-30px]">
            <SvgBackground />
          </span>
          <WaveLine />
          <h2 className="max-w-[700px] text-[40px] font-bold leading-tight text-white">
            Who we are
          </h2>

          <p className="mt-[20px] max-w-[700px] text-[20px] text-white">
            We’re a lean collective of designers and developers who believe in
            doing things differently. No middle layers, no fluff—just direct
            collaboration between clients and the people building their
            products.
          </p>
          <p className="mt-[20px] max-w-[700px] text-[20px] text-white">
            Led by{' '}
            <a
              href="https://voncarcha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              Von Carcha
            </a>
            , a front-end developer and web designer with 10+ years of
            experience in React, Next.js, WordPress, and UI/UX, we deliver
            clean, responsive, and user-focused solutions. Supporting client
            relationships is{' '}
            <a
              href="https://www.linkedin.com/in/hellomaplrcarcha/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              Maria Carcha
            </a>
            , our Client Success Manager, ensuring smooth communication and
            successful outcomes.
          </p>
          <p className="mt-[20px] max-w-[700px] text-[20px] text-white">
            Together, we bridge the gap between design, development, and client
            needs—creating digital experiences that are lean, impactful, and
            built to last.
          </p>
        </header>

        <picture className="mt-[30px] flex max-w-[480px] items-center justify-center md:mt-0">
          <Image
            src="/images/home/hero-2.png"
            alt="bg-access"
            width={1008}
            height={1153}
            priority
            className="h-auto w-full"
            quality={100}
          />
        </picture>
      </section>
    </article>
  );
};

export default Who;
