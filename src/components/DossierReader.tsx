import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, Minimize2, X } from 'lucide-react';
import type { ProjectItem } from '../data/profileData';

interface DossierReaderProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const EASE = [0.19, 1, 0.22, 1] as const;

export default function DossierReader({ project, onClose }: DossierReaderProps) {
  const [slideIdx, setSlideIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setSlideIdx(0);
    setExpanded(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (expanded) setExpanded(false);
        else onClose();
      } else if (e.key === 'ArrowRight') {
        setSlideIdx((i) => (i + 1) % project.slides.length);
      } else if (e.key === 'ArrowLeft') {
        setSlideIdx((i) => (i - 1 + project.slides.length) % project.slides.length);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [project, expanded, onClose]);

  const activeSlide = project ? project.slides[slideIdx] || project.slides[0] : null;

  return (
    <AnimatePresence>
      {project && activeSlide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden border border-[var(--border-hairline)] bg-[var(--surface-primary)]"
          >
            {/* Architectural Header */}
            <div className="flex items-start justify-between gap-6 px-6 py-5 rule-b sm:px-8">
              <div>
                <p className="font-mono-index text-[10px] uppercase tracking-[0.16em] text-[var(--action-primary)]">
                  {project.category} · {project.date}
                </p>
                <h3 className="mt-1 font-editorial text-2xl font-normal leading-tight text-[var(--text-primary)] sm:text-3xl">
                  {project.title}
                </h3>
              </div>

              <button
                onClick={onClose}
                aria-label="Close dossier"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--border-hairline)] text-[var(--text-primary)] transition-colors hover:border-[var(--action-primary)] hover:text-[var(--action-primary)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              {/* Slide Viewer Frame */}
              <div className="border border-[var(--border-hairline)] bg-[#141412]">
                <div
                  className={`relative flex items-center justify-center transition-all ${
                    expanded ? 'min-h-[62vh]' : 'aspect-[16/9]'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSlide.src}
                      src={activeSlide.src}
                      alt={activeSlide.caption}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`max-w-full object-contain ${
                        expanded ? 'max-h-[64vh]' : 'max-h-full p-2'
                      }`}
                    />
                  </AnimatePresence>

                  <button
                    onClick={() => setExpanded((v) => !v)}
                    aria-label={expanded ? 'Reduce slide' : 'Expand slide'}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-white/20 bg-black/70 text-white transition-colors hover:bg-[#9E1B32]"
                  >
                    {expanded ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Slide Controls & Caption Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/15 bg-[#1B1A18] px-4 py-3 text-xs text-[#E8E4DC]">
                  <span className="truncate">{activeSlide.caption}</span>

                  <div className="flex items-center gap-4">
                    <span className="font-mono-index text-[11px] text-[#B8B2A6]">
                      {String(slideIdx + 1).padStart(2, '0')} /{' '}
                      {String(project.slides.length).padStart(2, '0')}
                    </span>
                    {project.slides.length > 1 && (
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() =>
                            setSlideIdx(
                              (i) => (i - 1 + project.slides.length) % project.slides.length
                            )
                          }
                          aria-label="Previous slide"
                          className="flex h-8 w-8 items-center justify-center border border-white/20 text-white transition hover:border-white hover:bg-white/10"
                        >
                          <ArrowLeft className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => setSlideIdx((i) => (i + 1) % project.slides.length)}
                          aria-label="Next slide"
                          className="flex h-8 w-8 items-center justify-center border border-white/20 text-white transition hover:border-white hover:bg-white/10"
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Crisp Thumbnail Filmstrip */}
                {project.slides.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-[#111110] p-3">
                    {project.slides.map((s, i) => (
                      <button
                        key={s.src}
                        onClick={() => setSlideIdx(i)}
                        className={`h-12 w-20 shrink-0 overflow-hidden border transition ${
                          i === slideIdx
                            ? 'border-[#D9465F] opacity-100'
                            : 'border-white/10 opacity-45 hover:opacity-90'
                        }`}
                      >
                        <img src={s.src} alt={s.caption} className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Architectural Metadata Ledger */}
              <dl className="mt-7 grid grid-cols-1 gap-6 pb-6 rule-b sm:grid-cols-3">
                <div>
                  <dt className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    {project.roleOrDeptLabel}
                  </dt>
                  <dd className="mt-1 text-[14px] font-medium text-[var(--text-primary)]">
                    {project.roleOrDeptValue}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    Institution / Location
                  </dt>
                  <dd className="mt-1 text-[14px] font-medium text-[var(--text-primary)]">
                    {project.locationOrOrg}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    Deliverable Classification
                  </dt>
                  <dd className="mt-1 text-[14px] font-medium text-[var(--text-primary)]">
                    {project.projectType}
                  </dd>
                </div>
              </dl>

              {/* Editorial Summary */}
              <div className="mt-6">
                <p className="font-mono-index text-[10px] uppercase tracking-[0.16em] text-[var(--action-primary)]">
                  Executive Summary
                </p>
                <p className="mt-2.5 max-w-[68ch] text-[15.5px] leading-[1.7] text-[var(--text-secondary)]">
                  {project.summary}
                </p>
              </div>

              {/* Mission & Vision Split */}
              {(project.mission || project.vision) && (
                <div className="mt-7 grid grid-cols-1 gap-8 pt-6 rule-t md:grid-cols-2">
                  {project.mission && (
                    <div>
                      <p className="font-mono-index text-[10px] uppercase tracking-[0.16em] text-[var(--accent-science)]">
                        Mission
                      </p>
                      <p className="mt-2 text-[14.5px] leading-[1.65] text-[var(--text-secondary)]">
                        {project.mission}
                      </p>
                    </div>
                  )}
                  {project.vision && (
                    <div>
                      <p className="font-mono-index text-[10px] uppercase tracking-[0.16em] text-[var(--accent-science)]">
                        Vision
                      </p>
                      <p className="mt-2 text-[14.5px] leading-[1.65] text-[var(--text-secondary)]">
                        {project.vision}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Strategic Takeaways */}
              {project.highlights && (
                <div className="mt-7 pt-6 rule-t">
                  <p className="font-mono-index text-[10px] uppercase tracking-[0.16em] text-[var(--accent-science)]">
                    Key Analytical Findings
                  </p>
                  <ul className="mt-3 divide-y divide-[var(--border-hairline)]">
                    {project.highlights.map((h, i) => (
                      <li
                        key={h}
                        className="flex items-baseline gap-4 py-2.5 text-[14.5px] leading-[1.6] text-[var(--text-secondary)]"
                      >
                        <span className="font-mono-index text-[10px] text-[var(--text-muted)]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Table of Contents (Business Plan) */}
              {project.tableOfContents && (
                <div className="mt-7 pt-6 rule-t">
                  <p className="font-mono-index text-[10px] uppercase tracking-[0.16em] text-[var(--action-primary)]">
                    Business Plan Table of Contents
                  </p>
                  <div className="mt-3 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                    {project.tableOfContents.map((ch) => (
                      <div
                        key={ch}
                        className="py-2.5 rule-b text-[14px] text-[var(--text-secondary)]"
                      >
                        {ch}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Action */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 rule-t">
                <span className="font-mono-index text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  {project.tags.join('  /  ')}
                </span>

                {project.externalLinkUrl.startsWith('http') ? (
                  <a
                    href={project.externalLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--text-primary)] px-5 py-3 text-[13px] font-medium text-[var(--surface-primary)] transition-colors hover:bg-[var(--action-primary)] hover:text-[#FAF8F4]"
                  >
                    {project.externalLinkLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      onClose();
                      document.getElementById('toolkit')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 bg-[var(--text-primary)] px-5 py-3 text-[13px] font-medium text-[var(--surface-primary)] transition-colors hover:bg-[var(--action-primary)] hover:text-[#FAF8F4]"
                  >
                    {project.externalLinkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
