import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 md:py-40 bg-[var(--background)] px-4 sm:px-8 md:px-12 min-h-screen flex items-center transition-colors duration-300">
      <div className="max-w-[1800px] mx-auto w-full">
        {/* Giant CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-black text-[var(--foreground)] leading-[0.9] uppercase transition-colors">
            Let's<br />
            <span className="text-[#00E0C7]">Talk</span>.
          </h2>
        </motion.div>

        {/* Email */}
        <motion.div
          className="mt-16 sm:mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-[#00E0C7] text-xs font-mono uppercase tracking-widest mb-4 block">
            Email
          </span>
          <motion.a
            href="mailto:eng.mohamedhigazy@gmail.com"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] hover:text-[#00E0C7] transition-colors font-mono break-all"
            whileHover={{ x: 10 }}
          >
            eng.mohamedhigazy@gmail.com
          </motion.a>
        </motion.div>

        {/* Location & Social */}
        <motion.div
          className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div>
            <span className="text-[#00E0C7] text-xs font-mono uppercase tracking-widest mb-4 block">
              Location
            </span>
            <p className="text-xl sm:text-2xl text-[var(--muted)] font-mono transition-colors">
              Giza, Egypt
            </p>
          </div>

          <div>
            <span className="text-[#00E0C7] text-xs font-mono uppercase tracking-widest mb-4 block">
              Links
            </span>
            <div className="flex gap-6">
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/mohamedhigazy91/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[#00E0C7] transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                title="LinkedIn"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>

              {/* Behance */}
              <motion.a
                href="https://www.behance.net/mohamedhigazy92"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[#00E0C7] transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                title="Behance"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          className="mt-16 sm:mt-24 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            className="w-3 h-3 rounded-full bg-[#00E0C7]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-mono text-[var(--muted)] uppercase tracking-wider transition-colors">
            Available for new projects
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
