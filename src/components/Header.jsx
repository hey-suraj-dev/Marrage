export default function Header() {
  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center text-white py-20 bg-gradient-to-r from-black via-gray-800 to-gray-900">
      <p className="text-xs sm:text-sm md:text-base text-gray-300 tracking-widest uppercase">
        Together with their families
      </p>

      <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[Great Vibes] text-white">
        Suraj & Rutuja
      </h1>

      <div className="my-6 text-rose-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        💍
      </div>

      <p className="text-xs sm:text-sm md:text-lg text-gray-200 italic px-4">
        Joyfully invite you to celebrate their wedding day
      </p>

      <div className="my-6 text-rose-400 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
        <a href="https://www.google.com/maps/dir//QMWG%2BMWJ+Mahalaxmi+Temple,+Mohi,+Maharashtra+415508/@17.8105393,74.6620912,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc3eb5c8c74c32d:0xc92a078f74e41433!2m2!1d74.6772614!2d17.7967133?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-400">
          <i className="fas fa-map-marker-alt"></i>
          <br />
          <span className="text-xs sm:text-sm md:text-base">View Location</span>
        </a>
      </div>
    </header>
  );
}
