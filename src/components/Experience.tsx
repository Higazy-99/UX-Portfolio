import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const experiences = [
  {
    id: 1,
    year: '2024',
    title: 'UX Designer',
    company: 'Freelance',
    description: 'User research, journey mapping, accessibility audits',
    current: true,
  },
  {
    id: 2,
    year: '2023',
    title: 'UX/CX Designer',
    company: 'TAM',
    description: 'Led UX for Saudi Ministry of Culture, Golf Saudi, KSRelief',
    current: false,
  },
  {
    id: 3,
    year: '2022',
    title: 'Senior CX Designer',
    company: 'Innovadigits',
    description: 'Customer experience strategy and service design',
    current: false,
  },
  {
    id: 4,
    year: '2022',
    title: 'UX Instructor',
    company: 'Developer Career',
    description: 'Teaching user research methods and design thinking',
    current: true,
  },
];

function ExperienceRow({ experience, index }: { experience: typeof experiences[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-12 gap-4 py-8 border-b border-[var(--border)] group"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Year */}
      <div className="col-span-2 sm:col-span-1">
        <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[var(--foreground)]/10 group-hover:text-[#00E0C7]/30 transition-colors">
          {experience.year}
        </span>
      </div>

      {/* Title & Company */}
      <div className="col-span-10 sm:col-span-5 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--foreground)] group-hover:text-[#00E0C7] transition-colors">
          {experience.title}
        </h3>
        <span className="text-sm font-mono text-[var(--muted)] mt-1">
          {experience.company}
          {experience.current && (
            <span className="ml-2 text-[#00E0C7]">• Current</span>
          )}
        </span>
      </div>

      {/* Description */}
      <div className="col-span-12 sm:col-span-6 flex items-center">
        <p className="text-sm sm:text-base text-[var(--muted)] font-mono">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 sm:py-32 md:py-40 bg-[var(--background)] px-4 sm:px-8 md:px-12 transition-colors duration-300">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <motion.h2
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-black text-[var(--foreground)] leading-none uppercase mb-16 sm:mb-24 transition-colors"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Experience<span className="text-[#00E0C7]">.</span>
        </motion.h2>

        {/* Experience List */}
        <div>
          {experiences.map((experience, index) => (
            <ExperienceRow key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
