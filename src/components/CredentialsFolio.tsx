import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { CERTIFICATIONS, type CertificationItem } from '../data/profileData';

export default function CredentialsFolio() {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="credentials" className="py-20 lg:py-28 rule-t">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
        {/* Section Heading */}
        <div className="grid grid-cols-1 gap-6 pb-12 rule-b lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="font-mono-index text-[11px] uppercase tracking-[0.16em] text-[var(--action-primary)]">
              04 — Verified Credentials
            </p>
            <h2 className="mt-3 font-editorial text-[clamp(2rem,4vw,3.35rem)] font-normal leading-[1.06] tracking-[-0.025em] text-[var(--text-primary)]">
              Financial Modeling &amp; Commercial Certifications
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <p className="max-w-[56ch] text-[15px] leading-[1.65] text-[var(--text-muted)]">
              Specialized credentials uniting pre-revenue and commercial biotech financial valuation
              (10-K analysis, 3-statement, DCF, and PoS-adjusted rNPV) with UC San Diego drug
              product lifecycle commercialization.
            </p>
          </div>
        </div>

        {/* Two-Column Hairline-Divided Archival Folio */}
        <div className="grid grid-cols-1 divide-y divide-[var(--border-hairline)] lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {CERTIFICATIONS.map((cert, idx) => (
            <article
              key={cert.id}
              className={`flex flex-col justify-between py-10 ${
                idx === 0 ? 'lg:pr-12' : 'lg:pl-12'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  <span className="text-[var(--action-primary)]">
                    Credential {String(idx + 1).padStart(2, '0')} · {cert.category}
                  </span>
                  <span>{cert.issuer}</span>
                </div>

                <h3 className="mt-3 font-editorial text-2xl font-normal leading-[1.2] text-[var(--text-primary)] sm:text-3xl">
                  {cert.title}
                </h3>

                <p className="mt-1.5 text-[13px] font-medium text-[var(--accent-science)]">
                  {cert.subtitle}
                </p>

                <ul className="mt-6 space-y-3">
                  {cert.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-[14.5px] leading-[1.62] text-[var(--text-secondary)]"
                    >
                      <span className="mt-2 h-[3px] w-[3px] shrink-0 bg-[var(--text-primary)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {cert.appliedTo && (
                  <p className="mt-6 font-mono-index text-[11px] text-[var(--text-muted)]">
                    <span className="uppercase tracking-[0.12em] text-[var(--text-primary)]">
                      Applied Cases:{' '}
                    </span>
                    {cert.appliedTo}
                  </p>
                )}
              </div>

              {/* Clean Framed Certificate Plate + Primary Action */}
              <div className="mt-8 pt-6 rule-t">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="group block w-full overflow-hidden border border-[var(--border-hairline)] bg-[var(--surface-linen)] p-2 text-left"
                >
                  <div className="h-52 overflow-hidden bg-white">
                    <img
                      src={cert.imageSrc}
                      alt={`${cert.title} Certificate`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between font-mono-index text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    <span>Verified Archival Document</span>
                    <span className="inline-flex items-center gap-1 text-[var(--action-primary)]">
                      Inspect Full Certificate
                      <Maximize2 className="h-3 w-3" />
                    </span>
                  </div>
                </button>

                {cert.externalLinkUrl && cert.externalLinkLabel && (
                  <a
                    href={cert.externalLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 bg-[var(--text-primary)] px-5 py-3 text-[13px] font-medium text-[var(--surface-primary)] transition-colors hover:bg-[var(--action-primary)] hover:text-[#FAF8F4]"
                  >
                    {cert.externalLinkLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Archival Certificate Viewer */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden border border-white/15 bg-[#141412]"
            >
              <div className="flex items-center justify-between border-b border-white/15 px-5 py-4">
                <div>
                  <p className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[#D9465F]">
                    {activeCert.category}
                  </p>
                  <h4 className="mt-0.5 font-editorial text-xl text-[#F0ECE4]">
                    {activeCert.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  aria-label="Close certificate viewer"
                  className="flex h-9 w-9 items-center justify-center border border-white/20 text-white hover:bg-[#9E1B32]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="overflow-y-auto p-5">
                <img
                  src={activeCert.imageSrc}
                  alt={activeCert.title}
                  className="mx-auto w-full max-w-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
