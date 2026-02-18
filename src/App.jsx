import { useState, useCallback } from 'react';
import { lerp3Color } from './utils/color';
import { PERSONAS } from './data';
import { SLIDER_TITLES, SLIDER_DESCRIPTIONS, SLIDER_LABELS, SLIDER_GRADIENTS } from './constants/sliders';
import {
  Icon,
  PersonaPortrait,
  BaseballCard,
  BuildYourOwnCard,
  GradientSlider,
  NutritionSelector,
  ProfileSummary,
  PersonaDashboard,
  RecipeDetail,
  SkillPreview,
  AmbitionPreview,
  AccessibilityPreview,
  VibePreview,
  ExplorationPreview,
} from './components';

const PREVIEW_COMPONENTS = [SkillPreview, AmbitionPreview, AccessibilityPreview, VibePreview, ExplorationPreview];

export default function App() {
  const [screen, setScreen] = useState("select");
  const [sliders, setSliders] = useState([0.5, 0.5, 0.5, 0.5, 0.5]);
  const [nutrition, setNutrition] = useState([]);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [recipeFoodKey, setRecipeFoodKey] = useState(null);

  const nav = useCallback((target) => setScreen(target), []);

  const handlePersonaSelect = useCallback((p) => {
    setSelectedPersona(p); setSliders([...p.sliders]); setNutrition([...p.nutrition]); nav("persona-view");
  }, [nav]);

  const handleBuildOwn = useCallback(() => {
    setSelectedPersona(null); setSliders([0.5,0.5,0.5,0.5,0.5]); setNutrition([]); nav("slider-0");
  }, [nav]);

  const handleSliderChange = useCallback((i, v) => setSliders(p => { const n = [...p]; n[i] = v; return n; }), []);

  const si = screen.startsWith("slider-") ? parseInt(screen.split("-")[1]) : -1;
  const Preview = si >= 0 ? PREVIEW_COMPONENTS[si] : null;
  const totalSteps = 7;
  const curStep = si >= 0 ? si + 1 : screen === "nutrition" ? 6 : screen === "summary" ? 7 : 0;

  if (screen === "select") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-sm font-medium text-amber-700 tracking-wider uppercase mb-2">GenUI Demo</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Choose Your Cook</h1>
            <p className="text-gray-500 max-w-lg mx-auto">Every cook is unique. Pick someone who feels familiar, or build your own profile from scratch.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {PERSONAS.map(p => <BaseballCard key={p.id} persona={p} onClick={() => handlePersonaSelect(p)} />)}
            <BuildYourOwnCard onClick={handleBuildOwn} />
          </div>
        </div>
      </div>
    );
  }

  if (screen === "persona-view") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <ProfileSummary sliders={sliders} nutrition={nutrition} isPersona={true} persona={selectedPersona} />
          <div className="mt-6 space-y-3">
            <button onClick={() => nav("dashboard-preview")} className="w-full py-3.5 rounded-xl font-semibold text-white text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2" style={{ backgroundColor: selectedPersona.accent }}>
              Enter {selectedPersona.name}&apos;s App <Icon name="arrow-right" size={18} />
            </button>
            <button onClick={() => nav("select")} className="w-full py-3 rounded-xl font-medium text-gray-500 text-sm bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-1.5"><Icon name="arrow-left" size={18} /> Back to Selection</button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === "recipe" && recipeFoodKey) {
    const p = selectedPersona || { id: "custom", name: "You", sliders, accent: lerp3Color(sliders[3], "#FF6B35", "#C49A6C", "#78909C"), textColor: "#333" };
    return (
      <div className="min-h-screen flex flex-col">
        <RecipeDetail foodKey={recipeFoodKey} persona={p} onBack={() => { setRecipeFoodKey(null); setScreen("dashboard-preview"); }} />
      </div>
    );
  }

  if (screen === "dashboard-preview") {
    const p = selectedPersona || { id: "custom", name: "You", sliders, accent: lerp3Color(sliders[3], "#FF6B35", "#C49A6C", "#78909C"), textColor: "#333" };
    return (
      <div className="min-h-screen flex flex-col">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={() => nav("select")}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900/60 hover:bg-gray-900 text-white/90 hover:text-white text-lg transition-colors"
            title="Try another persona"
          >
            ✕
          </button>
        </div>
        <PersonaDashboard persona={p} onRecipeClick={(key) => { setRecipeFoodKey(key); setScreen("recipe"); }} />
      </div>
    );
  }

  if (si >= 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
        <div className="p-4 pb-0">
          <div className="flex gap-1 max-w-lg mx-auto">
            {Array.from({ length: totalSteps }).map((_, i) => <div key={i} className="flex-1 h-1 rounded-full" style={{ backgroundColor: i < curStep ? "#C49A6C" : "#E0D5C8" }} />)}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-3xl">
            <div className="text-center mb-8">
              <div className="text-xs font-medium text-amber-700 tracking-wider uppercase mb-1">Step {curStep} of {totalSteps}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{SLIDER_TITLES[si]}</h2>
              <p className="text-gray-500">{SLIDER_DESCRIPTIONS[si]}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <GradientSlider value={sliders[si]} onChange={v => handleSliderChange(si, v)} labels={SLIDER_LABELS[si]} gradient={SLIDER_GRADIENTS[si]} />
                </div>
                <div className="mt-6 flex gap-3">
                  <button onClick={() => nav(si > 0 ? `slider-${si-1}` : "select")} className="flex-1 py-3 rounded-xl font-medium text-gray-500 text-sm bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-1.5"><Icon name="arrow-left" size={18} /> Back</button>
                  <button onClick={() => nav(si < 4 ? `slider-${si+1}` : "nutrition")} className="flex-1 py-3 rounded-xl font-semibold text-white text-sm shadow-lg hover:shadow-xl flex items-center justify-center gap-1.5" style={{ backgroundColor: "#5C4020" }}>Next <Icon name="arrow-right" size={18} /></button>
                </div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 text-center">Live Preview</div>
                {Preview && <Preview value={sliders[si]} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === "nutrition") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
        <div className="p-4 pb-0">
          <div className="flex gap-1 max-w-lg mx-auto">
            {Array.from({ length: totalSteps }).map((_, i) => <div key={i} className="flex-1 h-1 rounded-full" style={{ backgroundColor: i < 6 ? "#C49A6C" : "#E0D5C8" }} />)}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-md text-center">
            <div className="text-xs font-medium text-amber-700 tracking-wider uppercase mb-1">Step 6 of {totalSteps}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">How Do You Eat?</h2>
            <p className="text-gray-500 mb-8">Select any that apply, or skip if you don&apos;t have a preference.</p>
            <NutritionSelector selected={nutrition} onChange={setNutrition} />
            <div className="mt-8 flex gap-3">
              <button onClick={() => nav("slider-4")} className="flex-1 py-3 rounded-xl font-medium text-gray-500 text-sm bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-1.5"><Icon name="arrow-left" size={18} /> Back</button>
              <button onClick={() => nav("summary")} className="flex-1 py-3 rounded-xl font-semibold text-white text-sm shadow-lg flex items-center justify-center gap-1.5" style={{ backgroundColor: "#5C4020" }}>See My Profile <Icon name="arrow-right" size={18} /></button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === "summary") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
        <div className="p-4 pb-0">
          <div className="flex gap-1 max-w-lg mx-auto">
            {Array.from({ length: totalSteps }).map((_, i) => <div key={i} className="flex-1 h-1 rounded-full" style={{ backgroundColor: "#C49A6C" }} />)}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-sm">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">Your Cook Profile</h2>
              <p className="text-gray-500 text-sm">Here&apos;s how we&apos;ll build your app.</p>
            </div>
            <ProfileSummary sliders={sliders} nutrition={nutrition.length > 0 ? nutrition : ["No Preference"]} isPersona={false} />
            <div className="mt-6 space-y-3">
              <button onClick={() => {
                setSelectedPersona({ id:"custom", name:"You", initials:"You", tagline:"Custom Profile", description:"", sliders, nutrition, accent: lerp3Color(sliders[3],"#FF6B35","#C49A6C","#78909C"), color: lerp3Color(sliders[3],"#2A1510","#F5EDE4","#FAFAFA"), textColor: lerp3Color(sliders[3],"#FFE0C0","#5C4020","#333"), skin:"#D4A574", hairColor:"#555", shirtColor:"#666", hero:"" });
                nav("dashboard-preview");
              }} className="w-full py-3.5 rounded-xl font-semibold text-white text-sm shadow-lg" style={{ backgroundColor: "#5C4020" }}>Start Cooking →</button>
              <button onClick={() => nav("nutrition")} className="w-full py-3 rounded-xl font-medium text-gray-500 text-sm bg-white border border-gray-200 hover:bg-gray-50">← Adjust Settings</button>
              <button onClick={() => nav("select")} className="w-full py-2 text-xs text-gray-400 hover:text-gray-600">Start Over</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
