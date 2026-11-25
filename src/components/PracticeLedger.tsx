import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import { EXPERIENCES, PROFILE } from '../data/profileData';

const EASE = [0.19, 1, 0.22, 1] as const;

export default function PracticeLedger() {
  const [openId, setOpenId] = useState<string>(EXPERIENCES[0].id);

  return (
    <section id="practice" className="py-20 lg:py-28 rule-t">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
        {/* Section Masthead */}
        <div className="grid grid-cols-1 gap-6 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <p className="font-mono-index text-[11px] uppercase tracking-[0.16em] text-[var(--action-primary)]">
              01 — Trajectory
            </p>
            <h2 className="mt-3 font-editorial text-[clamp(2rem,4vw,3.35rem)] font-normal leading-[1.06] tracking-[-0.025em] text-[var(--text-primary)]">
              Practice &amp; Academic Foundation
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:col-span-8 lg:flex-row lg:items-end">
            <p className="max-w-[50ch] text-[15px] leading-[1.65] text-[var(--text-muted)]">
              An interdisciplinary record spanning healthcare venture capital, wet-lab antibody
              discovery, graduate biotechnology enterprise, and life science strategy consulting.
            </p>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link shrink-0 text-[13px] font-medium text-[var(--text-primary)] hover:text-[var(--action-primary)]"
            >
              Download Full Resume
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Hairline Architectural Ledger */}
        <div className="border-t border-[var(--border-strong)]">
          {EXPERIENCES.map((exp, idx) => {
            const isOpen = openId === exp.id;
            const indexNum = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={exp.id}
                className="border-b border-[var(--border-hairline)] transition-colors duration-300"
                style={{
                  backgroundColor: isOpen ? 'var(--surface-elevated)' : 'transparent',
                }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : exp.id)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-12 items-baseline gap-4 px-2 py-6 text-left transition-colors hover:bg-[var(--surface-linen)]/60 sm:px-4"
                >
                  <span className="col-span-2 font-mono-index text-xs text-[var(--action-primary)] sm:col-span-1">
                    {indexNum}
                  </span>

                  <div className="col-span-8 sm:col-span-4">
                    <div className="font-editorial text-xl font-medium text-[var(--text-primary)] sm:text-2xl">
                      {exp.organization}
                    </div>
                    <div className="mt-0.5 font-mono-index text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {exp.badge}
                    </div>
                  </div>

                  <div className="col-span-12 pl-0 text-[14px] text-[var(--text-secondary)] sm:col-span-5 sm:pl-0">
                    {exp.role}
                  </div>

                  <div className="col-span-10 font-mono-index text-[11px] text-[var(--text-muted)] sm:col-span-1 sm:text-right">
                    {exp.location}
                  </div>

                  <div className="col-span-2 flex justify-end text-[var(--text-primary)] sm:col-span-1">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-[var(--action-primary)]" />
                    ) : (
                      <Plus className="h-4 w-4 opacity-60" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-6 px-4 pb-8 pt-2">
                        <div className="hidden sm:col-span-1 sm:block" />

                        <div className="col-span-12 sm:col-span-4">
                          {exp.subOrganization && (
                            <p className="text-[13px] font-medium text-[var(--text-primary)]">
                              {exp.subOrganization}
                            </p>
                          )}
                          <p className="mt-2 text-[14px] leading-[1.65] text-[var(--text-muted)]">
                            {exp.description}
                          </p>
                          {exp.logoSrc && (
                            <div className="mt-5 inline-flex items-center gap-3 border border-[var(--border-hairline)] bg-white px-3 py-2">
                              <img
                                src={exp.logoSrc}
                                alt="Northeastern University Seal"
                                className="h-10 w-10 object-contain"
                              />
                              <span className="font-mono-index text-[10px] uppercase tracking-[0.1em] text-[#141412]">
                                D&apos;Amore-McKim &amp; College of Science
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="col-span-12 sm:col-span-7">
                          <p className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                            Key Scope &amp; Contributions
                          </p>
                          <ul className="mt-3 divide-y divide-[var(--border-hairline)] border-t border-[var(--border-hairline)]">
                            {exp.highlights.map((item, i) => (
                              <li
                                key={item}
                                className="flex items-baseline gap-4 py-3 text-[14px] leading-[1.55] text-[var(--text-secondary)]"
                              >
                                <span className="font-mono-index text-[10px] text-[var(--accent-science)]">
                                  {String(i + 1).padStart(2, '0')}
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
