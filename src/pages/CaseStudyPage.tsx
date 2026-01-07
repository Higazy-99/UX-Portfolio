import { useParams, Link } from 'wouter';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Calendar, User, Building2 } from 'lucide-react';
import { projects } from '../data/projects';

export function CaseStudyPage() {
    const { slug } = useParams<{ slug: string }>();

    const projectId = parseInt(slug || '0', 10);
    const currentIndex = projects.findIndex((p) => p.id === projectId);
    const project = projects[currentIndex];

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <Link href="/" className="text-[#00E0C7] hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    return (
        <motion.div
            className="min-h-screen bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Back Button */}
            <div className="fixed top-6 left-4 sm:left-8 z-50">
                <Link
                    href="/#work"
                    className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-sm"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>
            </div>

            {/* Hero Image */}
            <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
                <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 -mt-32 relative z-10">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="text-[#00E0C7] text-xs font-mono uppercase tracking-widest">
                        Case Study
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mt-2 uppercase leading-tight">
                        {project.title}
                    </h1>
                </motion.div>

                {/* Meta Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 py-8 border-t border-b border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-[#00E0C7] mt-0.5" />
                        <div>
                            <span className="text-white/40 text-xs font-mono uppercase">Timeline</span>
                            <p className="text-white font-mono mt-1">{project.timeline}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <User className="w-5 h-5 text-[#00E0C7] mt-0.5" />
                        <div>
                            <span className="text-white/40 text-xs font-mono uppercase">Role</span>
                            <p className="text-white font-mono mt-1">{project.role}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-[#00E0C7] mt-0.5" />
                        <div>
                            <span className="text-white/40 text-xs font-mono uppercase">Client</span>
                            <p className="text-white font-mono mt-1">{project.client}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Methods */}
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="flex flex-wrap gap-2">
                        {project.methods.map((method) => (
                            <span
                                key={method}
                                className="px-3 py-1 border border-[#00E0C7]/30 text-[#00E0C7] text-xs font-mono uppercase"
                            >
                                {method}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Content Sections */}
                <div className="mt-16 space-y-16">
                    {/* Overview */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase mb-6">Overview</h2>
                        <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
                            {project.overview}
                        </p>
                    </motion.section>

                    {/* Challenge */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase mb-6">The Challenge</h2>
                        <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
                            {project.challenge}
                        </p>
                    </motion.section>

                    {/* Solution */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase mb-6">The Solution</h2>
                        <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
                            {project.solution}
                        </p>
                    </motion.section>

                    {/* Key Outcomes */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase mb-6">Key Outcomes</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.outcomes.map((outcome, index) => (
                                <div
                                    key={index}
                                    className="p-6 border border-white/10 hover:border-[#00E0C7]/30 transition-colors"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-[#00E0C7] font-mono text-2xl font-bold">{outcome.metric}</span>
                                        <p className="text-white/80 mt-1">{outcome.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>

                {/* Navigation */}
                <div className="mt-24 mb-16 py-12 border-t border-white/10">
                    <div className="flex justify-between items-center">
                        {prevProject ? (
                            <Link
                                href={`/project/${prevProject.id}`}
                                className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <div>
                                    <span className="text-xs font-mono uppercase text-white/30">Previous</span>
                                    <p className="font-mono">{prevProject.title}</p>
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}
                        {nextProject ? (
                            <Link
                                href={`/project/${nextProject.id}`}
                                className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors text-right"
                            >
                                <div>
                                    <span className="text-xs font-mono uppercase text-white/30">Next</span>
                                    <p className="font-mono">{nextProject.title}</p>
                                </div>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default CaseStudyPage;
