import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const skills = [
  'User Research',
  'Journey Mapping',
  'Service Design',
  'Usability Testing',
  'Accessibility (WCAG)',
  'Stakeholder Workshops',
  'Information Architecture',
  'CX Strategy',
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 md:py-40 bg-[var(--background)] px-4 sm:px-8 md:px-12 transition-colors duration-300">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Giant Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[20vw] sm:text-[16vw] lg:text-[12vw] font-black text-[var(--foreground)] leading-none uppercase transition-colors">
              About<span className="text-[#00E0C7]">.</span>
            </h2>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-[var(--foreground)] leading-relaxed transition-colors">
              I design experiences by <span className="text-[#00E0C7]">understanding people</span>.
            </p>

            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed font-mono transition-colors">
              Through user research, journey mapping, and service design, I help teams build products that work for everyone. I've led UX initiatives for Saudi Ministry of Culture, Golf Saudi, and King Salman Foundation.
            </p>

            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed font-mono transition-colors">
              I believe in letting research guide design decisions, not assumptions. Accessibility isn't an afterthought—it's built into everything I do.
            </p>

            {/* Skills */}
            <div className="pt-8 border-t border-[var(--border)]">
              <span className="text-[#00E0C7] text-xs font-mono uppercase tracking-widest mb-6 block">
                Core Skills
              </span>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 border border-[var(--border)] text-[var(--muted)] text-sm font-mono hover:border-[#00E0C7] hover:text-[#00E0C7] transition-colors cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
