interface QuickSummaryProps {
  bullets: string[];
  gameType?: string;
}

export function QuickSummary({ bullets, gameType }: QuickSummaryProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <h2 className="text-xl font-bold text-secondary mb-4 font-heading">
        Quick Summary {gameType && `- ${gameType}`}
      </h2>
      <ul className="space-y-3">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-accent text-xl font-bold flex-shrink-0">•</span>
            <span className="text-foreground text-sm md:text-base leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
