interface DrawCardProps {
  gameType: string;
  drawTime: string;
  numbers: number[];
  status?: 'pending' | 'live' | 'completed';
  jackpot?: string;
}

export function DrawCard({
  gameType,
  drawTime,
  numbers,
  status = 'completed',
  jackpot,
}: DrawCardProps) {
  const statusColor = {
    pending: 'bg-muted text-muted-foreground',
    live: 'bg-red-500 text-white animate-pulse',
    completed: 'bg-primary text-primary-foreground',
  };

  const statusText = {
    pending: 'Pending',
    live: 'LIVE UPDATE',
    completed: 'Completed',
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-foreground font-heading">{gameType}</h3>
          <p className="text-sm text-muted-foreground">{drawTime}</p>
        </div>
        <span className={`text-xs font-bold px-3 py-1 rounded ${statusColor[status]}`}>
          {statusText[status]}
        </span>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        {numbers.map((num, index) => (
          <div
            key={index}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-secondary-foreground text-lg"
          >
            {num.toString().padStart(2, '0')}
          </div>
        ))}
      </div>

      {jackpot && (
        <div className="bg-primary/10 border border-primary rounded p-3">
          <p className="text-xs text-muted-foreground mb-1">Jackpot Prize</p>
          <p className="text-lg font-bold text-primary">{jackpot}</p>
        </div>
      )}
    </div>
  );
}
