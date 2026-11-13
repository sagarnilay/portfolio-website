import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps { activeSection: string }
const sections = [
  { id: 'experience', label: 'Experience' }, { id: 'focus', label: 'Focus areas' },
  { id: 'projects', label: 'Projects' }, { id: 'certifications', label: 'Certifications' },
];

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);
  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={() => setIsOpen(false)} aria-label="Sagar Nilay, home">SN<span>.</span></a>
        <button className="menu-toggle" type="button" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen} aria-controls="primary-nav" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div id="primary-nav" className={`nav-links${isOpen ? ' is-open' : ''}`}>
          {sections.map(section => <a key={section.id} href={`#${section.id}`} aria-current={activeSection === section.id ? 'location' : undefined} onClick={() => setIsOpen(false)}>{section.label}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setIsOpen(false)}>Contact <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
