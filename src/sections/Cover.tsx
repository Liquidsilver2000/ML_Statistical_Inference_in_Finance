export default function Cover() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <div className="top-line" />
        
        <h1 className="font-serif-display text-5xl md:text-6xl text-black leading-tight mb-4">
          Machine Learning<br />Statistical Inference
        </h1>
        
        <div className="w-[200px] h-[2px] bg-black mx-auto mb-6" />
        
        <p className="font-sans-body text-xl text-[#495057] mb-8">
          10 Projects Driving Institutional Decision-Making
        </p>
        
        <p className="font-sans-body text-sm text-[#6c757d]">
          Data-Driven Solutions for Financial Challenges
        </p>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-16 left-8 right-8 flex justify-between items-center">
        <span className="label-tag">FINANCIAL ML INFERENCE</span>
        <span className="label-tag">2025</span>
      </div>
    </div>
  );
}
