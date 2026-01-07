import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Experience } from '../Experience';

describe('Experience Component', () => {
    it('renders the section title', () => {
        render(<Experience />);
        expect(screen.getByText('EXPERIENCE')).toBeInTheDocument();
    });

    it('renders TAM experience', () => {
        render(<Experience />);
        expect(screen.getByText(/UX \/ CX Designer/)).toBeInTheDocument();
        expect(screen.getByText('TAM')).toBeInTheDocument();
    });

    it('renders Innovadigits experience', () => {
        render(<Experience />);
        expect(screen.getByText(/Senior CX Designer/)).toBeInTheDocument();
        expect(screen.getByText('Innovadigits')).toBeInTheDocument();
    });

    it('has experience section id for navigation', () => {
        render(<Experience />);
        const section = document.getElementById('experience');
        expect(section).toBeInTheDocument();
    });
});
