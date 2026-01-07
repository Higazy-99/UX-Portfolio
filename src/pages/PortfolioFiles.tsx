import { motion } from 'motion/react';
import { useLocation } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function PortfolioFiles() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
          <button
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio Files</h1>
            <p className="text-white/60 text-lg">
              Manage and organize your portfolio files
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="p-8 border border-white/10 rounded-lg">
          <p>File management is disabled in the static deployment.</p>
        </div>
      </div>
    </div>
  );
}
