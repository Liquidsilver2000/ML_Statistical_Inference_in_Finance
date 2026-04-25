interface SlideProps {
  currentSlide: number;
  totalSlides: number;
}

const projects = [
  { num: '01', name: 'A/B Testing', tag: 'Trading Strategy Validation' },
  { num: '02', name: 'Bayesian Inference', tag: 'Portfolio Optimization' },
  { num: '03', name: 'Causal Inference', tag: 'Credit Risk Assessment' },
  { num: '04', name: 'Confidence Intervals', tag: 'Value-at-Risk Estimation' },
  { num: '05', name: 'Hypothesis Testing', tag: 'Market Anomaly Detection' },
  { num: '06', name: 'Maximum Likelihood', tag: 'Volatility Modeling' },
  { num: '07', name: 'Monte Carlo Simulation', tag: 'Stress Testing' },
  { num: '08', name: 'Non-Parametric Inference', tag: 'Fraud Detection' },
  { num: '09', name: 'Regression Analysis', tag: 'Asset Pricing Models' },
  { num: '10', name: 'Time Series Inference', tag: 'Economic Forecasting' },
];

export default function TOC({ currentSlide }: SlideProps) {
  return (
    <div className="slide-container">
      <div className="top-line" />
      
      <h2 className="font-serif-display text-3xl text-black mb-2">Project Portfolio</h2>
      <div className="w-full h-[1px] bg-[#dee2e6] mb-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {projects.map((p) => (
          <div key={p.num} className="flex items-start gap-4 border-b border-[#dee2e6] pb-3">
            <span className="font-serif-display text-3xl text-[#dee2e6] w-12 flex-shrink-0">{p.num}</span>
            <div>
              <h3 className="font-sans-body text-lg font-bold text-black">{p.name}</h3>
              <span className="label-tag">{p.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-16 left-[60px] right-[60px] flex justify-between items-center">
        <span className="label-tag">10 PROJECTS</span>
        <span className="label-tag">{currentSlide + 1 < 10 ? `0${currentSlide + 1}` : currentSlide + 1}</span>
      </div>
    </div>
  );
}
