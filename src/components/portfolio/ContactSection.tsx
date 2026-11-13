import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

const ContactSection: React.FC = () => (
  <section id="contact" className="contact-section section-wrap">
    <p className="eyebrow">07 / CONTACT</p>
    <div className="contact-layout"><div><h2>Let’s talk about <em>systems.</em></h2><p>Open to conversations about enterprise infrastructure, support engineering, and opportunities to grow in cloud and security.</p></div>
      <div className="contact-links"><a href="mailto:sjnilay@gmail.com"><Mail size={18} /> sjnilay@gmail.com <ArrowUpRight size={16} /></a><a href="tel:+919834505443">+91 98345 05443 <ArrowUpRight size={16} /></a><a href="https://www.linkedin.com/in/sagar-nilay" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a><a href="https://github.com/sagarnilay" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a><span className="contact-location">Pune, India</span></div>
    </div>
  </section>
);
export default ContactSection;
