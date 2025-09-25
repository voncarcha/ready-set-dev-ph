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
            We’re a lean collective built around the belief that great work
            doesn’t need middle layers or unnecessary fluff, just direct
            collaboration between clients and the people building their
            products.
          </p>
          <p className="mt-[20px] max-w-[700px] text-[20px] text-white">
            At the core is{' '}
            <a
              href="https://voncarcha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              Von Carcha
            </a>
            , a web developer and web designer with over a decade of
            experience in React, Next.js, WordPress, and UI/UX. Von’s background
            in both design and development allows him to translate ideas into
            clean, responsive, and user-focused solutions that balance
            creativity with technical precision.
          </p>
          <p className="mt-[20px] max-w-[700px] text-[20px] text-white">
            Alongside him is{' '}
            <a
              href="https://www.linkedin.com/in/hellomaplrcarcha/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              Maria Carcha
            </a>
            , our Client Success Manager, who makes sure every project feels
            effortless for our clients. From the first conversation to project
            delivery, Maria ensures clear communication, smooth coordination,
            and a genuinely enjoyable working relationship. She’s the bridge
            that keeps projects aligned with client goals while making the
            entire process stress-free.
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
