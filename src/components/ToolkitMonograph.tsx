import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Maximize2, X } from 'lucide-react';
import {
  INFLECTION_STAGES,
  PROJECTS,
  SCIENCE_TO_INVESTMENT_PILLARS,
  STRATEGY_CONSULTING_PILLARS,
  type ProjectItem,
  type ToolkitPillar,
} from '../data/profileData';

interface ToolkitMonographProps {
  onSelectProject: (project: ProjectItem) => void;
}

const EASE = [0.19, 1, 0.22, 1] as const;

type TabKey = 'strategy' | 'investment' | 'cases';

const ROMAN = ['I.', 'II.', 'III.', 'IV.'];

// Coordinates for Edward Tufte-style SVG Biotech Value Inflection Curve
const CURVE_NODES = [
  { x: 95, y: 205, rnpv: '1.0× Base', pos: '~10% PoS' },
  { x: 315, y: 162, rnpv: '2.4× Step-Up', pos: '~22% PoS' },
  { x: 565, y: 92, rnpv: '5.8× Catalyst', pos: '~48% PoS' },
  { x: 805, y: 38, rnpv: '11.5×+ Exit', pos: 'Commercial / M&A' },
];

export default function ToolkitMonograph({ onSelectProject }: ToolkitMonographProps) {
  const [tab, setTab] = useState<TabKey>('strategy');
  const [stageIdx, setStageIdx] = useState(2); // Default focus on Phase 2 Efficacy inflection
  const [expandedPlate, setExpandedPlate] = useState<{ src: string; caption: string } | null>(null);

  const fujifilm = PROJECTS.find((p) => p.id === 'fujifilm');
  const dominos = PROJECTS.find((p) => p.id === 'dominos-japan');

  const renderAnalyticalMatrix = (pillars: ToolkitPillar[]) => (
    <div className="grid grid-cols-1 border-t border-b border-[var(--border-hairline)] md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[var(--border-hairline)]">
      {pillars.map((pillar, i) => (
        <motion.div
          key={pillar.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
          className="flex flex-col justify-between border-b border-[var(--border-hairline)] py-8 pr-0 transition-colors hover:bg-[var(--surface-elevated)]/70 md:px-6 lg:border-b-0 lg:px-7 first:lg:pl-0 last:lg:pr-0"
        >
          <div>
            <div className="flex items-baseline justify-between">
              <span className="font-editorial text-lg italic text-[var(--action-primary)]">
                {ROMAN[i]}
              </span>
              {pillar.subtitle && (
                <span className="font-mono-index text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  {pillar.subtitle}
                </span>
              )}
            </div>

            <h3 className="mt-3 font-editorial text-2xl font-normal leading-[1.2] text-[var(--text-primary)]">
              {pillar.title}
            </h3>

            <ul className="mt-5 space-y-3">
              {pillar.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-[13.5px] leading-[1.6] text-[var(--text-secondary)]"
                >
                  <span className="mt-2 h-[3px] w-[3px] shrink-0 bg-[var(--action-primary)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 pt-4 rule-t font-mono-index text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
            {pillar.tags.join(' · ')}
          </p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="toolkit" className="py-20 lg:py-28 rule-t">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
        {/* Section Masthead */}
        <div className="grid grid-cols-1 gap-8 pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="font-mono-index text-[11px] uppercase tracking-[0.16em] text-[var(--action-primary)]">
              03 — Consulting Toolkit · GCC Graduate Consulting Club
            </p>
            <h2 className="mt-3 font-editorial text-[clamp(2rem,4vw,3.35rem)] font-normal leading-[1.06] tracking-[-0.025em] text-[var(--text-primary)]">
              Frameworks from Target Diligence to Commercial Launch
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <p className="text-[15px] leading-[1.65] text-[var(--text-muted)]">
              Structured life-science consulting and venture evaluation methodologies applied across
              pre-commercial pharma launch simulations, platform technology reviews (VISTA), HEOR
              modeling, and cross-industry growth transformations.
            </p>
          </div>
        </div>

        {/* Clean 2px-Ruled Editorial Tab Bar */}
        <div
          role="tablist"
          aria-label="Consulting toolkit chapters"
          className="flex flex-wrap gap-x-8 gap-y-3 pb-4 rule-b"
        >
          {[
            { id: 'strategy' as const, label: 'I. Life Science Strategy Consulting' },
            { id: 'investment' as const, label: 'II. Science to Investment & Inflection' },
            { id: 'cases' as const, label: 'III. Applied Case Plates' },
          ].map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(item.id)}
                className="relative pb-2.5 text-[14px] tracking-[0.01em] transition-colors"
                style={{
                  color: active ? 'var(--text-primary)' : 'var(--text-muted)',
                  fontWeight: active ? 600 : 400,
                }}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="toolkitRule"
                    transition={{ duration: 0.35, ease: EASE }}
                    className="absolute inset-x-0 -bottom-[17px] h-[2px]"
                    style={{ backgroundColor: 'var(--action-primary)' }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Body */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {tab === 'strategy' && (
              <motion.div
                key="strategy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-14"
              >
                {renderAnalyticalMatrix(STRATEGY_CONSULTING_PILLARS)}

                {/* Applied Plate: Phase 2 Asset (TP-04) Ocular Rosacea */}
                <div className="grid grid-cols-1 gap-10 pt-4 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-5">
                    <p className="font-mono-index text-[10px] uppercase tracking-[0.16em] text-[var(--accent-science)]">
                      Plate A — Simulated Pharma Launch Planning
                    </p>
                    <h3 className="mt-3 font-editorial text-3xl font-normal leading-[1.15] text-[var(--text-primary)]">
                      Phase 2 Asset (TP-04): Ocular Rosacea
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.68] text-[var(--text-secondary)]">
                      Pre-commercial launch planning approach developed for a simulated biopharma
                      client — integrating epidemiology patient funnels, payer HTA dossiers,
                      standard-of-care comparator mapping, and launch uptake scenarios.
                    </p>
                    <button
                      onClick={() =>
                        setExpandedPlate({
                          src: 'assets/tp04-ocular-rosacea.jpg',
                          caption:
                            'Phase 2 Asset (TP-04): Ocular Rosacea — Pre-Commercial Launch Planning Framework',
                        })
                      }
                      className="editorial-link mt-6 text-[13px] font-medium text-[var(--text-primary)] hover:text-[var(--action-primary)]"
                    >
                      Inspect Full Framework Plate
                      <Maximize2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="lg:col-span-7">
                    <button
                      onClick={() =>
                        setExpandedPlate({
                          src: 'assets/tp04-ocular-rosacea.jpg',
                          caption:
                            'Phase 2 Asset (TP-04): Ocular Rosacea — Pre-Commercial Launch Planning Framework',
                        })
                      }
                      className="group block w-full overflow-hidden border border-[var(--border-hairline)] bg-[var(--surface-linen)] p-2.5 text-left"
                    >
                      <div className="overflow-hidden bg-[#141412]">
                        <img
                          src="assets/tp04-ocular-rosacea.jpg"
                          alt="Phase 2 Asset TP-04 Ocular Rosacea Launch Planning Framework"
                          className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="mt-2.5 flex items-center justify-between font-mono-index text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                        <span>FIG. 03 — TP-04 Pre-Commercial Launch Architecture</span>
                        <span className="text-[var(--action-primary)]">Click to Enlarge</span>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {tab === 'investment' && (
              <motion.div
                key="investment"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-14"
              >
                {renderAnalyticalMatrix(SCIENCE_TO_INVESTMENT_PILLARS)}

                {/* Bespoke Edward Tufte SVG Biotech Value Inflection Curve */}
                <div className="border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-6 sm:p-10">
                  <div className="flex flex-col justify-between gap-4 pb-6 rule-b sm:flex-row sm:items-end">
                    <div>
                      <p className="font-mono-index text-[10px] uppercase tracking-[0.16em] text-[var(--accent-science)]">
                        FIG. 04 — Interactive Valuation &amp; Catalyst Model
                      </p>
                      <h3 className="mt-2 font-editorial text-2xl font-normal text-[var(--text-primary)] sm:text-3xl">
                        Biotech Value Inflection &amp; Capital Trajectory
                      </h3>
                    </div>
                    <p className="font-mono-index text-[11px] text-[var(--text-muted)]">
                      Select any clinical milestone node along the curve
                    </p>
                  </div>

                  {/* SVG Data Visualization */}
                  <div className="mt-6 overflow-x-auto">
                    <svg
                      viewBox="0 0 900 260"
                      role="img"
                      aria-label="Biotech Value Inflection Curve across Pre-Clinical PoC, IND Filing, Phase 2 Efficacy, and Commercial Exit"
                      className="h-auto min-w-[640px] w-full"
                    >
                      {/* Horizontal dotted Tufte reference lines */}
                      {[55, 110, 165, 220].map((y) => (
                        <line
                          key={y}
                          x1="50"
                          y1={y}
                          x2="860"
                          y2={y}
                          stroke="var(--border-hairline)"
                          strokeDasharray="2 4"
                          strokeWidth="1"
                        />
                      ))}

                      {/* Y-Axis Label */}
                      <text
                        x="18"
                        y="135"
                        transform="rotate(-90 18 135)"
                        textAnchor="middle"
                        fill="var(--text-muted)"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          letterSpacing: '0.12em',
                        }}
                      >
                        RISK-ADJUSTED VALUATION (rNPV)
                      </text>

                      {/* Animated Inflection Curve */}
                      <motion.path
                        d="M 95 205 C 180 200, 235 178, 315 162 C 415 142, 470 112, 565 92 C 660 72, 720 50, 805 38"
                        fill="none"
                        stroke="var(--action-primary)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.1, ease: EASE }}
                      />

                      {/* Milestone Vertical Drop Hairlines + Interactive Nodes */}
                      {INFLECTION_STAGES.map((st, idx) => {
                        const pt = CURVE_NODES[idx];
                        const active = stageIdx === idx;

                        return (
                          <g
                            key={st.stage}
                            onClick={() => setStageIdx(idx)}
                            className="cursor-pointer focus:outline-none"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') setStageIdx(idx);
                            }}
                          >
                            {/* Vertical guide line */}
                            <line
                              x1={pt.x}
                              y1={pt.y}
                              x2={pt.x}
                              y2="225"
                              stroke={active ? 'var(--action-primary)' : 'var(--border-hairline)'}
                              strokeWidth={active ? '1.25' : '1'}
                              strokeDasharray={active ? 'none' : '3 3'}
                            />

                            {/* Focus halo */}
                            {active && (
                              <motion.circle
                                layoutId="inflectionHalo"
                                cx={pt.x}
                                cy={pt.y}
                                r="14"
                                fill="none"
                                stroke="var(--action-primary)"
                                strokeWidth="1"
                                opacity="0.55"
                              />
                            )}

                            {/* Node point */}
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r={active ? 6 : 4.5}
                              fill={active ? 'var(--action-primary)' : 'var(--surface-elevated)'}
                              stroke="var(--action-primary)"
                              strokeWidth="2"
                            />

                            {/* Value annotation above node */}
                            <text
                              x={pt.x}
                              y={pt.y - 18}
                              textAnchor="middle"
                              fill={active ? 'var(--action-primary)' : 'var(--text-muted)'}
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '10px',
                                fontWeight: active ? 600 : 400,
                              }}
                            >
                              {pt.rnpv}
                            </text>

                            {/* X-Axis Stage Label */}
                            <text
                              x={pt.x}
                              y="245"
                              textAnchor="middle"
                              fill={active ? 'var(--text-primary)' : 'var(--text-muted)'}
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '10.5px',
                                fontWeight: active ? 600 : 400,
                                letterSpacing: '0.06em',
                              }}
                            >
                              {st.stage} · {st.title.toUpperCase()}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  {/* Live Analytical Readout Ledger */}
                  <div className="mt-6 grid grid-cols-1 gap-6 pt-6 rule-t md:grid-cols-12">
                    <div className="md:col-span-3">
                      <p className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--action-primary)]">
                        Stage {INFLECTION_STAGES[stageIdx].stage} ·{' '}
                        {CURVE_NODES[stageIdx].pos}
                      </p>
                      <h4 className="mt-1 font-editorial text-2xl text-[var(--text-primary)]">
                        {INFLECTION_STAGES[stageIdx].title}
                      </h4>
                    </div>
                    <div className="md:col-span-3">
                      <p className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                        Financing / Capital Event
                      </p>
                      <p className="mt-1 text-[15px] font-medium text-[var(--text-primary)]">
                        {INFLECTION_STAGES[stageIdx].capital}
                      </p>
                      <p className="mt-0.5 font-mono-index text-[11px] text-[var(--accent-science)]">
                        {INFLECTION_STAGES[stageIdx].metric}
                      </p>
                    </div>
                    <div className="md:col-span-6">
                      <p className="font-mono-index text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                        De-Risking &amp; Value Inflection Mechanics
                      </p>
                      <p className="mt-1 text-[14.5px] leading-[1.65] text-[var(--text-secondary)]">
                        {INFLECTION_STAGES[stageIdx].detail}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {tab === 'cases' && (
              <motion.div
                key="cases"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-10 md:grid-cols-2"
              >
                {[fujifilm, dominos].map(
                  (item, idx) =>
                    item && (
                      <article
                        key={item.id}
                        className="flex flex-col border border-[var(--border-hairline)] bg-[var(--surface-elevated)]"
                      >
                        <div className="aspect-[16/9] overflow-hidden border-b border-[var(--border-hairline)] bg-[#141412]">
                          <img
                            src={item.heroImage}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6 sm:p-8">
                          <p className="font-mono-index text-[10px] uppercase tracking-[0.16em] text-[var(--action-primary)]">
                            Case Plate {String(idx + 1).padStart(2, '0')} · {item.projectType}
                          </p>
                          <h3 className="mt-2 font-editorial text-2xl font-normal text-[var(--text-primary)] sm:text-3xl">
                            {item.shortTitle}
                          </h3>
                          <p className="mt-3 flex-1 text-[14.5px] leading-[1.68] text-[var(--text-secondary)]">
                            {item.summary}
                          </p>

                          <div className="mt-6 flex flex-wrap items-center gap-6 pt-5 rule-t">
                            <button
                              onClick={() => onSelectProject(item)}
                              className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--action-primary)]"
                            >
                              Open Full Dossier
                              <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                            <a
                              href={item.externalLinkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="editorial-link font-mono-index text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                            >
                              View Canva Deck
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      </article>
                    )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Archival Plate Lightbox */}
      <AnimatePresence>
        {expandedPlate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedPlate(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl border border-white/15 bg-[#141412]"
            >
              <div className="flex items-center justify-between border-b border-white/15 px-5 py-3.5 text-xs text-[#F0ECE4]">
                <span className="font-mono-index uppercase tracking-[0.1em]">
                  {expandedPlate.caption}
                </span>
                <button
                  onClick={() => setExpandedPlate(null)}
                  aria-label="Close enlarged plate"
                  className="flex h-8 w-8 items-center justify-center border border-white/20 text-white hover:bg-[#9E1B32]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="max-h-[80vh] overflow-auto p-4">
                <img
                  src={expandedPlate.src}
                  alt={expandedPlate.caption}
                  className="mx-auto max-h-[74vh] w-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
