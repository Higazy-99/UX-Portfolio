import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Contact } from '../Contact';

describe('Contact Component', () => {
    it('renders the section title', () => {
        render(<Contact />);
        expect(screen.getByText("Let's")).toBeInTheDocument();
        expect(screen.getByText('Talk')).toBeInTheDocument();
    });

    it('renders email address', () => {
        render(<Contact />);
        expect(screen.getByText('eng.mohamedhigazy@gmail.com')).toBeInTheDocument();
    });

    it('renders email link with correct href', () => {
        render(<Contact />);
        const emailLink = screen.getByText('eng.mohamedhigazy@gmail.com');
        expect(emailLink).toHaveAttribute('href', 'mailto:eng.mohamedhigazy@gmail.com');
    });

    it('renders location', () => {
        render(<Contact />);
        expect(screen.getByText('Giza, Egypt')).toBeInTheDocument();
    });

    it('renders social links', () => {
        render(<Contact />);
        const linkedinLink = screen.getByTitle('LinkedIn');
        const behanceLink = screen.getByTitle('Behance');

        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/mohamedhigazy91/');
        expect(behanceLink).toHaveAttribute('href', 'https://www.behance.net/mohamedhigazy92');
    });

    it('renders availability status', () => {
        render(<Contact />);
        expect(screen.getByText('Available for new projects')).toBeInTheDocument();
    });

    it('has contact section id for navigation', () => {
        render(<Contact />);
        const section = document.getElementById('contact');
        expect(section).toBeInTheDocument();
    });
});
