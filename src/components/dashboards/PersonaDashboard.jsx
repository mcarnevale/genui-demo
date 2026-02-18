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
import { MyCooksSection } from '../MyCooksSection';
import { lerp3Color } from '../../utils/color';

/** Nav config per persona: icon, label (optional), view. view=null means non-navigable. */
const NAV_CONFIG = {
  dave: [
    { icon: "grill", view: "grill" },
    { icon: "recipes", view: "recipes" },
    { icon: "help", view: "help" },
    { icon: "planner", view: "planner" },
    { icon: "content", view: "content" },
  ],
  priya: [
    { icon: "home", label: "Home", view: "home" },
    { icon: "discover", label: "Discover", view: "content", accentOnHome: true },
    { icon: "grill", label: "Grill", view: "grill" },
    { icon: "recipes", label: "Recipes", view: "recipes" },
    { icon: "help", label: "Help", view: "help" },
    { icon: "planner", label: "Plan", view: "planner" },
  ],
  "tom-linda": [
    { icon: "home", label: "Home", view: "home" },
    { icon: "grill", label: "Grill", view: "grill" },
    { icon: "recipes", label: "Recipes", view: "recipes" },
    { icon: "help", label: "Help", view: "help" },
    { icon: "planner", label: "Planner", view: "planner" },
    { icon: "content", label: "Content", view: "content" },
  ],
  marcus: [
    { icon: "cook", label: "Cook", view: "grill" },
    { icon: "recipes", label: "Recipes", view: "recipes" },
    { icon: "help", label: "Help", view: "help" },
    { icon: "content", label: "Learn", view: "content" },
    { icon: "planner", label: "Plan", view: "planner" },
  ],
  jen: [
    { icon: "cook", view: "grill" },
    { icon: "recipes", view: "recipes" },
    { icon: "help", view: "help" },
    { icon: "planner", view: "planner" },
    { icon: "content", view: "content" },
  ],
  ray: [
    { icon: "grill", view: "grill" },
    { icon: "recipes", view: "recipes" },
    { icon: "help", view: "help" },
    { icon: "planner", view: "planner" },
    { icon: "content", view: "content" },
  ],
  sofia: [
    { icon: "home", label: "Home", view: "home" },
    { icon: "discover", label: "Discover", view: "content", accentOnHome: true },
    { icon: "grill", label: "Grill", view: "grill" },
    { icon: "help", label: "Help", view: "help" },
    { icon: "planner", label: "Plan", view: "planner" },
    { icon: "camera", label: "My Cooks", view: "my-cooks" },
    { icon: "recipes", label: "Recipes", view: "recipes" },
  ],
  walt: [
    { icon: "grill", label: "Grill", view: "grill" },
    { icon: "recipes", label: "Recipes", view: "recipes" },
    { icon: "help", label: "Help", view: "help" },
    { icon: "planner", label: "Weekend", view: "planner" },
    { icon: "content", label: "Pit", view: "content" },
  ],
  casey: [
    { icon: "discover", label: "Explore", view: "content", accentOnHome: true },
    { icon: "cook", label: "Cook", view: "grill" },
    { icon: "recipes", label: "Recipes", view: "recipes" },
    { icon: "help", label: "Help", view: "help" },
    { icon: "planner", label: "Plan", view: "planner" },
  ],
  default: [
    { icon: "grill", view: "grill" },
    { icon: "recipes", view: "recipes" },
    { icon: "help", view: "help" },
    { icon: "planner", view: "planner" },
    { icon: "content", view: "content" },
  ],
};

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

/** Shared bottom nav — always visible, highlights active tab. */
function BottomNav({ items, view, setView, persona, isDark }) {
  const navBg = isDark ? '#0F0A08' : 'white';
  const navBorder = isDark ? '#2A1F1A' : '#E8E6E0';
  const t = persona.textColor;
  const a = persona.accent;

  return (
    <nav className="sticky bottom-0 left-0 right-0 z-10 flex justify-around py-3 border-t shrink-0 w-full" style={{ borderColor: navBorder, backgroundColor: navBg }}>
      {items.map((item) => {
        const isActive = item.view === view || (view === 'home' && item.accentOnHome);
        const hasLabel = !!item.label;
        return (
          <button
            key={item.icon + (item.label || '')}
            onClick={item.view != null ? () => setView(item.view) : undefined}
            disabled={item.view == null}
            className={`flex flex-col items-center gap-1 ${hasLabel ? 'text-sm' : 'p-2'} ${item.view == null ? 'opacity-40 cursor-default' : ''}`}
            style={{ color: isActive ? a : isDark ? t : '#888' }}
          >
            <Icon name={item.icon} size={hasLabel ? 22 : 22} />
            {hasLabel && <span className="font-medium">{item.label}</span>}
          </button>
        );
      })}
    </nav>
  );
}

export function PersonaDashboard({ persona, onRecipeClick }) {
  const [view, setView] = useState('home');
  const DashboardComponent = DASHBOARDS[persona.id] || GenericDashboard;
  const navItems = NAV_CONFIG[persona.id] || NAV_CONFIG.default;

  const isDark = persona.id === 'dave' || persona.id === 'ray';
  const isWalt = persona.id === 'walt';
  const contentBg = isDark ? '#1C1210' : isWalt ? '#1A1614' : '#FFFBF5';

  let content;
  if (view === 'home') {
    content = (
      <DashboardComponent
        persona={persona}
        onRecipeClick={onRecipeClick}
        onRecipesTabClick={() => setView('recipes')}
        onGrillTabClick={() => setView('grill')}
        onHelpTabClick={() => setView('help')}
        onPlannerTabClick={() => setView('planner')}
        onContentTabClick={() => setView('content')}
        noNav
      />
    );
  } else if (view === 'recipes') {
    content = <RecipesSection persona={persona} onRecipeClick={onRecipeClick} />;
  } else if (view === 'grill') {
    content = <GrillControlSection persona={persona} />;
  } else if (view === 'help') {
    content = <HelpSection persona={persona} />;
  } else if (view === 'planner') {
    content = <MealPlannerSection persona={persona} onRecipeClick={onRecipeClick} />;
  } else if (view === 'content') {
    content = <ContentSection persona={persona} />;
  } else if (view === 'my-cooks') {
    content = <MyCooksSection persona={persona} onRecipeClick={onRecipeClick} />;
  } else {
    content = null;
  }

  return (
    <div className="min-h-screen flex flex-col w-full min-w-0 overflow-x-hidden" style={{ backgroundColor: contentBg }}>
      <div className="flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
        {content}
      </div>
      <BottomNav items={navItems} view={view} setView={setView} persona={persona} isDark={isDark} />
    </div>
  );
}
