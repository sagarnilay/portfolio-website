import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AI900_CERTIFICATE_URL = 'https://learn.microsoft.com/en-us/users/sagarnilay-4107/credentials/5c4f1b69a562219e';

const CertificationsSection: React.FC = () => (
  <section id="certifications" className="cert-section section-wrap">
    <div className="section-heading"><p className="eyebrow">06 / LEARNING</p><h2>Certifications &amp; <em>study.</em></h2></div>
    <div className="cert-list">
      <article><span className="cert-mark">MS</span><div><p className="eyebrow">MICROSOFT · CERTIFIED</p><h3>Azure AI Fundamentals</h3><p>AI-900 · Certification earned</p></div>{AI900_CERTIFICATE_URL && <a href={AI900_CERTIFICATE_URL} aria-label="View AI-900 certificate" target="_blank" rel="noreferrer"><ArrowUpRight size={19} /></a>}</article>
      <article><span className="cert-mark cert-progress">↗</span><div><p className="eyebrow">MICROSOFT · IN PROGRESS</p><h3>Security, Compliance, and Identity Fundamentals</h3><p>SC-900 · Currently studying</p></div><span className="in-progress">IN PROGRESS</span></article>
    </div>
  </section>
);
export default CertificationsSection;
