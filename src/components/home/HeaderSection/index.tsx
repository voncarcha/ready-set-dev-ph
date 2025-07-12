import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative flex min-h-[900px] w-full justify-center bg-secondary bg-[url('/images/home/grid.png')] bg-cover bg-center bg-no-repeat px-[15px]">
      <article className="relative z-20 mx-auto flex max-w-[1200px] flex-col items-center justify-center md:gap-[50px] lg:flex-row">
        <section className="md:flex-1 pt-[180px] lg:pt-0">
          <h1 className="mb-[10px] text-[35px] md:text-[60px] font-semibold leading-[1.1] text-white">
            Ready To Build.
          </h1>
          <h1 className="mb-[10px] text-[35px] md:text-[60px] font-semibold leading-[1.1] text-white">
            Set to Launch.
          </h1>
          <h1 className="text-[35px] md:text-[60px] font-semibold leading-[1.1] text-white">
            Dev That Delivers.
          </h1>
          <Link
            href="/#contact"
            className="bg-gradient-app max-w-[250px] hover:bg-gradient-app-hover mt-[30px] flex items-center justify-center h-[50px] rounded-[10px] px-[40px] text-[20px] font-bold text-white"
          >
            Get in touch
          </Link>
          {/* <p className="mt-[10px] text-[24px] text-white">Ready, Set, Dev!</p> */}
        </section>
        <picture className="flex max-w-[680px] flex-1 items-center justify-center">
          <Image
            src="/images/home/hero-1.png"
            alt="bg-access"
            width={780}
            height={686}
            priority
            className="h-auto w-full"
            quality={100}
          />
        </picture>
      </article>

      <picture className="absolute bottom-0 left-0 z-10 flex items-center justify-center">
        <Image
          src="/images/home/wave.png"
          alt="bg-access"
          width={3836}
          height={1480}
          priority
          className="h-auto w-full"
        />
      </picture>
    </header>
  );
};

export default Header;
