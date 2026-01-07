import { useState } from 'react';
import { Route, Switch } from 'wouter';
import { AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { ThemeProvider } from './components/ThemeProvider';
import { CaseStudyPage } from './pages/CaseStudyPage';
import PortfolioFiles from './pages/PortfolioFiles';
import NotFound from './pages/NotFound';

function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors duration-300">
      <Navigation />
      <Hero />
      <CaseStudies />
      <Experience />
      <About />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 px-4 sm:px-8 md:px-12 bg-[var(--background)]">
        <div className="max-w-[1800px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[var(--muted)] text-xs font-mono uppercase tracking-wider">
            © 2025 Mohamed Higazy
          </span>
          <span className="text-[var(--muted)] text-xs font-mono uppercase tracking-wider">
            Designed & Built with precision
          </span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/project/:slug" component={CaseStudyPage} />
            <Route path="/files" component={PortfolioFiles} />
            <Route component={NotFound} />
          </Switch>
        </>
      )}
    </ThemeProvider>
  );
}
