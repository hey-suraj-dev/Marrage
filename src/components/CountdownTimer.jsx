import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const weddingDate = new Date("2025-05-16T12:31:00");

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 text-center bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Great Vibes] text-pink-400 mb-4 px-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        💍 Countdown to the Big Day
      </motion.h2>

      <motion.div
        className="flex justify-center gap-2 sm:gap-4 text-white text-lg sm:text-2xl md:text-3xl font-bold font-mono px-2 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </motion.div>
    </section>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="bg-rose-600 bg-opacity-20 px-2 sm:px-4 py-2 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-md border border-pink-300">
      <div className="text-xl sm:text-3xl md:text-4xl text-pink-300 glow">{value}</div>
      <div className="text-xs sm:text-sm mt-1 text-gray-300 uppercase">{label}</div>
    </div>
  );
}
