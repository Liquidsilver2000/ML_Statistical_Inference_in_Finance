interface SlideProps {
  currentSlide: number;
  totalSlides: number;
}

export default function Final({ currentSlide }: SlideProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <div className="top-line" />
        
        <h1 className="font-serif-display text-4xl md:text-5xl text-black leading-tight mb-6">
          Statistical Inference:<br />
          The Foundation of Data-Driven Finance
        </h1>
        
        <div className="w-[200px] h-[2px] bg-black mx-auto mb-6" />
        
        <p className="font-sans-body text-lg text-[#495057] leading-relaxed max-w-2xl mx-auto mb-8">
          From hypothesis testing to Bayesian updating, every inference method provides a lens 
          through which financial uncertainty becomes quantifiable, manageable, and profitable.
        </p>
        
        <p className="font-sans-body text-base text-[#6c757d] italic">
          Precision through rigorous statistical analysis
        </p>
      </div>
      
      <div className="absolute bottom-16 left-8 right-8 flex justify-between items-center">
        <span className="label-tag">ML STATISTICAL INFERENCE</span>
        <span className="label-tag">{currentSlide + 1 < 10 ? `0${currentSlide + 1}` : currentSlide + 1}</span>
      </div>
    </div>
  );
}
