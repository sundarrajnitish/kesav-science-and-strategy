import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface MastheadProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const SECTIONS = [
  { id: 'practice', num: '01', label: 'Practice' },
  { id: 'dossiers', num: '02', label: 'Dossiers' },
  { id: 'toolkit', num: '03', label: 'Toolkit' },
  { id: 'credentials', num: '04', label: 'Credentials' },
  { id: 'correspondence', num: '05', label: 'Contact' },
];

export default function Masthead({ isDark, onToggleTheme }: MastheadProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 36,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 180;
      let current = '';
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= y) {
          current = SECTIONS[i].id;
          break;
        }
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jumpTo = (id: string) => {
    setMobileOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className="sticky top-0 z-40 w-full transition-colors duration-300"
      style={{
        backgroundColor: 'var(--surface-primary)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      {/* Ultra-thin reading progress rule */}
      <motion.div
        style={{ scaleX, backgroundColor: 'var(--action-primary)' }}
        className="h-[2px] w-full origin-left"
      />

      <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-6 lg:px-12">
        {/* Editorial Wordmark — Zero icon box, zero status dot */}
        <button
          onClick={() => jumpTo('top')}
          className="text-left focus:outline-none"
          aria-label="Scroll to top"
        >
          <span className="font-editorial text-[17px] font-medium tracking-[0.06em] uppercase text-[var(--text-primary)]">
            {PROFILE.displayName}
          </span>
        </button>

        {/* Numbered Architectural Index */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {SECTIONS.map((s) => {
            const isActive = activeId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => jumpTo(s.id)}
                className="group relative py-1 text-[13px] tracking-[0.02em] transition-colors"
                style={{
                  color: isActive ? 'var(--action-primary)' : 'var(--text-muted)',
                }}
              >
                <span className="font-mono-index mr-1.5 text-[10px] opacity-70">{s.num}</span>
                <span className="font-medium group-hover:text-[var(--text-primary)]">
                  {s.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="mastheadUnderline"
                    transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute inset-x-0 -bottom-[21px] h-[2px]"
                    style={{ backgroundColor: 'var(--action-primary)' }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Paper / Ink & CV */}
        <div className="flex items-center gap-5">
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to archival paper mode' : 'Switch to obsidian ink mode'}
            className="font-mono-index text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            {isDark ? 'Paper' : 'Ink'}
          </button>

          <span className="hidden h-3.5 w-px bg-[var(--border-hairline)] sm:block" />

          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link hidden text-[13px] font-medium text-[var(--text-primary)] hover:text-[var(--action-primary)] sm:inline-flex"
          >
            Curriculum Vitae
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation"
            className="flex h-9 w-9 items-center justify-center text-[var(--text-primary)] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Width Sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden border-t border-[var(--border-hairline)] bg-[var(--surface-elevated)] lg:hidden"
          >
            <div className="mx-auto max-w-[1360px] divide-y divide-[var(--border-hairline)] px-6 py-2">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => jumpTo(s.id)}
                  className="flex w-full items-baseline justify-between py-3.5 text-left"
                >
                  <span className="font-editorial text-xl text-[var(--text-primary)]">
                    {s.label}
                  </span>
                  <span className="font-mono-index text-xs text-[var(--text-muted)]">{s.num}</span>
                </button>
              ))}
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between py-4 text-sm font-medium text-[var(--action-primary)]"
              >
                <span>Curriculum Vitae (PDF)</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
