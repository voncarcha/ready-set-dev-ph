import React from 'react';
import WhoBg from './WhoBg';
import WaveLine from '@/components/global/WaveLine';
import Image from 'next/image';

const Who = () => {
  return (
    <article className="w-full bg-primary px-[15px] py-[50px]">
      <section className="mx-auto flex max-w-[1200px] items-center justify-between">
        <header className="relative pl-[30px] pt-[30px]">
          <span className="absolute left-0 top-0">
            <WhoBg />
          </span>
          <WaveLine />
          <h2 className="max-w-[700px] text-[40px] font-medium leading-tight text-white">
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
