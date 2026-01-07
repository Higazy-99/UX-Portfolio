/**
 * Design System Constants
 * Centralized configuration for consistent styling across the portfolio
 * 
 * Usage: Import these constants in components for maintainable code
 * Example: import { COLORS, CONTACT } from '@/lib/constants'
 */

// =============================================================================
// COLOR PALETTE
// =============================================================================

/** Primary accent color - turquoise */
export const ACCENT_COLOR = '#00E0C7';

/** Color palette for the portfolio */
export const COLORS = {
    /** Primary turquoise accent */
    primary: '#00E0C7',
    /** Darker turquoise for light mode */
    primaryDark: '#00B5A6',
    /** Pure black background (dark mode) */
    darkBg: '#000000',
    /** Pure white background (light mode) */
    lightBg: '#ffffff',
    /** White text (dark mode) */
    darkText: '#ffffff',
    /** Dark text (light mode) */
    lightText: '#0a0a0a',
} as const;

// =============================================================================
// ANIMATION CONFIGURATION
// =============================================================================

/** Animation timing values (in seconds) */
export const ANIMATION = {
    /** Quick micro-interactions */
    fast: 0.2,
    /** Standard transitions */
    normal: 0.5,
    /** Slower, more dramatic effects */
    slow: 0.8,
    /** Delay between staggered items */
    stagger: 0.1,
    /** Page load animation duration */
    loadingDuration: 1.5,
} as const;

// =============================================================================
// TYPOGRAPHY
// =============================================================================

/** Typography scale for responsive hero text */
export const TYPOGRAPHY = {
    /** Hero section name size */
    hero: {
        mobile: '15vw',
        tablet: '13vw',
        desktop: '11vw',
    },
    /** Section title size */
    section: {
        mobile: '12vw',
        tablet: '10vw',
        desktop: '8vw',
    },
} as const;

// =============================================================================
// CONTACT INFORMATION
// =============================================================================

/** Portfolio owner contact details */
export const CONTACT = {
    name: 'Mohamed Higazy',
    email: 'eng.mohamedhigazy@gmail.com',
    location: 'Giza, Egypt',
    linkedin: 'https://www.linkedin.com/in/mohamedhigazy91/',
    behance: 'https://www.behance.net/mohamedhigazy92',
} as const;

// =============================================================================
// NAVIGATION
// =============================================================================

/** Main navigation links */
export const NAV_LINKS = [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
] as const;

// =============================================================================
// SKILLS
// =============================================================================

/** Core UX/CX skills for About section */
export const SKILLS = [
    'User Research',
    'Journey Mapping',
    'Service Design',
    'Usability Testing',
    'Accessibility (WCAG)',
    'Stakeholder Workshops',
    'Information Architecture',
    'CX Strategy',
] as const;

// =============================================================================
// EXPERIENCE DATA
// =============================================================================

/** Work experience entries */
export const EXPERIENCES = [
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
] as const;
