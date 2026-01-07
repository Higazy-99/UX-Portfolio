import { motion } from 'motion/react';

interface LoadingScreenProps {
    onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
    return (
        <motion.div
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={(definition) => {
                if (definition === 'exit') onComplete();
            }}
        >
            <div className="text-center">
                {/* Animated Initials */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <motion.h1
                        className="text-8xl sm:text-9xl font-black text-white tracking-tighter"
                        initial={{ y: 30 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        M
                        <motion.span
                            className="text-[#00E0C7]"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            H
                        </motion.span>
                    </motion.h1>
                </motion.div>

                {/* Loading Bar */}
                <motion.div
                    className="mt-8 w-48 h-[2px] bg-white/10 mx-auto overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.div
                        className="h-full bg-[#00E0C7]"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
                        onAnimationComplete={() => {
                            setTimeout(onComplete, 300);
                        }}
                    />
                </motion.div>

                {/* Loading Text */}
                <motion.p
                    className="mt-4 text-xs font-mono text-white/40 uppercase tracking-widest"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    Loading Portfolio
                </motion.p>
            </div>
        </motion.div>
    );
}

export default LoadingScreen;
