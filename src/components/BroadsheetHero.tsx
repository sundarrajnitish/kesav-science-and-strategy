import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profileData';

const EASE = [0.19, 1, 0.22, 1] as const;

export default function BroadsheetHero() {
  return (
    <section className="relative pt-10 pb-20 lg:pt-14 lg:pb-28">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
        {/* Top Broadsheet Dateline Rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 pb-5 rule-b font-mono-index text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]"
        >
          <span>{PROFILE.fullName}</span>
          <span className="hidden md:inline">
            Strategy Analyst · JUST LABS (Healthcare Venture Capital)
          </span>
          <span>New York, NY — Brookline, MA</span>
        </motion.div>

        {/* Monumental Editorial Display Headline (Masked Baseline Curtain Reveal) */}
        <div className="pt-10 pb-10 lg:pt-14 lg:pb-14">
          <h1 className="font-editorial text-[clamp(2.85rem,7.2vw,6.5rem)] font-normal leading-[0.98] tracking-[-0.03em] text-[var(--text-primary)]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, ease: EASE }}
                className="block"
              >
                Bridging the realms of
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
                className="block"
              >
                <em className="font-normal italic text-[var(--action-primary)]">
                  Science &amp; Strategy.
                </em>
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Asymmetric 12-Column Editorial Split */}
        <div className="grid grid-cols-1 gap-12 pt-8 rule-t lg:grid-cols-12 lg:gap-14">
          {/* Left Narrative & Archival Index (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="font-mono-index text-[11px] uppercase tracking-[0.16em] text-[var(--action-primary)]">
                Profile &amp; Thesis
              </p>
              <p className="mt-5 max-w-[54ch] text-[17px] leading-[1.68] text-[var(--text-secondary)]">
                {PROFILE.bio}
              </p>

              {/* Editorial Actions — Underlined architectural typography, zero glowing pill buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="#dossiers"
                  className="inline-flex items-center gap-2.5 bg-[var(--text-primary)] px-6 py-3.5 text-[13px] font-medium tracking-[0.03em] text-[var(--surface-primary)] transition-colors hover:bg-[var(--action-primary)] hover:text-[#FAF8F4]"
                >
                  Selected Dossiers
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>

                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-[14px] font-medium text-[var(--text-primary)] hover:text-[var(--action-primary)]"
                >
                  View Curriculum Vitae
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quiet Institutional Colophon Ledger */}
            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 pt-6 rule-t">
              <div>
                <dt className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Current Practice
                </dt>
                <dd className="mt-1 text-[14px] font-medium text-[var(--text-primary)]">
                  JUST LABS · Venture Studio
                </dd>
                <dd className="text-[12px] text-[var(--text-muted)]">
                  Platform Evaluation &amp; NPP
                </dd>
              </div>
              <div>
                <dt className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Graduate Training
                </dt>
                <dd className="mt-1 text-[14px] font-medium text-[var(--text-primary)]">
                  Northeastern University
                </dd>
                <dd className="text-[12px] text-[var(--text-muted)]">
                  M.S. Biotechnology Enterprise
                </dd>
              </div>
              <div>
                <dt className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Bench Foundation
                </dt>
                <dd className="mt-1 text-[14px] font-medium text-[var(--text-primary)]">
                  Ring Therapeutics
                </dd>
                <dd className="text-[12px] text-[var(--text-muted)]">
                  Antibody Discovery Pipeline
                </dd>
              </div>
              <div>
                <dt className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Analytical Rigor
                </dt>
                <dd className="mt-1 text-[14px] font-medium text-[var(--text-primary)]">
                  DCF · rNPV · HEOR
                </dd>
                <dd className="text-[12px] text-[var(--text-muted)]">
                  HTA (NICE / ICER) &amp; VISTA
                </dd>
              </div>
            </dl>
          </motion.div>

          {/* Right Art-Directed Photographic Plates (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
              {/* Primary Portrait Plate — Crisp archival corners, zero floating chips */}
              <figure className="sm:col-span-7">
                <div className="overflow-hidden border border-[var(--border-hairline)] bg-[var(--surface-linen)] p-2.5">
                  <div className="aspect-[4/4.6] overflow-hidden">
                    <img
                      src={PROFILE.portraitSrc}
                      alt="Kesav Ram Singh Kishore Singh"
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-mono-index text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  <span>FIG. 01 — Kesav Ram Singh</span>
                  <span>New York, NY</span>
                </figcaption>
              </figure>

              {/* Secondary Contextual Plate + Dual-Domain Editorial Manifesto */}
              <div className="flex flex-col justify-between gap-5 sm:col-span-5">
                <figure>
                  <div className="overflow-hidden border border-[var(--border-hairline)] bg-[var(--surface-linen)] p-2">
                    <div className="aspect-[16/11] overflow-hidden">
                      <img
                        src={PROFILE.heroBannerSrc}
                        alt="Molecular DNA structure and metropolitan biotech enterprise"
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-2.5 font-mono-index text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    FIG. 02 — Molecular-to-Market Interface
                  </figcaption>
                </figure>

                {/* Crisp Archival Pull-Quote Note */}
                <div className="border-t border-[var(--border-strong)] pt-4">
                  <p className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--accent-science)]">
                    Core Discipline
                  </p>
                  <p className="mt-2 font-editorial text-[19px] leading-[1.42] text-[var(--text-primary)]">
                    Evaluating therapeutic platforms from Mechanism of Action and pre-clinical PK/PD
                    through risk-adjusted rNPV, payer dossiers, and Series B inflection.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
