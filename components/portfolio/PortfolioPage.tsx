"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  certificates,
  experiences,
  projects,
  techStack,
  type LocalizedText,
} from "../../data/portfolio-data";
import { navLinks, profileConfig } from "../../lib/site-config";
import { useLanguage, type Language } from "../../hooks/use-language";
import Image from "next/image";

const copy = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      certificates: "Certificates",
      downloadCv: "Download CV",
    },
    hero: {
      role: "Full-Stack Developer",
      headline: "Building Digital Experiences That Matter",
      greeting: "Hi, I'm",
      description:
        "I build secure, scalable, and high-performance web applications using Laravel, Next.js, TypeScript, Go, and modern cloud-ready development practices.",
      lead: "Crafting elegant solutions with modern technologies and strong product thinking.",
      viewProjects: "View Projects",
      github: "GitHub",
    },
    about: {
      label: "About",
      title: "Building purposeful digital products with modern stacks",
      intro:
        "I'm a Full Stack Developer focused on creating reliable and elegant web platforms. I enjoy translating real business problems into practical software solutions with clean code, thoughtful architecture, and delightful user experience.",
      education: "Education",
      educationText:
        "Software engineering focused curriculum with web systems specialization.",
      timeline: "Timeline",
      timelineText:
        "Started with backend foundations, expanded into modern frontend and DevOps workflows.",
      objective: "Career Objective",
      objectiveText:
        "Deliver impactful products as a future-ready engineer with strong product sense.",
      statProjects: "Projects Completed",
      statTech: "Technologies Learned",
      statLearning: "Years of Learning",
    },
    skills: {
      label: "Tech Stack",
      title: "Technologies I use to craft high-quality products",
      levels: {
        Advanced: "Advanced",
        Intermediate: "Intermediate",
        Beginner: "Beginner",
      },
    },
    sections: {
      featured: "Featured Work",
      projects: "Projects",
      projectsTitle: "Selected work and engineering case studies",
      experience: "Experience",
      experienceTitle: "Continuous growth through practical development journey",
      certificates: "Certificates",
      certificatesTitle: "Validated learning and professional development",
      contact: "Contact",
      contactTitle: "Let's build something exceptional together",
      inDevelopment: "In Development",
      moreDetails: "More Details",
      available:
        "Available for freelance projects and full-time opportunities.",
      buildTogether: "Let's Build Something Together",
      startConversation: "Start a Conversation",
    },
    footer: {
      copyright: "© 2026 Arka Satria. Crafted with precision and purpose.",
      email: "Email",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      skills: "Skill",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
      certificates: "Sertifikat",
      downloadCv: "Unduh CV",
    },
    hero: {
      role: "Full-Stack Developer",
      headline: "Membangun Pengalaman Digital yang Bermakna",
      greeting: "Halo, saya",
      description:
        "Saya membangun aplikasi web yang aman, scalable, dan berperforma tinggi menggunakan Laravel, Next.js, TypeScript, Go, serta praktik pengembangan modern yang siap cloud.",
      lead:
        "Merancang solusi elegan dengan teknologi modern dan product thinking yang kuat.",
      viewProjects: "Lihat Proyek",
      github: "GitHub",
    },
    about: {
      label: "Tentang",
      title: "Membangun produk digital yang tepat guna dengan stack modern",
      intro:
        "Saya seorang Full Stack Developer yang fokus membangun platform web yang andal dan elegan. Saya senang menerjemahkan masalah bisnis nyata menjadi solusi software yang praktis dengan kode bersih, arsitektur matang, dan pengalaman pengguna yang nyaman.",
      education: "Pendidikan",
      educationText:
        "Kurikulum berfokus rekayasa perangkat lunak dengan spesialisasi sistem web.",
      timeline: "Perjalanan",
      timelineText:
        "Memulai dari fondasi backend, lalu berkembang ke frontend modern dan alur DevOps.",
      objective: "Tujuan Karier",
      objectiveText:
        "Menghadirkan produk berdampak sebagai engineer yang siap masa depan dengan product sense yang kuat.",
      statProjects: "Proyek Selesai",
      statTech: "Teknologi Dipelajari",
      statLearning: "Tahun Belajar",
    },
    skills: {
      label: "Tech Stack",
      title: "Teknologi yang saya gunakan untuk membangun produk berkualitas",
      levels: {
        Advanced: "Mahir",
        Intermediate: "Menengah",
        Beginner: "Pemula",
      },
    },
    sections: {
      featured: "Karya Unggulan",
      projects: "Proyek",
      projectsTitle: "Pilihan karya dan studi kasus rekayasa",
      experience: "Pengalaman",
      experienceTitle: "Pertumbuhan berkelanjutan melalui perjalanan pengembangan nyata",
      certificates: "Sertifikat",
      certificatesTitle: "Validasi pembelajaran dan pengembangan profesional",
      contact: "Kontak",
      contactTitle: "Mari bangun sesuatu yang luar biasa bersama",
      inDevelopment: "Sedang Dikembangkan",
      moreDetails: "Selengkapnya",
      available: "Tersedia untuk proyek freelance dan peluang full-time.",
      buildTogether: "Mari Bangun Sesuatu Bersama",
      startConversation: "Mulai Percakapan",
    },
    footer: {
      copyright: "© 2026 Arka Satria. Dibuat dengan presisi dan tujuan.",
      email: "Email",
    },
  },
} as const;

