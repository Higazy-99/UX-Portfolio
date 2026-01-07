/**
 * TypeScript Type Definitions
 * Centralized interfaces for type safety across the portfolio
 */

// =============================================================================
// PROJECT TYPES
// =============================================================================

/** Individual outcome metric for a project */
export interface ProjectOutcome {
    /** The metric value (e.g., "40%", "4.8/5") */
    metric: string;
    /** Description of what the metric represents */
    label: string;
}

/** Complete project/case study data */
export interface Project {
    /** Unique identifier */
    id: number;
    /** Project title */
    title: string;
    /** Arabic title (optional) */
    titleAr?: string;
    /** Brief description for cards */
    description: string;
    /** Category tags */
    tags: string[];
    /** Cover image path */
    cover: string;
    /** Project duration */
    timeline: string;
    /** Role held */
    role: string;
    /** Client name */
    client: string;
    /** Project overview text */
    overview: string;
    /** Challenge description */
    challenge: string;
    /** Solution description */
    solution: string;
    /** Key outcomes with metrics */
    outcomes: ProjectOutcome[];
    /** List of responsibilities */
    responsibilities: string[];
    /** UX methods used */
    methods: string[];
}

// =============================================================================
// EXPERIENCE TYPES
// =============================================================================

/** Work experience entry */
export interface ExperienceEntry {
    id: number;
    year: string;
    title: string;
    company: string;
    description: string;
    current: boolean;
}

// =============================================================================
// NAVIGATION TYPES
// =============================================================================

/** Navigation link item */
export interface NavLink {
    label: string;
    href: string;
}

// =============================================================================
// THEME TYPES
// =============================================================================

/** Available theme options */
export type Theme = 'dark' | 'light';

/** Theme context value */
export interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

// =============================================================================
// COMPONENT PROP TYPES
// =============================================================================

/** Props for LoadingScreen component */
export interface LoadingScreenProps {
    onComplete: () => void;
}

/** Props for ProjectCard component */
export interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: () => void;
}

/** Props for ProjectDialog component */
export interface ProjectDialogProps {
    project: Project | null;
    open: boolean;
    onClose: () => void;
}
