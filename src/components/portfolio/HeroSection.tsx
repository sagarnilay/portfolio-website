import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const HeroSection: React.FC = () => (
  <section id="home" className="hero section-wrap">
    <div className="hero-grid" aria-hidden="true"><span>01</span><span>ENTERPRISE SYSTEMS / CLOUD DIRECTION</span></div>
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot" /> Technical Support Engineer at Microsoft</p>
      <h1>Keeping enterprise systems <em>reliable.</em></h1>
      <p className="hero-subtitle">I work through complex Windows infrastructure issues and help teams restore stability. My next chapter is focused on cloud infrastructure and security.</p>
      <div className="hero-actions">
        <a className="button button-dark" href="#projects">Explore projects <ArrowDown size={16} /></a>
        <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
      </div>
      <p className="hero-caption">Enterprise support <span>·</span> Windows infrastructure <span>·</span> Cloud &amp; security</p>
    </div>
    <div className="hero-aside" aria-label="Professional focus">
      <div className="aside-line" />
      <p className="eyebrow">CURRENT FOCUS</p>
      <p>Windows Server<br />Active Directory<br />Updates &amp; servicing<br />PowerShell automation</p>
      <a href="#experience" className="aside-link">A little more about my work <ArrowDown size={14} /></a>
    </div>
  </section>
);

export default HeroSection;
