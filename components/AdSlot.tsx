interface AdSlotProps {
  type: 'native-4x1' | 'sidebar-300x250' | 'banner';
  unitId?: string;
}

export function AdSlot({ type, unitId }: AdSlotProps) {
  const getMinHeight = () => {
    switch (type) {
      case 'native-4x1':
        return 'min-h-40';
      case 'sidebar-300x250':
        return 'min-h-64 w-full md:w-80';
      case 'banner':
        return 'min-h-32';
      default:
        return 'min-h-40';
    }
  };

  return (
    <div
      className={`${getMinHeight()} bg-card border-2 border-dashed border-border rounded-lg p-4 flex items-center justify-center text-center`}
    >
      <div>
        <p className="text-xs text-muted-foreground mb-2">Ad Placeholder</p>
        <p className="text-xs font-mono text-primary">
          {unitId ? `Unit: ${unitId}` : `Type: ${type}`}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Paste Adsterra code here
        </p>
      </div>
    </div>
  );
}