function getSkillMeterWidth(level: string) {
  if (level === "Advanced") {
    return "86%";
  }

  if (level === "Intermediate") {
    return "68%";
  }

  return "46%";
}

function textByLanguage(text: LocalizedText, language: Language) {
  return text[language];
}

export function PortfolioPage() {
  const { language, toggleLanguage } = useLanguage();
  const t = copy[language];

  const localizedNavLinks = useMemo(
    () =>
      navLinks.map((item) => {
        const labelMap: Record<string, string> = {
          About: t.nav.about,
          Skills: t.nav.skills,
          Projects: t.nav.projects,
          Experience: t.nav.experience,
          Contact: t.nav.contact,
        };

        return {
          ...item,
          label: labelMap[item.label] ?? item.label,
        };
      }),
    [t.nav.about, t.nav.contact, t.nav.experience, t.nav.projects, t.nav.skills]
  );

  return (
    <div className="portfolio-root">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow bg-glow-one" aria-hidden="true" />
      <div className="bg-glow bg-glow-two" aria-hidden="true" />

      <header className="sticky top-0 z-50 backdrop-blur-xl">
        <nav className="container nav-shell">
          <a href="#home" className="logo">
            {profileConfig.brand}
          </a>
          <div className="nav-links">
            {localizedNavLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-ghost lang-toggle"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              {language === "en" ? "EN" : "ID"}
            </button>
            <a className="btn btn-primary" href={profileConfig.cvPath} download>
              {t.nav.downloadCv}
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="container hero">
          <div className="hero-content fade-up">
            <p className="eyebrow">{t.hero.role}</p>
            <h1>{t.hero.headline}</h1>
            <h2>
              {t.hero.greeting} <span>{profileConfig.fullName}</span>
            </h2>
            <p className="hero-description">{t.hero.description}</p>
            <p className="lead-line">{t.hero.lead}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                {t.hero.viewProjects}
              </a>
              <a href={profileConfig.cvPath} download className="btn btn-ghost">
                {t.nav.downloadCv}
              </a>
              <a
                href={profileConfig.github}
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.github}
              </a>
            </div>
          </div>

          <div className="hero-visual fade-up delay-1">
            <div className="visual-ring" />
            <div className="visual-illustration glass-card">
              <div className="screen-glow" />
              <div className="laptop">
                <div className="laptop-screen" />
                <div className="laptop-base" />
              </div>
              <div className="floating-icons">
                <span>TS</span>
                <span>Go</span>
                <span>PHP</span>
                <span>Nx</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container section">
          <div className="section-heading fade-up">
            <p>{t.about.label}</p>
            <h3>{t.about.title}</h3>
          </div>

          <div className="about-grid fade-up delay-1">
            <article className="glass-card about-card">
              <p>{t.about.intro}</p>
              <div className="timeline-list">
                <div>
                  <h4>{t.about.education}</h4>
                  <p>{t.about.educationText}</p>
                </div>
                <div>
                  <h4>{t.about.timeline}</h4>
                  <p>{t.about.timelineText}</p>
                </div>
                <div>
                  <h4>{t.about.objective}</h4>
                  <p>{t.about.objectiveText}</p>
                </div>
              </div>
            </article>

            <div className="stats-grid">
              <article className="glass-card stat-card">
                <strong>10+</strong>
                <span>{t.about.statProjects}</span>
              </article>
              <article className="glass-card stat-card">
                <strong>5+</strong>
                <span>{t.about.statTech}</span>
              </article>
              <article className="glass-card stat-card">
                <strong>3+ Years</strong>
                <span>{t.about.statLearning}</span>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="container section">
          <div className="section-heading fade-up">
            <p>{t.skills.label}</p>
            <h3>{t.skills.title}</h3>
          </div>

          <div className="skills-grid fade-up delay-1">
            {techStack.map((tech) => (
              <article key={tech.name} className="glass-card tech-card">
                <div className="tech-icon">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    width={26}
                    height={26}
                    className="tech-icon-image"
                  />
                </div>
                <h4>{tech.name}</h4>
                <p>{t.skills.levels[tech.level]}</p>
                <div className="skill-meter">
                  <span
                    style={{
                      width: getSkillMeterWidth(tech.level),
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="container section">
          <div className="section-heading fade-up">
            <p className="section-mark">{t.sections.featured}</p>
            <p>{t.sections.projects}</p>
            <h3>{t.sections.projectsTitle}</h3>
          </div>

          <div className="projects-grid fade-up delay-1">
            {projects.map((project) => (
              <article key={project.title} className="glass-card project-card">
                <div className="project-preview" aria-hidden="true">
                  <div className="project-preview-inner">
                    <Image
                      src={project.coverImage}
                      alt=""
                      fill
                      sizes="(max-width: 860px) 100vw, 430px"
                      className="project-preview-image"
                    />
                    <div className="project-preview-label">{project.title}</div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-head">
                    <div>
                      <h4>{project.title}</h4>
                      <p>{textByLanguage(project.type, language)}</p>
                    </div>
                    <span className="status-badge">{t.sections.inDevelopment}</span>
                  </div>

                  <p className="project-description">
                    {textByLanguage(project.description, language)}
                  </p>

                  <div className="badge-row">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <Link href={`/projects/${project.slug}`}>
                      {t.sections.moreDetails}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="container section">
          <div className="section-heading fade-up">
            <p>{t.sections.experience}</p>
            <h3>{t.sections.experienceTitle}</h3>
          </div>

          <div className="timeline fade-up delay-1">
            {experiences.map((item) => (
              <article key={item.year} className="timeline-item">
                <span className="timeline-dot" />
                <p className="timeline-year">{item.year}</p>
                <h4>{textByLanguage(item.role, language)}</h4>
                <p className="timeline-place">{textByLanguage(item.place, language)}</p>
                <p className="timeline-details">
                  {textByLanguage(item.details, language)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="container section">
          <div className="section-heading fade-up">
            <p>{t.sections.certificates}</p>
            <h3>{t.sections.certificatesTitle}</h3>
          </div>

          <div className="cert-grid fade-up delay-1">
            {certificates.map((cert) => (
              <article key={cert.title.en} className="glass-card cert-card">
                <div className="cert-preview" aria-hidden="true" />
                <h4>{textByLanguage(cert.title, language)}</h4>
                <p>{textByLanguage(cert.issuer, language)}</p>
                <span>{cert.year}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="container section">
          <div className="section-heading fade-up">
            <p>{t.sections.contact}</p>
            <h3>{t.sections.contactTitle}</h3>
          </div>

          <article className="glass-card contact-card fade-up delay-1">
            <a href={`mailto:${profileConfig.email}`}>{profileConfig.email}</a>
            <a href={profileConfig.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={profileConfig.linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={profileConfig.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </article>

          <article className="glass-card cta-band fade-up delay-1">
            <div>
              <p>{t.sections.available}</p>
              <h4>{t.sections.buildTogether}</h4>
            </div>
            <a href={`mailto:${profileConfig.email}`} className="btn btn-primary">
              {t.sections.startConversation}
            </a>
          </article>
        </section>
      </main>

      <footer className="container footer">
        <p>{t.footer.copyright}</p>
        <div>
          <a href={profileConfig.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profileConfig.linkedIn} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profileConfig.email}`}>{t.footer.email}</a>
        </div>
      </footer>
    </div>
  );
}
