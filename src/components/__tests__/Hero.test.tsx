import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';

describe('Hero Component', () => {
    it('renders the name correctly', () => {
        render(<Hero />);
        expect(screen.getByText('Mohamed')).toBeInTheDocument();
        expect(screen.getByText('Higazy')).toBeInTheDocument();
    });

    it('renders the role badge', () => {
        render(<Hero />);
        expect(screen.getByText('UX Designer')).toBeInTheDocument();
    });

    it('renders the tagline', () => {
        render(<Hero />);
        expect(screen.getByText(/I design experiences/)).toBeInTheDocument();
    });

    it('renders the location', () => {
        render(<Hero />);
        expect(screen.getByText(/Based in Egypt/)).toBeInTheDocument();
    });

    it('renders the CTA button', () => {
        render(<Hero />);
        expect(screen.getByText('View my work')).toBeInTheDocument();
    });

    it('has correct link to work section', () => {
        render(<Hero />);
        const ctaLink = screen.getByText('View my work').closest('a');
        expect(ctaLink).toHaveAttribute('href', '#work');
    });
});
