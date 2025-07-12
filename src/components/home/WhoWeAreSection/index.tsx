import React from 'react';
import WaveLine from '@/components/global/WaveLine';
import Image from 'next/image';
import SvgBackground from './SvgBackground';

const Who = () => {
  return (
    <article className="w-full bg-primary px-[15px] py-[50px] overflow-hidden" id="about">
      <section className="mx-auto flex gap-[20px] max-w-[1200px] items-center justify-between flex-col lg:flex-row">
        <header className="relative">
          <span className="absolute left-[-30px] top-[-30px]">
            <SvgBackground />
          </span>
          <WaveLine />
          <h2 className="max-w-[700px] text-[40px] font-bold leading-tight text-white">
            Who we are
          </h2>
          <p className="mt-[20px] max-w-[700px] text-[20px] text-white">
            We’re not a traditional agency—we’re a collective of senior
            designers and engineers who’ve come together to do things
            differently.
          </p>
          <p className="mt-[20px] max-w-[700px] text-[20px] text-white">
            After years of working inside bloated agencies, slow-moving
            enterprises, and disconnected teams, we decided to build something
            better: A lean, expert-driven studio where the people who speak with
            clients are the same ones who design and ship the work.
          </p>
          <p className="mt-[20px] max-w-[700px] text-[20px] text-white">
            We believe in decentralizing the product workforce—no unnecessary
            layers, no middlemen, no fluff. Just real collaboration between
            clients and the people building their products.
          </p>
        </header>

        <picture className="flex max-w-[480px] items-center justify-center mt-[30px] md:mt-0">
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
