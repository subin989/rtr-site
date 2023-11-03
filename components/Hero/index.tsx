import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero/hands.jpg')`,
        }}
      >
        <div className="text-left text-white px-4 sm:px-8 lg:px-16">
          <h1 className="mb-3 text-2xl font-bold leading-tight text-gradient-purple-darkpink sm:text-3xl md:text-4xl lg:text-5xl">
            Rotaract Club of Budanilkantha
          </h1>
          <p className="mb-8 text-base font-medium leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl lg:text-2xl">
            Your dedication to creating a better world is truly inspiring.
            Wishing you success and fulfillment in your noble journey! 🌟
          </p>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/apply"
              className="rounded-md bg-primary py-3 px-6 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Connect to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
