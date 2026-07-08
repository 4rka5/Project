"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage, type Language } from "../../hooks/use-language";
import { profileConfig } from "../../lib/site-config";
import type { LocalizedText, ProjectItem } from "../../data/portfolio-data";

const copy = {
  en: {
    back: "Back to projects",
    sourceCode: "Source Code",
    overview: "Overview",
    challenge: "Challenge",
    solution: "Solution",
    stack: "Tech Stack",
    features: "Feature Gallery",
    featuresLead:
      "Each section below shows one feature with a visual reference so the project can be understood more completely.",
    projectDetails: "Project Details",
    builtFor: "Built for",
    languageToggle: "Toggle language",
  },
  id: {
    back: "Kembali ke proyek",
    sourceCode: "Kode Sumber",
    overview: "Gambaran Umum",
    challenge: "Tantangan",
    solution: "Solusi",
    stack: "Tech Stack",
    features: "Galeri Fitur",
    featuresLead:
      "Setiap bagian di bawah menampilkan satu fitur dengan referensi visual agar project bisa dipahami lebih lengkap.",
    projectDetails: "Detail Project",
    builtFor: "Dibuat untuk",
    languageToggle: "Ubah bahasa",
  },
} as const;

function textByLanguage(text: LocalizedText, language: Language) {
  return text[language];
}

export function ProjectDetailPage({ project }: { project: ProjectItem }) {
  const { language, toggleLanguage } = useLanguage();
  const t = copy[language];

  return (
    <div className="project-detail-root">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow bg-glow-one" aria-hidden="true" />
      <div className="bg-glow bg-glow-two" aria-hidden="true" />

      <header className="sticky top-0 z-50 backdrop-blur-xl">
        <nav className="container nav-shell project-detail-nav">
          <Link href="/" className="logo">
            {profileConfig.brand}
          </Link>
          <div className="project-detail-actions">
            <Link href="/#projects" className="btn btn-ghost">
              {t.back}
            </Link>
            <button
              type="button"
              className="btn btn-ghost lang-toggle"
              onClick={toggleLanguage}
              aria-label={t.languageToggle}
            >
              {language === "en" ? "EN" : "ID"}
            </button>
          </div>
        </nav>
      </header>

      <main className="project-detail-main">
        <section className="container project-detail-hero fade-up">
          <div className="project-detail-copy">
            <p className="eyebrow">{t.projectDetails}</p>
            <h1>{project.title}</h1>
            <p className="project-detail-type">{textByLanguage(project.type, language)}</p>
            <p className="project-detail-description">
              {textByLanguage(project.overview, language)}
            </p>

            <div className="detail-badges">
              {project.stack.map((stackItem) => (
                <span key={stackItem}>{stackItem}</span>
              ))}
            </div>

            <div className="project-detail-links">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t.sourceCode}
              </Link>
              <Link href="/#projects" className="btn btn-ghost">
                {t.back}
              </Link>
            </div>
          </div>

          <div className="project-detail-visual glass-card">
            <div className="detail-visual-frame">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1040px) 100vw, 520px"
                className="detail-cover-image"
              />
            </div>
          </div>
        </section>

        <section className="container project-detail-grid fade-up delay-1">
          <article className="glass-card detail-panel">
            <div>
              <p className="detail-label">{t.overview}</p>
              <p>{textByLanguage(project.overview, language)}</p>
            </div>
            <div>
              <p className="detail-label">{t.challenge}</p>
              <p>{textByLanguage(project.challenge, language)}</p>
            </div>
            <div>
              <p className="detail-label">{t.solution}</p>
              <p>{textByLanguage(project.solution, language)}</p>
            </div>
          </article>

          <aside className="glass-card detail-sidebar">
            <p className="detail-label">{t.builtFor}</p>
            <h2>{project.title}</h2>
            <p>{textByLanguage(project.description, language)}</p>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-sidebar-link"
            >
              {t.sourceCode}
            </Link>
          </aside>
        </section>

        <section className="container project-feature-section fade-up delay-1">
          <div className="section-heading">
            <p>{t.features}</p>
            <h3>{t.featuresLead}</h3>
          </div>

          <div className="feature-grid">
            {project.features.map((feature) => (
              <article
                key={textByLanguage(feature.title, language)}
                className="glass-card feature-card"
              >
                <div className="feature-image-wrap">
                  <Image
                    src={feature.image}
                    alt={textByLanguage(feature.title, language)}
                    fill
                    sizes="(max-width: 860px) 100vw, 33vw"
                    className="feature-image"
                  />
                </div>
                <div className="feature-copy">
                  <h4>{textByLanguage(feature.title, language)}</h4>
                  <p>{textByLanguage(feature.description, language)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}