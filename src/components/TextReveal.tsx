import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface TextRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.9', 'start 0.3'],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ opacity, y }}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}

interface WordRevealProps {
    text: string;
    className?: string;
}

export function WordReveal({ text, className = '' }: WordRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const words = text.split(' ');

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.9', 'start 0.4'],
    });

    return (
        <div ref={ref} className={`flex flex-wrap ${className}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </div>
    );
}

function Word({
    children,
    progress,
    range
}: {
    children: string;
    progress: any;
    range: [number, number];
}) {
    const opacity = useTransform(progress, range, [0.2, 1]);
    const y = useTransform(progress, range, [20, 0]);

    return (
        <motion.span
            className="mr-2 md:mr-3 inline-block"
            style={{ opacity, y }}
        >
            {children}
        </motion.span>
    );
}

export default TextReveal;
