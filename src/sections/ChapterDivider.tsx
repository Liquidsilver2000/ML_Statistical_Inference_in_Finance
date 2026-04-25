interface ChapterDividerProps {
  chapterNum: string;
  title: string;
  subtitle: string;
  currentSlide: number;
  totalSlides: number;
}

export default function ChapterDivider({ chapterNum, title, subtitle, currentSlide }: ChapterDividerProps) {
  return (
    <div className="slide-container justify-center">
      <div className="top-line" />
      
      <div className="max-w-3xl">
        <span className="font-serif-display text-7xl text-[#dee2e6] block mb-4">{chapterNum}</span>
        <h2 className="font-serif-display text-4xl text-black mb-4">{title}</h2>
        <div className="w-[200px] h-[2px] bg-black mb-4" />
        <p className="font-sans-body text-lg text-[#495057]">{subtitle}</p>
      </div>

      <div className="absolute bottom-16 left-[60px] right-[60px] flex justify-between items-center">
        <span className="label-tag">CHAPTER {chapterNum}</span>
        <span className="label-tag">{currentSlide + 1 < 10 ? `0${currentSlide + 1}` : currentSlide + 1}</span>
      </div>
    </div>
  );
}
