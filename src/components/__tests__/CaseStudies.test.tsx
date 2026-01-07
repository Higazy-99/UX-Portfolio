import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CaseStudies } from '../CaseStudies';

describe('CaseStudies Component', () => {
    it('renders the section title', () => {
        render(<CaseStudies />);
        expect(screen.getByText('WORK')).toBeInTheDocument();
    });

    it('renders the section subtitle', () => {
        render(<CaseStudies />);
        expect(screen.getByText('Selected Case Studies')).toBeInTheDocument();
    });

    it('renders project cards', () => {
        render(<CaseStudies />);
        // Check for project titles
        expect(screen.getByText('Golf Saudi')).toBeInTheDocument();
        expect(screen.getByText('King Salman Foundation')).toBeInTheDocument();
    });

    it('has work section id for navigation', () => {
        render(<CaseStudies />);
        const section = document.getElementById('work');
        expect(section).toBeInTheDocument();
    });
});
