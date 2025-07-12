import WaveLine from '@/components/global/WaveLine';
import Image from 'next/image';
import React from 'react';
import SvgBackground from './SvgBackground';
import { SERVICES } from './constants';

const ServicesSection = () => {
  return (
    <article className="overflow-hidden bg-primary py-[50px] md:py-[100px] " id="services">
      <section className="mx-auto max-w-[1200px]">
        <header className="relative mb-[50px] flex flex-col items-center justify-center text-center">
          <span className="absolute left-[50%] top-[-30px] translate-x-[-50%]">
            <SvgBackground />
          </span>
          <WaveLine />
          <section className="flex flex-col gap-[20px]">
            <h2 className="max-w-[700px] flex-1 text-[40px] font-bold leading-tight text-white">
              How we work
            </h2>
          </section>
        </header>
        <section className="flex flex-col gap-[50px] pt-[50px] lg:flex-row">
          <aside className="flex-1">
            <picture className="flex items-center justify-center">
              <Image
                src="/images/home/services.png"
                alt="Service 1"
                width={500}
                height={500}
              />
            </picture>
          </aside>
          <ul className="flex-1 px-[15px] text-center md:text-left">
            {SERVICES.map((service) => (
              <li
                key={service.id}
                className="mb-[20px] flex flex-col items-center gap-[10px] rounded-lg bg-[#292738] px-[30px] py-[25px] md:flex-row md:gap-[30px]"
              >
                <picture className="block">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </picture>
                <div className="flex-1">
                  <h3 className="mb-[8px] text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </article>
  );
};

export default ServicesSection;
