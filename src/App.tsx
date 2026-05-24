import { useState } from 'react';
import { OverlayModal } from './components/OverlayModal';
import { portfolioData, OM_VALANJU_ASCII } from './data/portfolioData';

function App() {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [contactText, setContactText] = useState('Contact');

  const handleContactClick = () => {
    // Copy email to clipboard
    navigator.clipboard.writeText(portfolioData.personalInfo.email);
    setContactText('Copied');
    setTimeout(() => {
      setContactText('Contact');
    }, 2000);
  };

  return (
    <div className="app-viewport">
      {/* Background Video Wrapper */}
      <div className="video-bg-container">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Upper Content Section */}
      <div className="reveal-1" style={{ zIndex: 10, width: '100%' }}>
        <p className="serif-main-text">
          Developer, automation builder, and DevOps engineer in Heidelberg. 
          Studying at{' '}
          <button className="underline-link" onClick={() => setIsExperienceOpen(true)}>
            SRH
          </button>
          , working at{' '}
          <a 
            href="https://www.sap.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline-link"
          >
            SAP
          </a>
          . Previously automated systems at{' '}
          <button className="underline-link" onClick={() => setIsExperienceOpen(true)}>
            1&1
          </button>{' '}
          and{' '}
          <button className="underline-link" onClick={() => setIsExperienceOpen(true)}>
            Capgemini
          </button>
          . I also like cars :)
        </p>

        {/* Link navigation row */}
        <div className="link-row reveal-2">
          <button className="underline-link" onClick={() => setIsExperienceOpen(true)}>
            Experience
          </button>
          <button className="underline-link" onClick={() => setIsSkillsOpen(true)}>
            Skills
          </button>
          <a 
            href="#blog" 
            className="underline-link" 
            onClick={(e) => e.preventDefault()} 
            style={{ opacity: 0.5 }}
            title="Blog coming soon"
          >
            Blog
          </a>
          <a 
            href="/resume.pdf" 
            download="Om_Valanju_Resume.pdf" 
            className="underline-link"
          >
            Resume
          </a>
          <a 
            href={`https://${portfolioData.personalInfo.github}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline-link"
          >
            GitHub
          </a>
          <a 
            href={`https://${portfolioData.personalInfo.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline-link"
          >
            LinkedIn
          </a>
          <button className="underline-link" onClick={handleContactClick}>
            {contactText}
          </button>
        </div>
      </div>

      {/* Bottom Large Logo Section */}
      <div className="reveal-2 select-none pointer-events-none" style={{ overflow: 'hidden', width: '100%' }}>
        <pre className="bottom-branding-ascii">
          {OM_VALANJU_ASCII}
        </pre>
      </div>

      {/* Experience Overlay Modal */}
      <OverlayModal 
        isOpen={isExperienceOpen} 
        onClose={() => setIsExperienceOpen(false)} 
        title="Experience & Education"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Work History Section */}
          <div>
            <div className="modal-skill-category-title" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
              Work History
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} className="modal-project-item">
                  <div className="modal-project-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                    <span>{exp.role}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>
                      {exp.dateRange}
                    </span>
                  </div>
                  <div className="modal-project-tech" style={{ color: 'var(--accent-blue)', margin: '2px 0 6px 0' }}>
                    {exp.company}
                  </div>
                  <div className="modal-project-tech" style={{ fontSize: '0.75rem', marginBottom: '0.6rem' }}>
                    Key Tech: {exp.tech.join(' · ')}
                  </div>
                  <ul className="modal-project-details" style={{ fontSize: '0.85rem' }}>
                    {exp.details.map((detail, idx) => (
                      <li key={idx} style={{ marginBottom: '4px' }}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div style={{ marginTop: '0.5rem' }}>
            <div className="modal-skill-category-title" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
              Education
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ fontWeight: 600, fontFamily: 'var(--font-serif)', fontSize: '1.15rem' }}>{edu.degree}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{edu.dateRange}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)' }}>{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </OverlayModal>

      {/* Skills Overlay Modal */}
      <OverlayModal 
        isOpen={isSkillsOpen} 
        onClose={() => setIsSkillsOpen(false)} 
        title="Skills & Expertise"
      >
        <div className="modal-skills-grid">
          {portfolioData.skills.map((skillCat) => (
            <div key={skillCat.category}>
              <div className="modal-skill-category-title">{skillCat.category}</div>
              <div className="modal-skills-list">
                {skillCat.items.map((skill) => (
                  <span key={skill} className="modal-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </OverlayModal>

    </div>
  );
}

export default App;
