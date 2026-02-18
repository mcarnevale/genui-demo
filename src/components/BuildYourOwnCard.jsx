export function BuildYourOwnCard({ onClick }) {
  return (
    <div onClick={onClick} className="rounded-xl overflow-hidden cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gradient-to-b from-gray-50 to-gray-100 min-h-[320px]">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-3">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </div>
      <div className="font-bold text-gray-600 text-sm">Build Your Own</div>
      <div className="text-xs text-gray-400 mt-1 text-center px-4">Customize every slider and see the app transform</div>
    </div>
  );
}
