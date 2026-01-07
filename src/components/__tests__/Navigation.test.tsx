import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navigation } from '../Navigation';

describe('Navigation Component', () => {
    it('renders the logo/brand name', () => {
        render(<Navigation />);
        expect(screen.getByText('M.HIGAZY')).toBeInTheDocument();
    });

    it('renders all navigation links', () => {
        render(<Navigation />);
        expect(screen.getByText('Work')).toBeInTheDocument();
        expect(screen.getByText('Experience')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('has correct href attributes for nav links', () => {
        render(<Navigation />);
        expect(screen.getByText('Work').closest('a')).toHaveAttribute('href', '#work');
        expect(screen.getByText('Experience').closest('a')).toHaveAttribute('href', '#experience');
        expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about');
        expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact');
    });
});
