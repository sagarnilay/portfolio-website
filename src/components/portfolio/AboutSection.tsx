import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AboutSection: React.FC = () => (
  <section id="experience" className="section-wrap experience-section">
    <div className="section-heading"><p className="eyebrow">01 / EXPERIENCE</p><h2>Support at the <em>system level.</em></h2></div>
    <div className="experience-layout">
      <aside className="role-stamp"><span className="stamp-mark">M</span><p>MICROSOFT</p><span>Technical Support Engineer</span><small>Enterprise support</small></aside>
      <div className="experience-copy">
        <p className="lead">I help diagnose and resolve complex Windows client and server issues in enterprise environments, with a focus on restoring service and understanding what went wrong.</p>
        <div className="work-list">
          <article><span className="list-number">01</span><div><h3>Windows infrastructure</h3><p>Investigating operating system and server problems, production-impacting incidents, and connectivity failures through structured troubleshooting and network trace analysis.</p></div></article>
          <article><span className="list-number">02</span><div><h3>Directory services &amp; policy</h3><p>Troubleshooting Active Directory and replication, DNS dependencies, Group Policy processing, and policy application with tools such as GPResult and GPSVC logs.</p></div></article>
          <article><span className="list-number">03</span><div><h3>Diagnostics &amp; automation</h3><p>Using PowerShell for practical infrastructure tasks, including Hyper-V virtual machine deployment. Capturing crash and memory dumps and analyzing them with a kernel debugger.</p></div></article>
        </div>
        <p className="small-note">Security hardening and policy baselines are areas I’m actively learning; I distinguish that developing knowledge from my support experience.</p>
      </div>
    </div>
    <p className="small-note education-note">Education: Information Technology, University of Mumbai · Applied Statistics, Symbiosis University.</p>
    <a className="inline-link" href="https://www.linkedin.com/in/sagar-nilay" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15} /></a>
  </section>
);
export default AboutSection;
