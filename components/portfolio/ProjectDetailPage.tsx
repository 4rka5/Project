"use client";
import styles from "./ProjectDetail.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, type Language } from "../../hooks/use-language";
import { profileConfig } from "../../lib/site-config";
import type {
  LocalizedText,
  ProjectGalleryItem,
  ProjectItem,
} from "../../data/portfolio-data";

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
    galleryLabel: "Screenshot Group",
    openPreview: "View larger",
    closePreview: "Close preview",
    galleryHint:
      "Open a larger preview and switch between screenshots from the selected feature.",
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
    galleryLabel: "Kelompok Screenshot",
    openPreview: "Lihat lebih jelas",
    closePreview: "Tutup pratinjau",
    galleryHint:
      "Buka pratinjau yang lebih besar dan pindah antar screenshot dari fitur yang dipilih.",
    projectDetails: "Detail Project",
    builtFor: "Dibuat untuk",
    languageToggle: "Ubah bahasa",
  },
} as const;

  function encodePublicPath(path: string) {
    return path
      .split("/")
      .map((segment) => encodeURIComponent(segment))
      .join("/");
  }

function textByLanguage(text: LocalizedText, language: Language) {
  return text[language];
}

export function ProjectDetailPage({ project }: { project: ProjectItem }) {
  const { language, toggleLanguage } = useLanguage();
  const t = copy[language];
    const galleryItems: ProjectGalleryItem[] =
      project.gallery ??
      project.features.map((feature) => ({
        title: feature.title,
        description: feature.description,
        images: [feature.image],
      }));
    const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const activeGalleryItem =
      activeGalleryIndex === null ? null : galleryItems[activeGalleryIndex];

    useEffect(() => {
      if (!activeGalleryItem) {
        return;
      }

      function handleKeyDown(event: KeyboardEvent) {
        if (!activeGalleryItem) {
          return;
        }

        if (event.key === "Escape") {
          setActiveGalleryIndex(null);
          return;
        }

        if (activeGalleryItem.images.length < 2) {
          return;
        }

        if (event.key === "ArrowRight") {
          setActiveImageIndex((current) => (current + 1) % activeGalleryItem.images.length);
        }

        if (event.key === "ArrowLeft") {
          setActiveImageIndex(
            (current) =>
              (current - 1 + activeGalleryItem.images.length) % activeGalleryItem.images.length
          );
        }
      }

      window.addEventListener("keydown", handleKeyDown);

      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeGalleryItem]);

    function closeGallery() {
      setActiveGalleryIndex(null);
      setActiveImageIndex(0);
    }

    function getGalleryDescription(item: ProjectGalleryItem) {
      if (item.description) {
        return textByLanguage(item.description, language);
      }

      return t.galleryHint;
    }

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
            {galleryItems.map((feature, index) => {
              const featureTitle = textByLanguage(feature.title, language);
              const featureDescription = getGalleryDescription(feature);
              const previewImage = feature.images[0];

              return (
                <article key={featureTitle} className="glass-card feature-card">
                  <div className="feature-image-wrap">
                    <Image
                      src={encodePublicPath(previewImage)}
                      alt={featureTitle}
                      fill
                      sizes="(max-width: 860px) 100vw, 33vw"
                      className="feature-image"
                    />
                    <div className="feature-image-overlay">
                      <span>{t.galleryLabel}</span>
                      <strong>{feature.images.length}</strong>
                    </div>
                  </div>
                  <div className="feature-copy">
                    <div className="feature-copy-head">
                      <div>
                        <p className="feature-copy-kicker">{t.galleryLabel}</p>
                        <h4>{featureTitle}</h4>
                      </div>
                      <span className="feature-count">{index + 1}</span>
                    </div>
                    <p>{featureDescription}</p>
                    <button
                      type="button"
                      className="btn btn-ghost feature-open-button"
                      onClick={() => {
                        setActiveGalleryIndex(index);
                        setActiveImageIndex(0);
                      }}
                    >
                      {t.openPreview}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {activeGalleryItem ? (
          <div className={styles.galleryModal} role="dialog" aria-modal="true">
            <button
              type="button"
              className={styles.galleryModalBackdrop}
              aria-label={t.closePreview}
              onClick={closeGallery}
            />
            <div className={`${styles.galleryModalPanel} glass-card`}>
              <div className={styles.galleryModalHeader}>
                <div>
                  <p className="detail-label">{t.galleryLabel}</p>
                  <h4>{textByLanguage(activeGalleryItem.title, language)}</h4>
                  <p>{getGalleryDescription(activeGalleryItem)}</p>
                </div>
                <button type="button" className="btn btn-ghost" onClick={closeGallery}>
                  {t.closePreview}
                </button>
              </div>

              <div className={styles.galleryModalMain}>
                <div className={styles.galleryModalFrame}>
                  <Image
                    src={encodePublicPath(activeGalleryItem.images[activeImageIndex])}
                    alt={textByLanguage(activeGalleryItem.title, language)}
                    fill
                    priority
                    loading="eager"
                    sizes="(max-width: 860px) 100vw, 900px"
                    className={styles.galleryModalImage}
                  />
                </div>

                <div className={styles.galleryModalMeta}>
                  <span>
                    {activeImageIndex + 1} / {activeGalleryItem.images.length}
                  </span>
                  <p>{t.galleryHint}</p>
                </div>
              </div>

              <div className={styles.galleryModalThumbs}>
                {activeGalleryItem.images.map((image, imageIndex) => {
                  const isActive = imageIndex === activeImageIndex;

                  return (
                    <button
                      type="button"
                      key={image}
                      className={`${styles.galleryThumb} ${isActive ? styles.galleryThumbActive : ""}`}
                      onClick={() => setActiveImageIndex(imageIndex)}
                      aria-label={`${textByLanguage(activeGalleryItem.title, language)} ${imageIndex + 1}`}
                    >
                      <Image
                        src={encodePublicPath(image)}
                        alt=""
                        fill
                        sizes="120px"
                        className={`${styles.galleryThumbImage} ${isActive ? styles.galleryThumbImageActive : ""}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}