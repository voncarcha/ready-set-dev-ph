import WaveLine from '@/components/global/WaveLine';
import SvgBackground from './SvgBackground';
import {
  LogoAmber,
  LogoAndreas,
  LogoBeanstalk,
  LogoJello,
  LogoPhp,
  LogoTraffictub,
} from './Logos';

const BrandSection = () => {
  return (
    <article className="relative bg-primary px-[15px] pt-[50px] pb-[100px]">
      <section className="mx-auto max-w-[1200px]">
        <header className="relative flex flex-col items-center justify-center text-center">
          <span className="absolute left-[50%] top-[-30px] translate-x-[-50%]">
            <SvgBackground />
          </span>
          <WaveLine />
          <div className="flex flex-col gap-[20px]">
            <h2 className="max-w-[700px] flex-1 text-[40px] font-bold leading-tight text-white">
              Brands we&apos;ve worked with
            </h2>
          </div>
        </header>
        <ul className="mt-[50px] flex flex-wrap items-center justify-around gap-[20px]">
          <li>
            <a href="https://jello-studios.com/" target="_blank" rel="noopener noreferrer">
              <LogoJello />
            </a>
          </li>
          <li>
            <a href="https://php.je/" target="_blank" rel="noopener noreferrer">
              <LogoPhp />
            </a>
          </li>
          <li>
            <a href="https://menelaou-law.com/" target="_blank" rel="noopener noreferrer">
              <LogoAndreas />
            </a>
          </li>
          <li>
            <a href="https://amberdigital.io/" target="_blank" rel="noopener noreferrer">
              <LogoAmber />
            </a>
          </li>
          <li>
            <a href="https://beanstalkventures.ltd/" target="_blank" rel="noopener noreferrer">
              <LogoBeanstalk />
            </a>
          </li>
          <li>
            <a href="https://ttub.hodl.limited" target="_blank" rel="noopener noreferrer">
              <LogoTraffictub />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default BrandSection;
