import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { number: '01', type: 'HYBRID INFRASTRUCTURE LAB', title: 'A hybrid identity & update lab', description: 'A hands-on lab connecting on-premises Active Directory with Microsoft Entra ID. Enrolled devices in Intune for update management and monitoring, and built a domain-joined path with WSUS, Configuration Manager, and Group Policy to explore traditional patching workflows.', tags: ['Active Directory', 'Entra ID', 'Intune', 'WSUS / SCCM', 'Group Policy'] },
  { number: '02', type: 'CLOUD INFRASTRUCTURE · IN PROGRESS', title: 'Azure landing zone', description: 'A personal learning project for a hub-and-spoke Azure network using Terraform and GitHub Actions with OIDC. The repository also covers governance with Azure Policy and RBAC, plus monitoring through Log Analytics and KQL alerts.', tags: ['Azure', 'Terraform', 'GitHub Actions', 'OIDC', 'Policy & monitoring'], href: 'https://github.com/sagarnilay/azure-landing-zone' },
];

const ProjectsSection: React.FC = () => (
  <section id="projects" className="projects-section section-wrap">
    <div className="section-heading"><p className="eyebrow">05 / SELECTED WORK</p><h2>Learning by <em>building.</em></h2><p className="section-intro">Labs and projects that connect day-to-day systems knowledge with the infrastructure I’m exploring next.</p></div>
    <div className="project-list">{projects.map(project => <article className="project-item" key={project.number}>
      <span className="project-number">{project.number}</span><div className="project-main"><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
      {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={20} /></a>}
    </article>)}</div>
    <a className="inline-link" href="https://github.com/sagarnilay" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a>
  </section>
);
export default ProjectsSection;
