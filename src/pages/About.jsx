import { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    document.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('active'), i * 100);
    });
  }, []);

  const techStack1 = [
    "HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript",
    "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS", "Framer Motion"
  ];

  const techStack2 = [
    "Vercel", "Netlify", "GitHub", "Git", "Postman", "VS Code",
    "Figma", "Canva", "NPM", "Vite", "React Query", "Socket.io"
  ];

  const tools = [
    "Render", "Supabase", "JWT", "Nodemon", "React Hook Form", "React Router",
    "GSAP", "Three.js", "Shadcn UI", "Lucide Icons", "Zustand", "Redux"
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero reveal">
        <h1>
          Hey, I'm <span className="gradient-name">Akhilesh</span>
        </h1>
        <p className="tagline">Full Stack Developer • UI/UX Enthusiast • Pixel Perfect Coder</p>
        <p className="bio">
          Main wo banda hun jo raat ko 3 baje bhi code kar raha hota hun jab dunia so rahi hoti hai.  
          Modern, blazing-fast aur jaw-dropping websites banata hun jo sirf dikne mein nahi,  
          perform bhi karte hain. Har project mein thodi si jaan daal deta hun
        </p>
        <div className="social-buttons">
          <a href="https://github.com/akhil80git" target="_blank" className="btn-gh">GitHub</a>
          <a href="mailto:akhileshwork80@gmail.com" className="btn-hire">Hire Me</a>
        </div>
      </section>

      {/* AUTO SCROLLING MARQUEE - NON STOP */}
      <section className="marquee-section">
        <div className="marquee">
          <div className="marquee-track left-to-right">
            {[...techStack1, ...techStack1].map((tech, i) => (
              <span key={i} className="marquee-item gradient-1">{tech}</span>
            ))}
          </div>
        </div>

        <div className="marquee reverse">
          <div className="marquee-track right-to-left">
            {[...techStack2, ...techStack2].map((tech, i) => (
              <span key={i} className="marquee-item gradient-2">{tech}</span>
            ))}
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-track left-to-right fast">
            {[...tools, ...tools].map((tool, i) => (
              <span key={i} className="marquee-item gradient-3">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Learning */}
      <section className="currently reveal">
        <h2>Currently Vibing With</h2>
        <div className="vibe-grid">
          <div className="vibe-card">Next.js 15 App Router</div>
          <div className="vibe-card">TypeScript Mastery</div>
          <div className="vibe-card">Framer Motion Magic</div>
          <div className="vibe-card">Shadcn + Tailwind</div>
          <div className="vibe-card">3D Web Experiences</div>
          <div className="vibe-card">Server Actions</div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta reveal">
        <h2>Let's Build Something Insane Together</h2>
        <p>Open for freelance • full-time • collaborations</p>
        <a href="mailto:akhileshwork80@gmail.com" className="btn-epic">Start a Project</a>
      </section>
    </div>
  );
};

export default About;