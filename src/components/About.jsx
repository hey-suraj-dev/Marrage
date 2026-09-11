export default function About() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-12 px-6 text-center text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Great Vibes] text-pink-400 mb-4 drop-shadow-md">
        Our Story
      </h2>

      <div className="flex justify-center mb-6">
        <span className="text-3xl">🫰</span>
      </div>

      <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
        Suraj and Rutuja met in November 2024 and have been inseparable ever since. 
        Their journey has been filled with love and unforgettable memories.
        <br />
        Join us as we celebrate their New story. 🐱
      </p>

      <div className="bg-white bg-opacity-10 rounded-3xl shadow-2xl max-w-xl mx-auto mt-10 p-6 backdrop-blur-md border border-pink-300">
        <h3 className="text-2xl sm:text-3xl font-[Great Vibes] text-pink-300">Suraj & Rutuja</h3>
        <p className="mt-2 text-pink-100 italic text-sm sm:text-base">Together forever, hand in hand.</p>
      </div>
    </section>
  );
}
