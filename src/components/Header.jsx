import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center text-white py-20 bg-gradient-to-r from-black via-gray-800 to-gray-900 animate-gradient-bg">
      <motion.p
        className="text-xs sm:text-sm md:text-base text-gray-300 tracking-widest uppercase"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Together with their families
      </motion.p>

      <motion.h1
        className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[Great Vibes] text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Suraj & Rutuja
      </motion.h1>

      <motion.div
        className="my-6 text-rose-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        💍
      </motion.div>

      <motion.p
        className="text-xs sm:text-sm md:text-lg text-gray-200 italic px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        Joyfully invite you to celebrate their wedding day
      </motion.p>

      <motion.div
        className="my-6 text-rose-400 text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a href="https://www.google.com/maps/dir//QMWG%2BMWJ+Mahalaxmi+Temple,+Mohi,+Maharashtra+415508/@17.8105393,74.6620912,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc3eb5c8c74c32d:0xc92a078f74e41433!2m2!1d74.6772614!2d17.7967133?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-400">
          <i className="fas fa-map-marker-alt"></i>
          <br />
          <span className="text-xs sm:text-sm md:text-base">View Location</span>
        </a>
      </motion.div>
    </header>
  );
}
