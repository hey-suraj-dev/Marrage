import { motion } from "framer-motion";

export default function Minvitation() {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-xl mx-auto bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700 text-center">
        <motion.h2
          className="text-sm tracking-widest text-gray-400 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          You Are Cordially Invited To The Wedding Of
        </motion.h2>

        <motion.h1
          className="text-5xl font-[Great Vibes] text-white mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Suraj & Rutuja
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-300 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Join us for a celebration of love, family, and forever.
        </motion.p>

        <div className="mt-6 text-gray-200">
          <p className="text-lg font-semibold">📅 May 16, 2025</p>
          <p className="text-sm text-gray-400 mt-1">Friday, 12:31 PM</p>
          <p className="mt-4">💒 Shree Mahalakshmi Mandir, Holl Mohi, Taluka: Man, District: Satara </p>
          <br /><br />
          <a href="https://www.google.com/maps/dir//QMWG%2BMWJ+Mahalaxmi+Temple,+Mohi,+Maharashtra+415508/@17.8105393,74.6620912,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc3eb5c8c74c32d:0xc92a078f74e41433!2m2!1d74.6772614!2d17.7967133?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">
          <i className="fas fa-map-marker-alt"></i> View Location
        </a>
        </div>
      </div>
    </section>
  );
}
