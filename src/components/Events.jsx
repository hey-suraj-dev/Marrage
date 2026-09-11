export default function Events() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Great Vibes] text-pink-100 text-center mb-8 drop-shadow-md">
        💐 Wedding Events
      </h2>

      <ul className="max-w-xl mx-auto space-y-4 text-sm sm:text-lg">
        <li className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl border border-pink-100 shadow-md">
          <strong className="text-pink-300">Sakharpuda:</strong> <span className="text-gray-300 block sm:inline">May 16, 2025</span>
          <span className="text-gray-400 block">09:00 AM</span>
        </li>
        <li className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl border border-pink-100 shadow-md">
          <strong className="text-pink-300">Haldi:</strong> <span className="text-gray-300 block sm:inline">May 16, 2025</span>
          <span className="text-gray-400 block">10:00 AM</span>
        </li>
        <li className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl border border-pink-100 shadow-md">
          <strong className="text-pink-300">Wedding:</strong> <span className="text-gray-300 block sm:inline">May 16, 2025</span>
          <span className="text-gray-400 block">12:31 PM</span>
        </li>
      </ul>
    </section>
  );
}
