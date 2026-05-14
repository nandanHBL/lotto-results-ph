interface AdSlotProps {
  type: 'native-4x1' | 'sidebar-300x250' | 'banner' | 'social-bar';
  unitId?: string;
}

export function AdSlot({ type, unitId }: AdSlotProps) {
  const getDimensions = () => {
    switch (type) {
      case 'native-4x1':
        // Native 4:1 aspect ratio (min-height 160px to prevent CLS)
        return {
          className: 'w-full h-40 md:h-40',
          aspectRatio: '4/1',
          minHeight: '160px',
        };
      case 'sidebar-300x250':
        // Sidebar 300x250 fixed dimensions for CLS 0.0
        return {
          className: 'w-full md:w-80 h-64 md:h-80',
          aspectRatio: '300/250',
          minHeight: '250px',
        };
      case 'banner':
        // Banner 728x90 or responsive
        return {
          className: 'w-full h-24',
          aspectRatio: '728/90',
          minHeight: '90px',
        };
      case 'social-bar':
        // Social bar fixed height
        return {
          className: 'w-full h-20',
          minHeight: '80px',
        };
      default:
        return {
          className: 'w-full h-40',
          minHeight: '160px',
        };
    }
  };

  const dimensions = getDimensions();

  return (
    <div
      className={`${dimensions.className} bg-[#1a1e20] border-2 border-dashed border-[#3a3e41] rounded-lg p-4 flex items-center justify-center text-center flex-col gap-2`}
      style={{
        minHeight: dimensions.minHeight,
        aspectRatio: dimensions.aspectRatio || 'auto',
      }}
    >
      <p className="text-xs text-[#8f9195] font-mono uppercase tracking-widest">Adsterra {type}</p>
      <p className="text-xs text-[#afc8f0] font-mono">
        {unitId ? `Unit: ${unitId}` : `Paste ad code for: ${type}`}
      </p>
      <p className="text-[10px] text-[#62b6cb] mt-1">
        CLS 0.0 Optimized • Fixed Dimensions
      </p>
    </div>
  );
}
