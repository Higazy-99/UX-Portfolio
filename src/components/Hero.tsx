import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[var(--background)] px-4 sm:px-8 md:px-12 py-24 sm:py-32 overflow-hidden transition-colors duration-300">
      {/* Brutalist geometric decoration - top right */}
      <div className="absolute top-16 right-4 sm:right-12 md:right-20 pointer-events-none opacity-20">
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {/* Angular lines */}
          <div className="absolute w-32 sm:w-48 md:w-64 h-[1px] bg-[#00E0C7] rotate-45 origin-left" />
          <div className="absolute w-24 sm:w-36 md:w-48 h-[1px] bg-[var(--foreground)]/30 rotate-45 origin-left translate-y-8" />
          <div className="absolute w-16 sm:w-24 md:w-32 h-[1px] bg-[#00E0C7]/50 -rotate-45 origin-right translate-x-32 sm:translate-x-48 md:translate-x-64" />

          {/* Corner bracket */}
          <div className="absolute top-0 right-0 w-20 sm:w-28 md:w-36 h-20 sm:h-28 md:h-36 border-t-2 border-r-2 border-[#00E0C7]/40" />
        </motion.div>
      </div>

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Top section - Role badge */}
      <motion.div
        className="relative z-10 max-w-[1800px] w-full mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-2 h-2 rounded-full bg-[#00E0C7]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[#00E0C7] text-sm font-mono uppercase tracking-[0.2em]">
            UX Designer
          </span>
        </div>
      </motion.div>

      {/* Center - Giant Name */}
      <div className="relative z-10 max-w-[1800px] w-full mx-auto flex-1 flex flex-col justify-center -mt-8 sm:-mt-16">
        {/* First Name */}
        <motion.div className="overflow-hidden">
          <motion.h1
            className="text-[15vw] sm:text-[13vw] md:text-[11vw] font-black text-[var(--foreground)] leading-[0.85] tracking-[-0.04em] uppercase transition-colors"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Mohamed
          </motion.h1>
        </motion.div>

        {/* Last Name with accent */}
        <motion.div className="overflow-hidden flex items-baseline gap-4">
          <motion.h1
            className="text-[15vw] sm:text-[13vw] md:text-[11vw] font-black text-[var(--foreground)] leading-[0.85] tracking-[-0.04em] uppercase transition-colors"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Higazy
          </motion.h1>
          <motion.span
            className="text-[#00E0C7] text-[15vw] sm:text-[13vw] md:text-[11vw] font-black"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1, type: "spring" }}
          >
            .
          </motion.span>
        </motion.div>

        {/* Tagline + Location - stacked under hero content */}
        <motion.div
          className="mt-6 sm:mt-8 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-[var(--muted)] text-base sm:text-lg md:text-xl font-mono max-w-2xl transition-colors">
            I design experiences that put <span className="text-[var(--foreground)]">users first</span> — through research,
            journey mapping, and accessible design that works for everyone.
          </p>
          <span className="text-[var(--muted)]/60 text-sm font-mono block transition-colors">
            Based in Egypt • Available Worldwide
          </span>
        </motion.div>
      </div>

      {/* Bottom section - CTA & Scroll */}
      <motion.div
        className="relative z-10 max-w-[1800px] w-full mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        {/* CTA */}
        <motion.a
          href="#work"
          className="group flex items-center gap-4"
          whileHover={{ x: 10 }}
        >
          <span className="text-[var(--foreground)] text-lg sm:text-xl font-medium transition-colors">View my work</span>
          <motion.div
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#00E0C7] group-hover:border-[#00E0C7] transition-colors"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </motion.a>

        {/* Scroll indicator */}
        <div className="flex items-center gap-4 text-white/30">
          <motion.div
            className="w-[1px] h-16 bg-white/20"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs font-mono uppercase tracking-widest [writing-mode:vertical-rl]">Scroll</span>
        </div>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </section>
  );
}

export default Hero;
