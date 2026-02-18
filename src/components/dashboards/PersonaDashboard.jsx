import { useState } from 'react';
import { Icon } from '../Icon';
import { DaveDashboard } from './DaveDashboard';
import { PriyaDashboard } from './PriyaDashboard';
import { TomLindaDashboard } from './TomLindaDashboard';
import { MarcusDashboard } from './MarcusDashboard';
import { JenDashboard } from './JenDashboard';
import { RayDashboard } from './RayDashboard';
import { SofiaDashboard } from './SofiaDashboard';
import { WaltDashboard } from './WaltDashboard';
import { CaseyDashboard } from './CaseyDashboard';
import { RecipesSection } from '../RecipesSection';
import { GrillControlSection } from '../GrillControlSection';
import { HelpSection } from '../HelpSection';
import { MealPlannerSection } from '../MealPlannerSection';
import { ContentSection } from '../ContentSection';
import { lerp3Color } from '../../utils/color';

const DASHBOARDS = {
  dave: DaveDashboard,
  priya: PriyaDashboard,
  "tom-linda": TomLindaDashboard,
  marcus: MarcusDashboard,
  jen: JenDashboard,
  ray: RayDashboard,
  sofia: SofiaDashboard,
  walt: WaltDashboard,
  casey: CaseyDashboard,
};

/** Generic dashboard for personas without a custom layout — derived from sliders */
function GenericDashboard({ persona, onRecipeClick, onRecipesTabClick, onGrillTabClick, onHelpTabClick, onPlannerTabClick, onContentTabClick }) {
  const v = persona.sliders?.[3] ?? 0.5; // Vibe
  const bg = lerp3Color(v, "#1C1210", "#FFF8F0", "#FAFAFA");
  const text = lerp3Color(v, "#FFE0C0", "#5C4020", "#333");
  const accent = persona.accent || lerp3Color(v, "#FF6B35", "#C49A6C", "#78909C");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6" style={{ backgroundColor: bg }}>
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-2" style={{ color: text }}>Welcome, {persona.name}</h2>
        <p className="text-sm opacity-70 mb-6" style={{ color: text }}>
          Your app has been generated. Every screen — Recipes, Grill Control, Help, Meal Planner, and Curated Content — is tailored to you.
        </p>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <button
            type="button"
            onClick={onRecipesTabClick}
            className="py-3 px-4 rounded-xl text-sm font-medium text-left"
            style={{ backgroundColor: accent + "20", color: accent }}
          >
            Recipes
          </button>
          <button
            type="button"
            onClick={onGrillTabClick}
            className="py-3 px-4 rounded-xl text-sm font-medium text-left"
            style={{ backgroundColor: accent + "20", color: accent }}
          >
            Grill Control
          </button>
          <button
            type="button"
            onClick={onHelpTabClick}
            className="py-3 px-4 rounded-xl text-sm font-medium text-left"
            style={{ backgroundColor: accent + "20", color: accent }}
          >
            Help
          </button>
          <button type="button" onClick={onPlannerTabClick} className="py-3 px-4 rounded-xl text-sm font-medium text-left" style={{ backgroundColor: accent + "20", color: accent }}>
            Meal Planner
          </button>
          <button
            type="button"
            onClick={onContentTabClick}
            className="py-3 px-4 rounded-xl text-sm font-medium text-left"
            style={{ backgroundColor: accent + "20", color: accent }}
          >
            Content
          </button>
        </div>
        <p className="text-xs opacity-50 italic" style={{ color: text }}>
          Custom dashboard for {persona.name} coming soon.
        </p>
      </div>
    </div>
  );
}

