import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { X, ArrowUpRight, Clock, User, Target, Lightbulb, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { projects } from '../data/projects';

function ProjectCard({ project, index, onClick }: { project: typeof projects[0], index: number, onClick: () => void }) {
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      onClick={onClick}
      className="flex-shrink-0 w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[28vw] aspect-[4/3] relative group cursor-pointer"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      data-cursor="project"
    >
      {/* Project Number */}
      <span className="absolute -top-6 left-0 text-5xl sm:text-6xl font-black text-white/5 group-hover:text-[#00E0C7]/20 transition-colors duration-300 z-10">
        {projectNumber}
      </span>

      {/* Image Container */}
      <div className="relative w-full h-full overflow-hidden bg-neutral-900 rounded-sm">
        <motion.img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <span className="text-[#00E0C7] text-[10px] sm:text-xs font-mono uppercase tracking-widest">
            {project.role}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-[#00E0C7] transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Hover arrow */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#00E0C7] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUpRight className="w-4 h-4 text-black" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProjectDialog({ project, open, onClose }: { project: typeof projects[0] | null, open: boolean, onClose: () => void }) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border-white/10 text-white p-0 [&>button]:hidden" aria-describedby={undefined}>
        {/* Close button - floating */}
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/70 backdrop-blur flex items-center justify-center hover:bg-[#00E0C7] transition-colors group"
          whileHover={{ scale: 1.1, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          <X className="w-5 h-5 text-white group-hover:text-black" />
        </motion.button>

        {/* Hero Image - Full width */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title Section */}
          <div>
            <span className="text-[#00E0C7] text-xs font-mono uppercase tracking-widest">Case Study</span>
            <DialogHeader>
              <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">{project.title}</DialogTitle>
            </DialogHeader>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/5 p-4 rounded border border-white/10">
              <div className="flex items-center gap-2 text-[#00E0C7] mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-mono uppercase">Timeline</span>
              </div>
              <p className="text-white font-medium text-sm">{project.timeline}</p>
            </div>
            <div className="bg-white/5 p-4 rounded border border-white/10">
              <div className="flex items-center gap-2 text-[#00E0C7] mb-2">
                <User className="w-4 h-4" />
                <span className="text-xs font-mono uppercase">Role</span>
              </div>
              <p className="text-white font-medium text-sm">{project.role}</p>
            </div>
            <div className="bg-white/5 p-4 rounded border border-white/10">
              <div className="flex items-center gap-2 text-[#00E0C7] mb-2">
                <Target className="w-4 h-4" />
                <span className="text-xs font-mono uppercase">Client</span>
              </div>
              <p className="text-white font-medium text-sm truncate">{project.client}</p>
            </div>
          </div>

          {/* Methods Tags */}
          <div className="flex flex-wrap gap-2">
            {project.methods.map((method, idx) => (
              <span key={idx} className="text-xs px-3 py-1.5 bg-[#00E0C7]/10 border border-[#00E0C7]/30 text-[#00E0C7] rounded-full">
                {method}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
              <div className="w-1 h-5 bg-[#00E0C7]" />
              Overview
            </h3>
            <p className="text-white/70 leading-relaxed">{project.overview}</p>
          </div>

          {/* Challenge */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
              <div className="w-1 h-5 bg-[#00E0C7]" />
              Challenge
            </h3>
            <p className="text-white/70 leading-relaxed">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
              <Lightbulb className="w-5 h-5 text-[#00E0C7]" />
              Solution
            </h3>
            <p className="text-white/70 leading-relaxed">{project.solution}</p>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
              <CheckCircle className="w-5 h-5 text-[#00E0C7]" />
              Key Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.outcomes.map((outcome, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-[#00E0C7]/10 to-transparent p-5 rounded border border-[#00E0C7]/20 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <p className="text-3xl sm:text-4xl font-bold text-[#00E0C7]">{outcome.metric}</p>
                  <p className="text-sm text-white/50 mt-2">{outcome.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="text-xs px-3 py-1.5 border border-white/20 text-white/60 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function CaseStudies() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section id="work" ref={containerRef} className="relative h-[250vh] bg-[var(--background)] transition-colors duration-300">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section Header */}
        <div className="px-4 sm:px-8 md:px-12 mb-6 sm:mb-8">
          <motion.h2
            className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-black text-[var(--foreground)] leading-none uppercase transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Work<span className="text-[#00E0C7]">.</span>
          </motion.h2>
          <p className="text-[var(--muted)] text-sm font-mono mt-2 uppercase tracking-wider transition-colors">
            Selected case studies
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <motion.div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 will-change-transform"
          style={{ x }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}

          {/* End card */}
          <div className="flex-shrink-0 w-[50vw] sm:w-[30vw] md:w-[20vw] aspect-[4/3] flex items-center justify-center">
            <motion.a
              href="#contact"
              className="text-white/30 hover:text-[#00E0C7] transition-colors font-mono text-lg flex items-center gap-2"
              whileHover={{ x: 10 }}
            >
              More projects? <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-4 sm:left-8 md:left-12 right-4 sm:right-8 md:right-12">
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-xs font-mono">01</span>
            <div className="flex-1 h-[1px] bg-white/10">
              <motion.div
                className="h-full bg-[#00E0C7]"
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              />
            </div>
            <span className="text-white/30 text-xs font-mono">0{projects.length}</span>
          </div>
        </div>
      </div>

      {/* Project Dialog */}
      <ProjectDialog
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default CaseStudies;
