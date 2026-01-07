import { motion } from 'motion/react';

// SVG Logo Components - clean, minimal, professional
const LogoMOC = () => (
    <svg viewBox="0 0 120 40" className="h-8 sm:h-10 md:h-12 w-auto">
        <text x="0" y="28" fill="currentColor" fontFamily="monospace" fontSize="14" fontWeight="bold">MOC</text>
        <rect x="45" y="10" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const LogoGolfSaudi = () => (
    <svg viewBox="0 0 120 40" className="h-8 sm:h-10 md:h-12 w-auto">
        <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="40" y="26" fill="currentColor" fontFamily="monospace" fontSize="12" fontWeight="bold">GOLF</text>
    </svg>
);

const LogoKSRelief = () => (
    <svg viewBox="0 0 120 40" className="h-8 sm:h-10 md:h-12 w-auto">
        <path d="M10 30 L20 10 L30 30" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="40" y="26" fill="currentColor" fontFamily="monospace" fontSize="11" fontWeight="bold">KSRELIEF</text>
    </svg>
);

const LogoMOS = () => (
    <svg viewBox="0 0 120 40" className="h-8 sm:h-10 md:h-12 w-auto">
        <polygon points="20,8 28,20 20,32 12,20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="38" y="26" fill="currentColor" fontFamily="monospace" fontSize="12" fontWeight="bold">MOS</text>
    </svg>
);

const LogoMisk = () => (
    <svg viewBox="0 0 100 40" className="h-8 sm:h-10 md:h-12 w-auto">
        <rect x="10" y="12" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="35" y="26" fill="currentColor" fontFamily="monospace" fontSize="14" fontWeight="bold">MISK</text>
    </svg>
);

const LogoFilm = () => (
    <svg viewBox="0 0 100 40" className="h-8 sm:h-10 md:h-12 w-auto">
        <rect x="8" y="10" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="17" x2="28" y2="17" stroke="currentColor" strokeWidth="1" />
        <line x1="8" y1="23" x2="28" y2="23" stroke="currentColor" strokeWidth="1" />
        <text x="35" y="26" fill="currentColor" fontFamily="monospace" fontSize="12" fontWeight="bold">FILM</text>
    </svg>
);

const LogoAFC = () => (
    <svg viewBox="0 0 100 40" className="h-8 sm:h-10 md:h-12 w-auto">
        <circle cx="18" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="35" y="26" fill="currentColor" fontFamily="monospace" fontSize="14" fontWeight="bold">AFC</text>
    </svg>
);

const LogoTAM = () => (
    <svg viewBox="0 0 100 40" className="h-8 sm:h-10 md:h-12 w-auto">
        <text x="10" y="28" fill="currentColor" fontFamily="monospace" fontSize="16" fontWeight="bold">TAM</text>
        <line x1="50" y1="15" x2="70" y2="15" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="25" x2="65" y2="25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const brands = [
    { name: 'Ministry of Culture', Logo: LogoMOC },
    { name: 'Golf Saudi', Logo: LogoGolfSaudi },
    { name: 'King Salman Foundation', Logo: LogoKSRelief },
    { name: 'Ministry of Sport', Logo: LogoMOS },
    { name: 'Misk Foundation', Logo: LogoMisk },
    { name: 'Saudi Film Commission', Logo: LogoFilm },
    { name: 'AFC Champions', Logo: LogoAFC },
    { name: 'TAM Development', Logo: LogoTAM },
];

export function BrandsCarousel() {
    const duplicatedBrands = [...brands, ...brands];

    return (
        <section className="py-10 sm:py-12 md:py-16 bg-black border-y border-white/5 overflow-hidden">
            {/* Header */}
            <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 mb-6 sm:mb-8">
                <span className="text-white/30 text-[10px] sm:text-xs font-mono uppercase tracking-widest">
                    Worked with leading organizations
                </span>
            </div>

            {/* Marquee container */}
            <div className="relative">
                {/* Gradient masks */}
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

                {/* Scrolling content */}
                <motion.div
                    className="flex items-center gap-10 sm:gap-14 md:gap-20"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        duration: 30,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {duplicatedBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 text-white/30 hover:text-white/60 transition-colors duration-300"
                            title={brand.name}
                        >
                            <brand.Logo />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default BrandsCarousel;
