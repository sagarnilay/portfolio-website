import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const SkillsSection: React.FC = () => (
  <>
    <section id="focus" className="patch-section section-wrap">
      <div className="section-heading"><p className="eyebrow">02 / UPDATE MANAGEMENT</p><h2>Keeping systems <em>current.</em></h2><p className="section-intro">Patch management connects service health with security. I support customers with update failures, servicing issues, patching, and vulnerability-related questions.</p></div>
      <div className="update-flow" aria-label="Update management ecosystem">
        <div className="update-era"><p className="eyebrow">ON-PREMISES</p><h3>Established platforms</h3><ul><li>Windows Update &amp; servicing</li><li>WSUS</li><li>Configuration Manager (SCCM)</li><li>Windows Server patching</li></ul></div>
        <div className="flow-arrow" aria-hidden="true">→</div>
        <div className="update-era update-era-cloud"><p className="eyebrow">CLOUD CONNECTED</p><h3>Microsoft management</h3><ul><li>Microsoft Intune</li><li>Windows Update for Business</li><li>Azure Update Manager</li></ul></div>
      </div>
      <p className="small-note">My experience centers on troubleshooting and customer guidance. Platform administration depth varies; this section reflects practical support alongside familiarity with the wider ecosystem.</p>
      <div className="capability-row"><span>Crash &amp; memory dump capture</span><span>Kernel debugger analysis</span><span>Patch compliance awareness</span><span>Availability &amp; remediation</span></div>
    </section>
    <section className="systems-section section-wrap">
      <div className="section-heading"><p className="eyebrow">03 / TOOLKIT</p><h2>Technology in <em>context.</em></h2></div>
      <div className="systems-grid">
        <div><span className="system-index">A</span><h3>Windows &amp; identity</h3><p>Windows Server · Active Directory · Group Policy · DNS · Microsoft Entra ID</p></div>
        <div><span className="system-index">B</span><h3>Endpoint &amp; updates</h3><p>Intune · Configuration Manager · WSUS · Azure Update Manager · Windows Update</p></div>
        <div><span className="system-index">C</span><h3>Cloud &amp; automation</h3><p>Microsoft Azure · PowerShell · Hyper-V · Infrastructure diagnostics</p></div>
      </div>
    </section>
    <section id="direction" className="direction-section section-wrap">
      <div className="direction-copy"><p className="eyebrow">04 / NEXT CHAPTER</p><h2>Where I’m <em>heading.</em></h2><p>Building on enterprise support, I’m developing my skills toward cloud infrastructure and security engineering. These are areas of focused learning and career direction.</p><a className="inline-link" href="#certifications">See certifications <ArrowUpRight size={15} /></a></div>
      <div className="interest-list"><span>Azure cloud infrastructure</span><span>Cloud &amp; infrastructure security</span><span>Identity and access management</span><span>Entra ID and Active Directory security</span><span>Security baselines and Group Policy</span><span>PowerShell automation &amp; monitoring</span><span>Patch management &amp; vulnerability remediation</span></div>
    </section>
  </>
);
export default SkillsSection;
