import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from '../About';

describe('About Component', () => {
    it('renders the section title', () => {
        render(<About />);
        expect(screen.getByText('ABOUT')).toBeInTheDocument();
    });

    it('renders bio content', () => {
        render(<About />);
        expect(screen.getByText(/UX\/CX Designer/)).toBeInTheDocument();
    });

    it('renders skills section', () => {
        render(<About />);
        expect(screen.getByText('Skills')).toBeInTheDocument();
    });

    it('has about section id for navigation', () => {
        render(<About />);
        const section = document.getElementById('about');
        expect(section).toBeInTheDocument();
    });
});
