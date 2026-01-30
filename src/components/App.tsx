import React from 'react';
import { ThemeProvider, useTheme } from '../lib/ThemeContext';
import { ThemeSelector } from './ThemeSelector';
import GlassHeader from './GlassHeader';
import HeroSection from './HeroSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import AwardsSection from './AwardsSection';
import EducationSection from './EducationSection';
import Footer from './Footer';

// Component that applies theme to body background
function ThemeBackground() {
  const { theme } = useTheme();
  
  React.useEffect(() => {
    document.body.style.setProperty('--theme-bg-gradient', theme.bgGradient);
    // Update the background div if it exists
    const bgDiv = document.getElementById('theme-background');
    if (bgDiv) {
      bgDiv.style.background = `radial-gradient(ellipse 80% 80% at 50% -20%, ${theme.bgGradient}, transparent)`;
    }
  }, [theme]);
  
  return null;
}

function AppContent() {
  return (
    <>
      <ThemeBackground />
      <GlassHeader />
      <main className="min-h-screen">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <AwardsSection />
        <EducationSection />
      </main>
      <Footer />
      <ThemeSelector />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
