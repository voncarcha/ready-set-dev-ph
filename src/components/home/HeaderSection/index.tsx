import Image from 'next/image';

const Header = () => {
  return (
    <header className="min-h-[900px] relative flex px-[15px] w-full justify-center bg-secondary bg-[url('/images/home/grid.png')] bg-cover bg-center bg-no-repeat">
      <article className="relative z-20 flex items-center justify-center gap-[50px] max-w-[1200px] mx-auto ">
        <section className='max-w-[500px]'>
          <h1 className="text-data-shadow leading-[1.1] text-[90px] font-semibold text-white" data-shadow="Coding Saves Lives">
            Coding Saves Lives
          </h1>
          <p className="text-white text-[24px] mt-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        <picture className="flex items-center justify-center max-w-[680px]">
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
