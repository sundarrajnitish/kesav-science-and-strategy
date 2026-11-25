import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Masthead from './components/Masthead';
import BroadsheetHero from './components/BroadsheetHero';
import PracticeLedger from './components/PracticeLedger';
import DossierExhibition from './components/DossierExhibition';
import DossierReader from './components/DossierReader';
import ToolkitMonograph from './components/ToolkitMonograph';
import CredentialsFolio from './components/CredentialsFolio';
import ColophonFooter from './components/ColophonFooter';
import type { ProjectItem } from './data/profileData';

export default function App() {
  // Light-first Archival Paper default — unmistakable human editorial standard
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('kesav-monograph-mode') === 'ink';
  });

  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      window.localStorage.setItem('kesav-monograph-mode', 'ink');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('kesav-monograph-mode', 'paper');
    }
  }, [isDark]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[var(--surface-primary)] text-[var(--text-primary)]">
        <Masthead isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} />

        <main>
          <BroadsheetHero />
          <PracticeLedger />
          <DossierExhibition onSelectProject={setActiveProject} />
          <ToolkitMonograph onSelectProject={setActiveProject} />
          <CredentialsFolio />
        </main>

        <ColophonFooter />

        <DossierReader project={activeProject} onClose={() => setActiveProject(null)} />
      </div>
    </MotionConfig>
  );
}
