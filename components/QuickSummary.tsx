interface QuickSummaryProps {
  bullets: string[];
  gameType?: string;
}

export function QuickSummary({ bullets, gameType }: QuickSummaryProps) {
  return (
    <div id="geo-quick-summary" className="bg-[#1a1e20] border-l-4 border-[#e9c349] p-6 rounded-r-lg shadow-sm mb-8">
      <h2 className="text-xs text-[#e9c349] uppercase tracking-widest font-black mb-3 flex items-center gap-1.5 font-mono">
        <span className="w-3.5 h-3.5 text-[#e9c349] animate-pulse inline-block">●</span>
        AI-Grounded Quick Summary {gameType && `- ${gameType}`}
      </h2>
      <ul className="text-xs text-[#c1c5c8] space-y-2.5 leading-relaxed font-sans">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <span className="text-[#e9c349] font-bold flex-shrink-0 mt-1">✓</span>
            <span className="text-[#c1c5c8]">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
