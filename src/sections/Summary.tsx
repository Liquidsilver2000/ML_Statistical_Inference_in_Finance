interface SlideProps {
  currentSlide: number;
  totalSlides: number;
}

const projectSummaries = [
  { num: '01', name: 'A/B Testing', highlight: '+12.4%', metric: 'avg lift, p < 0.002' },
  { num: '02', name: 'Bayesian Inference', highlight: '40-60%', metric: 'turnover reduction, Sharpe +0.15-0.35' },
  { num: '03', name: 'Causal Inference', highlight: '15-30%', metric: 'effect correction vs. prediction' },
  { num: '04', name: 'Confidence Intervals', highlight: '+/-15%', metric: 'VaR uncertainty quantified' },
  { num: '05', name: 'Hypothesis Testing', highlight: '20-25', metric: 'true anomalies from 150+ tests' },
  { num: '06', name: 'Maximum Likelihood', highlight: '0.8-1.2%', metric: 'RMSE, 85-92% smile fit' },
  { num: '07', name: 'Monte Carlo', highlight: '35%', metric: 'tail loss vs. 22% parametric VaR' },
  { num: '08', name: 'Non-Parametric', highlight: '92-96%', metric: 'fraud detection, 3-5% false pos.' },
  { num: '09', name: 'Regression', highlight: '0.959', metric: 'correlation, 15-30% accuracy gain' },
  { num: '10', name: 'Time Series', highlight: '85%+', metric: 'regime accuracy, 10-15% drawdown cut' },
];

export default function Summary({ currentSlide }: SlideProps) {
  return (
    <div className="slide-container">
      <div className="top-line" />
      
      <h2 className="font-serif-display text-2xl text-black mb-2">
        Executive Summary: Ten Inference Methods Transforming Financial Institutions
      </h2>
      <div className="w-full h-[1px] bg-[#dee2e6] mb-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6">
        {projectSummaries.map((p) => (
          <div key={p.num} className="flex items-center gap-3">
            <span className="font-serif-display text-xl text-[#3498db] w-10">{p.num}</span>
            <span className="font-sans-body text-sm text-[#495057]">
              <strong>{p.name}</strong> — <span className="text-[#27ae60] font-bold">{p.highlight}</span> {p.metric}
            </span>
          </div>
        ))}
      </div>
      
      {/* Unifying Principle */}
      <div className="bg-[#f8f9fa] border border-[#dee2e6] p-6 mb-6">
        <span className="label-tag block mb-2">UNIFYING PRINCIPLE</span>
        <p className="font-sans-body text-base text-[#495057] leading-relaxed">
          Statistical inference transforms raw data into <strong>actionable, uncertainty-quantified decisions</strong> — 
          the foundation of modern quantitative finance. Each method provides a lens through which financial uncertainty 
          becomes manageable and profitable.
        </p>
      </div>
      
      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4">
        <div className="stat-box">
          <span className="stat-label">Methods Covered</span>
          <span className="stat-value text-[#3498db]">10</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Financial Use Cases</span>
          <span className="stat-value text-[#3498db]">10</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Avg Performance Gain</span>
          <span className="stat-value text-[#27ae60]">12-35%</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Regulatory Alignment</span>
          <span className="stat-value text-[#27ae60]">Basel III</span>
        </div>
      </div>
      
      <div className="absolute bottom-16 left-[60px] right-[60px] flex justify-between items-center">
        <span className="label-tag">EXECUTIVE SUMMARY</span>
        <span className="label-tag">{currentSlide + 1 < 10 ? `0${currentSlide + 1}` : currentSlide + 1}</span>
      </div>
    </div>
  );
}
