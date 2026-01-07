import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'motion/react';

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [hoverText, setHoverText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    // Smooth spring animation for cursor position
    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        // Check if device supports hover (not touch)
        const hasHover = window.matchMedia('(hover: hover)').matches;
        if (!hasHover) return;

        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check for interactive elements
            const isLink = target.closest('a, button, [role="button"]');
            const isProjectCard = target.closest('[data-cursor="project"]');
            const isClickable = target.closest('[data-cursor="pointer"]');

            if (isProjectCard) {
                setIsHovering(true);
                setHoverText('View');
            } else if (isLink || isClickable) {
                setIsHovering(true);
                setHoverText('');
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
            setHoverText('');
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mouseout', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            >
                <motion.div
                    className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        width: isHovering ? 80 : 12,
                        height: isHovering ? 80 : 12,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                    }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-full bg-white"
                        animate={{
                            scale: isHovering ? 1 : 1,
                        }}
                    />
                    {hoverText && (
                        <motion.span
                            className="relative text-xs font-medium text-black z-10"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                        >
                            {hoverText}
                        </motion.span>
                    )}
                </motion.div>
            </motion.div>
        </>
    );
}

export default CustomCursor;
