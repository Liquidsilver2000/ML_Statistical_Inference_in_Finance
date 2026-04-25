import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

export default function Navigation({ currentSlide, totalSlides, onPrev, onNext, onGoTo }: NavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#dee2e6] z-50">
      <div className="flex items-center justify-between px-4 py-2 max-w-[1400px] mx-auto">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="flex items-center gap-1 px-3 py-1.5 text-sm text-[#495057] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={16} />
          <span className="font-sans-body">Prev</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-[#6c757d] font-sans-body">
            {currentSlide + 1} / {totalSlides}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => onGoTo(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentSlide ? 'bg-black' : 'bg-[#dee2e6] hover:bg-[#adb5bd]'
                }`}
                title={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="flex items-center gap-1 px-3 py-1.5 text-sm text-[#495057] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <span className="font-sans-body">Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