export function PersonaDashboard({ persona, onRecipeClick }) {
  const [view, setView] = useState('home');
  const DashboardComponent = DASHBOARDS[persona.id] || GenericDashboard;

  const isDark = persona.id === 'dave' || persona.id === 'ray';
  const isWalt = persona.id === 'walt';
  const bg = view === 'recipes' ? (isDark ? '#1C1210' : isWalt ? '#1A1614' : '#FFFBF5')
    : view === 'grill' ? (isDark ? '#1C1210' : isWalt ? '#1A1614' : '#FFFBF5')
    : null;
  const navBg = isDark ? '#0F0A08' : 'white';
  const navBorder = isDark ? '#2A1F1A' : '#E8E6E0';

  if (view === 'recipes') {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: bg || '#FFFBF5' }}>
        <div className="flex-1 flex flex-col overflow-hidden">
          <RecipesSection persona={persona} onRecipeClick={onRecipeClick} />
        </div>
        <nav className="flex justify-around py-3 border-t shrink-0" style={{ borderColor: navBorder, backgroundColor: navBg }}>
          <button onClick={() => setView('home')} className="p-2 opacity-60" style={{ color: isDark ? persona.textColor : '#666' }}><Icon name="home" size={22} /></button>
          <button className="p-2 font-bold" style={{ color: persona.accent }}><Icon name="recipes" size={22} /></button>
        </nav>
      </div>
    );
  }

  if (view === 'grill') {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: bg || (isDark ? '#1C1210' : '#FFFBF5') }}>
        <div className="flex-1 flex flex-col overflow-hidden">
          <GrillControlSection persona={persona} />
        </div>
        <nav className="flex justify-around py-3 border-t shrink-0" style={{ borderColor: navBorder, backgroundColor: navBg }}>
          <button onClick={() => setView('home')} className="p-2 opacity-60" style={{ color: isDark ? persona.textColor : '#666' }}><Icon name="home" size={22} /></button>
          <button className="p-2 font-bold" style={{ color: persona.accent }}><Icon name="grill" size={22} /></button>
        </nav>
      </div>
    );
  }

  if (view === 'help') {
    const helpBg = isDark ? '#1C1210' : isWalt ? '#1A1614' : '#FFFBF5';
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: helpBg }}>
        <div className="flex-1 flex flex-col overflow-hidden">
          <HelpSection persona={persona} />
        </div>
        <nav className="flex justify-around py-3 border-t shrink-0" style={{ borderColor: navBorder, backgroundColor: navBg }}>
          <button onClick={() => setView('home')} className="p-2 opacity-60" style={{ color: isDark ? persona.textColor : '#666' }}><Icon name="home" size={22} /></button>
          <button className="p-2 font-bold" style={{ color: persona.accent }}><Icon name="help" size={22} /></button>
        </nav>
      </div>
    );
  }

  if (view === 'planner') {
    const plannerBg = isDark ? '#1C1210' : isWalt ? '#1A1614' : '#FFFBF5';
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: plannerBg }}>
        <div className="flex-1 flex flex-col overflow-hidden">
          <MealPlannerSection persona={persona} onRecipeClick={onRecipeClick} />
        </div>
        <nav className="flex justify-around py-3 border-t shrink-0" style={{ borderColor: navBorder, backgroundColor: navBg }}>
          <button onClick={() => setView('home')} className="p-2 opacity-60" style={{ color: isDark ? persona.textColor : '#666' }}><Icon name="home" size={22} /></button>
          <button className="p-2 font-bold" style={{ color: persona.accent }}><Icon name="planner" size={22} /></button>
        </nav>
      </div>
    );
  }

  if (view === 'content') {
    const contentBg = isDark ? '#1C1210' : isWalt ? '#1A1614' : '#FFFBF5';
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: contentBg }}>
        <div className="flex-1 flex flex-col overflow-hidden">
          <ContentSection persona={persona} />
        </div>
        <nav className="flex justify-around py-3 border-t shrink-0" style={{ borderColor: navBorder, backgroundColor: navBg }}>
          <button onClick={() => setView('home')} className="p-2 opacity-60" style={{ color: isDark ? persona.textColor : '#666' }}><Icon name="home" size={22} /></button>
          <button className="p-2 font-bold" style={{ color: persona.accent }}><Icon name="content" size={22} /></button>
        </nav>
      </div>
    );
  }

  return (
    <DashboardComponent
      persona={persona}
      onRecipeClick={onRecipeClick}
      onRecipesTabClick={() => setView('recipes')}
      onGrillTabClick={() => setView('grill')}
      onHelpTabClick={() => setView('help')}
      onPlannerTabClick={() => setView('planner')}
      onContentTabClick={() => setView('content')}
    />
  );
}
