import React from 'react';
import WaveLine from '@/components/global/WaveLine';
import Image from 'next/image';
import SvgBackground from './SvgBackground';

const Who = () => {
  return (
    <article className="w-full bg-primary px-[15px] py-[50px]">
      <section className="mx-auto flex max-w-[1200px] items-center justify-between">
        <header className="relative">
          <span className="absolute left-[-30px] top-[-30px]">
            <SvgBackground />
          </span>
          <WaveLine />
          <h2 className="max-w-[700px] text-[40px] font-bold leading-tight text-white">
            We’re Awards Winning Modern Business Solutions Agency
          </h2>
          <p className="max-w-[700px] text-[20px] text-white mt-[20px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque epsa quae
            ab illo inventore veritatis architecto beatae
          </p>
        </header>

        <picture className="flex items-center justify-center max-w-[480px]">
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
