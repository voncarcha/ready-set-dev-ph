'use client';

import WaveLine from '@/components/global/WaveLine';
import SvgBackground from './SvgBackground';
import Image from 'next/image';
import { PROJECTS } from './constants';
import IconArrow from './IconArrow';
import { useState } from 'react';

const ProjectSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, 2);

  return (
    <article className="bg-primary py-[100px]">
      <section className="mx-auto max-w-[1200px]">
        <header className="relative mb-[50px] flex flex-col items-center justify-center text-center">
          <span className="absolute left-[50%] top-[-30px] translate-x-[-50%]">
            <SvgBackground />
          </span>
          <WaveLine />
          <section className="flex flex-col gap-[20px]">
            <h2 className="max-w-[700px] flex-1 text-[40px] font-bold leading-tight text-white">
              Checkout our Recently
              <br /> Completed Projects
            </h2>
          </section>
        </header>
        <ul className="mb-[40px] grid grid-cols-2 gap-[20px]">
          {displayedProjects.map((project) => (
            <li key={project.id} className="group relative">
              <section className="relative overflow-hidden rounded-[15px] bg-neutral-700">
                <picture className="block rounded-[15px]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={600}
                  />
                </picture>
                <aside className="absolute left-[50%] top-[50%] z-10 w-full max-w-[500px] translate-x-[-50%] translate-y-[-50%]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit Site"
                    aria-label="Visit Site"
                    className="hover:bg-gradient-app-hover bg-gradient-app mx-auto flex w-[350px] items-center justify-center gap-[10px] rounded-full px-[40px] py-[20px] text-center text-white"
                  >
                    <span className="text-[20px] font-bold">
                      {project.name}
                    </span>
                    <IconArrow />
                  </a>
                </aside>
                <div className="absolute bottom-0 left-0 h-full w-full rounded-[15px] bg-black opacity-80 group-hover:opacity-30"></div>
              </section>
            </li>
          ))}
        </ul>
        {!showAllProjects && PROJECTS.length > 2 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAllProjects(true)}
              className="bg-gradient-app hover:bg-gradient-app-hover h-[50px] rounded-[10px] px-[40px] text-[20px] font-bold text-white"
            >
              Show More
            </button>
          </div>
        )}
      </section>
    </article>
  );
};

export default ProjectSection;
