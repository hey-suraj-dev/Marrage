import { motion } from "framer-motion";

export default function InvitationCard() {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-2xl mx-auto">
        {/* Placeholder for invitation image */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
        >
          <div className="w-full bg-gradient-to-br from-pink-900 to-gray-900 rounded-xl shadow-2xl p-12 text-center text-white border-2 border-pink-500">
            <h2 className="text-3xl font-[Great Vibes] text-pink-300 mb-4">Wedding Invitation</h2>
            <p className="text-gray-300 mb-4">Image coming soon!</p>
            <p className="text-sm text-gray-400">You are invited to celebrate our special day</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
