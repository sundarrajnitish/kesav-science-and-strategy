import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, X } from 'lucide-react';
import { PROFILE } from '../data/profileData';

type LegalNotice = 'privacy' | 'accessibility' | null;

export default function ColophonFooter() {
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState<LegalNotice>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <footer id="correspondence" className="pt-20 pb-12 rule-t lg:pt-28">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
        {/* Oversized Editorial Correspondence Line */}
        <div className="pb-14 rule-b">
          <p className="font-mono-index text-[11px] uppercase tracking-[0.16em] text-[var(--action-primary)]">
            05 — Direct Correspondence
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <a
              href={`mailto:${PROFILE.email}`}
              className="font-editorial text-[clamp(2rem,5.4vw,4.75rem)] font-normal leading-none tracking-[-0.025em] text-[var(--text-primary)] transition-colors hover:text-[var(--action-primary)]"
            >
              {PROFILE.email}
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex w-fit items-center gap-2 border border-[var(--border-hairline)] px-4 py-2.5 font-mono-index text-[11px] uppercase tracking-[0.12em] text-[var(--text-primary)] transition-colors hover:border-[var(--action-primary)] hover:text-[var(--action-primary)]"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[var(--accent-science)]" />
                  Copied to Clipboard
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy Address
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3-Column Broadsheet Contact Ledger */}
        <div className="grid grid-cols-1 gap-10 py-12 rule-b md:grid-cols-3">
          <div>
            <p className="font-mono-index text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
              Principal
            </p>
            <p className="mt-3 font-editorial text-xl text-[var(--text-primary)]">
              {PROFILE.fullName}
            </p>
            <p className="mt-1.5 text-[14px] leading-[1.6] text-[var(--text-secondary)]">
              Life Science Analyst (Platform Evaluation &amp; NPP) at JUST LABS — Venture
              Accelerator &amp; Studio.
            </p>
            <p className="mt-1 text-[13px] text-[var(--text-muted)]">
              M.S. Biotechnology Enterprise · D&apos;Amore-McKim School of Business &amp; College of
              Science
            </p>
          </div>

          <div>
            <p className="font-mono-index text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
              Direct Channels
            </p>
            <dl className="mt-3 space-y-2.5 text-[14px]">
              <div>
                <dt className="sr-only">Telephone</dt>
                <dd>
                  <a
                    href="tel:+18576939882"
                    className="editorial-link text-[var(--text-primary)] hover:text-[var(--action-primary)]"
                  >
                    {PROFILE.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="editorial-link text-[var(--text-primary)] hover:text-[var(--action-primary)]"
                  >
                    {PROFILE.email}
                  </a>
                </dd>
              </div>
              <div className="pt-1 text-[13.5px] leading-[1.55] text-[var(--text-muted)]">
                {PROFILE.address}
              </div>
            </dl>
          </div>

          <div>
            <p className="font-mono-index text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
              Documents &amp; Notices
            </p>
            <ul className="mt-3 space-y-2.5 text-[14px]">
              <li>
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-[var(--text-primary)] hover:text-[var(--action-primary)]"
                >
                  Curriculum Vitae (Google Drive)
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => setNotice('privacy')}
                  className="editorial-link text-[var(--text-secondary)] hover:text-[var(--action-primary)]"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setNotice('accessibility')}
                  className="editorial-link text-[var(--text-secondary)] hover:text-[var(--action-primary)]"
                >
                  Accessibility Statement
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Colophon Line */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 font-mono-index text-[10.5px] uppercase tracking-[0.14em] text-[var(--text-muted)] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Kesav Ram Singh · Science &amp; Strategy</span>
          <span>New York · Boston</span>
        </div>
      </div>

      {/* Archival Legal Drawer */}
      <AnimatePresence>
        {notice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setNotice(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg border border-[var(--border-hairline)] bg-[var(--surface-primary)] p-7"
            >
              <div className="flex items-center justify-between pb-4 rule-b">
                <h3 className="font-editorial text-2xl text-[var(--text-primary)]">
                  {notice === 'privacy' ? 'Privacy Policy' : 'Accessibility Statement'}
                </h3>
                <button
                  onClick={() => setNotice(null)}
                  aria-label="Close notice"
                  className="flex h-8 w-8 items-center justify-center border border-[var(--border-hairline)] text-[var(--text-primary)] hover:border-[var(--action-primary)]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-[14.5px] leading-[1.68] text-[var(--text-secondary)]">
                {notice === 'privacy' ? (
                  <>
                    <p>
                      This portfolio monograph for Kesav Ram Singh Kishore Singh is a static
                      publication and does not collect, sell, or store visitor tracking data or
                      advertising cookies.
                    </p>
                    <p>
                      Only your optional Paper / Ink display preference is stored locally in your
                      browser. External links (Google Drive, Canva, OneDrive, VoiceThread) operate
                      under their respective privacy terms.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      This publication supports semantic HTML landmarks, keyboard navigation across
                      all slide dossiers and dialogs, high-contrast Paper and Ink reading modes, and
                      system reduced-motion preferences.
                    </p>
                    <p>
                      For assistance or document accommodations, contact{' '}
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="underline text-[var(--action-primary)]"
                      >
                        {PROFILE.email}
                      </a>
                      .
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
