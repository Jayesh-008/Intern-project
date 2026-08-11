import { motion } from 'framer-motion'

export default function Hero({ onExplore }) {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black text-white flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_35%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="mb-4 sm:mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.42em] text-[#D4AF37]">Luxury Eyewear</p>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-7xl font-semibold leading-tight text-white">
            See the world with luminous clarity.
          </h1>
          <p className="mt-3 sm:mt-6 text-sm sm:text-xl leading-6 sm:leading-8 text-white/80">
            Discover premium frames crafted for elegance, comfort, and a refined everyday signature that feels effortlessly luxurious.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              href="#shop"
              onClick={onExplore}
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#111111] shadow-[0_20px_80px_rgba(212,175,55,0.22)] transition"
            >
              Shop Collection
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-4 sm:bottom-10 flex justify-center text-center text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/70 pointer-events-none">
        Scroll to Discover
      </div>
    </section>
  )
}
