import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/profileData';

interface DossierExhibitionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const EASE = [0.19, 1, 0.22, 1] as const;

const FILTERS = [
  'All',
  'Pitch Deck & Innovation',
  'Growth Strategy & M&A',
  'Business Writing',
  'Consulting Case',
] as const;

export default function DossierExhibition({ onSelectProject }: DossierExhibitionProps) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const items = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const lead = filter === 'All' ? items[0] : null;
  const gridItems = lead ? items.slice(1) : items;

  const countFor = (cat: (typeof FILTERS)[number]) =>
    cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;

  return (
    <section id="dossiers" className="py-20 lg:py-28 rule-t">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
        {/* Section Heading & Underlined Editorial Filter Index */}
        <div className="flex flex-col justify-between gap-8 pb-10 rule-b lg:flex-row lg:items-end">
          <div>
            <p className="font-mono-index text-[11px] uppercase tracking-[0.16em] text-[var(--action-primary)]">
              02 — Selected Dossiers
            </p>
            <h2 className="mt-3 font-editorial text-[clamp(2rem,4vw,3.35rem)] font-normal leading-[1.06] tracking-[-0.025em] text-[var(--text-primary)]">
              Case Studies, Pitch Decks &amp; Business Writing
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter portfolio dossiers"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {FILTERS.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(cat)}
                  className="relative pb-2 text-[13px] tracking-[0.01em] transition-colors"
                  style={{
                    color: active ? 'var(--text-primary)' : 'var(--text-muted)',
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  <span>{cat}</span>
                  <sup className="font-mono-index ml-1 text-[9px] text-[var(--action-primary)]">
                    {String(countFor(cat)).padStart(2, '0')}
                  </sup>
                  {active && (
                    <motion.span
                      layoutId="dossierFilterLine"
                      transition={{ duration: 0.35, ease: EASE }}
                      className="absolute inset-x-0 bottom-0 h-[2px]"
                      style={{ backgroundColor: 'var(--action-primary)' }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Lead Dossier Plate (12-column editorial spread) */}
        <AnimatePresence mode="wait">
          {lead && (
            <motion.article
              key={`lead-${lead.id}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              onClick={() => onSelectProject(lead)}
              className="group mt-12 grid cursor-pointer grid-cols-1 gap-8 pb-14 rule-b lg:grid-cols-12 lg:items-center lg:gap-12"
            >
              <div className="lg:col-span-7">
                <div className="overflow-hidden border border-[var(--border-hairline)] bg-[var(--surface-linen)] p-2.5">
                  <div className="aspect-[16/10] overflow-hidden bg-[#141412]">
                    <img
                      src={lead.heroImage}
                      alt={lead.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between lg:col-span-5">
                <div>
                  <div className="flex items-center justify-between font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    <span className="text-[var(--action-primary)]">Dossier 01 — Featured</span>
                    <span>
                      {lead.date} · {lead.locationOrOrg}
                    </span>
                  </div>

                  <h3 className="mt-4 font-editorial text-3xl font-normal leading-[1.12] tracking-[-0.02em] text-[var(--text-primary)] transition-colors group-hover:text-[var(--action-primary)] sm:text-4xl">
                    {lead.title}
                  </h3>

                  <p className="mt-2 font-mono-index text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                    {lead.roleOrDeptValue}
                  </p>

                  <p className="mt-5 text-[15px] leading-[1.68] text-[var(--text-secondary)]">
                    {lead.summary}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-5 rule-t">
                  <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--text-primary)] transition-colors group-hover:text-[var(--action-primary)]">
                    Inspect {lead.slides.length}-Slide Dossier
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>

                  <a
                    href={lead.externalLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="editorial-link font-mono-index text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  >
                    Google Slides
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>

        {/* 2-Column Museum Exhibition Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {gridItems.map((project, i) => {
              const num = String((lead ? i + 2 : i + 1)).padStart(2, '0');
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease: EASE }}
                  onClick={() => onSelectProject(project)}
                  className="group flex cursor-pointer flex-col"
                >
                  {/* Clean Uncluttered Photographic Plate */}
                  <div className="overflow-hidden border border-[var(--border-hairline)] bg-[var(--surface-linen)] p-2">
                    <div className="aspect-[16/10] overflow-hidden bg-[var(--surface-elevated)]">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  {/* Metadata & Typographic Caption Beneath Frame */}
                  <div className="mt-5 flex flex-1 flex-col">
                    <div className="flex items-baseline justify-between gap-4 font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      <span>
                        <strong className="font-medium text-[var(--action-primary)]">
                          Dossier {num}
                        </strong>{' '}
                        · {project.category}
                      </span>
                      <span>
                        {project.date} · {project.slides.length}{' '}
                        {project.slides.length === 1 ? 'Plate' : 'Slides'}
                      </span>
                    </div>

                    <h3 className="mt-2.5 font-editorial text-2xl font-normal leading-[1.18] tracking-[-0.015em] text-[var(--text-primary)] transition-colors group-hover:text-[var(--action-primary)] sm:text-[1.7rem]">
                      {project.title}
                    </h3>

                    <p className="mt-3 flex-1 text-[14.5px] leading-[1.65] text-[var(--text-secondary)]">
                      {project.summary}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-4 pt-4 rule-t">
                      <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--text-primary)] transition-colors group-hover:text-[var(--action-primary)]">
                        Open Dossier
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>

                      <span className="font-mono-index text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                        {project.locationOrOrg}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
