import { useState, useCallback, useEffect } from 'react';
import Cover from './sections/Cover';
import TOC from './sections/TOC';
import ChapterDivider from './sections/ChapterDivider';
import ProjectSlide from './sections/ProjectSlide';
import Summary from './sections/Summary';
import Final from './sections/Final';
import Navigation from './sections/Navigation';

export type SlideType = 'cover' | 'toc' | 'chapter' | 'project' | 'summary' | 'final';

export interface SlideData {
  id: number;
  type: SlideType;
  title?: string;
  subtitle?: string;
  chapterNum?: string;
  projectNum?: string;
  projectTag?: string;
  content?: ProjectContent;
}

export interface ProjectContent {
  problem: string;
  solution: string;
  impact: string;
  source: string;
  metrics?: { label: string; value: string; color?: string }[];
  framework?: string[];
  table?: { headers: string[]; rows: string[][] };
  chart?: boolean;
}

const slides: SlideData[] = [
  { id: 1, type: 'cover' },
  { id: 2, type: 'toc' },
  { id: 3, type: 'chapter', chapterNum: '01', title: 'Foundations of Statistical Inference', subtitle: 'A/B Testing and Bayesian Methods for Rigorous Financial Decision-Making' },
  { 
    id: 4, type: 'project', projectNum: '01', projectTag: 'A/B TESTING',
    content: {
      problem: 'Trading firms deploy algorithms without rigorous validation. Untested changes to execution rules and signal parameters cause capital losses.',
      solution: 'Controlled experiments assign capital to treatment vs. control groups. Holdout portfolios measure incremental returns, slippage, fill rates, and transaction costs.',
      impact: 'Eliminates guesswork in strategy deployment by providing causal estimates rather than correlations. Enables incremental ramp-up from small allocations to full deployment.',
      source: 'Quantitative trading industry surveys; A/B testing frameworks adapted from clinical trial methodology',
      metrics: [
        { label: 'Sample Size', value: '50,000+' },
        { label: 'p-value', value: '0.002', color: '#3498db' },
        { label: 'Avg Lift', value: '+12.4%', color: '#27ae60' },
      ],
      framework: ['Hypothesis', 'Design', 'Execute', 'Analyze', 'Decide']
    }
  },
  { 
    id: 5, type: 'project', projectNum: '02', projectTag: 'BAYESIAN INFERENCE',
    content: {
      problem: 'Traditional mean-variance optimization relies on point estimates, producing unstable portfolios with extreme weights that perform poorly out-of-sample.',
      solution: 'Bayesian methods treat parameters as probability distributions. Prior beliefs update with market data to produce posteriors, from which robust portfolio weights are derived.',
      impact: 'Produces more stable allocations; naturally incorporates manager views with uncertainty quantification. Avoids the "error maximization" problem of traditional Markowitz optimization.',
      source: 'Black & Litterman (1992); Idzorek (2005); Bevan & Winkelmann (1998)',
      metrics: [
        { label: 'Turnover Reduction', value: '40-60%', color: '#27ae60' },
        { label: 'Sharpe Improvement', value: '+0.15-0.35', color: '#3498db' },
        { label: 'Posterior CI', value: '95%', color: '#3498db' },
      ]
    }
  },
  { id: 6, type: 'chapter', chapterNum: '02', title: 'Risk Management & Assessment', subtitle: 'Causal Inference and Confidence Intervals for Robust Risk Quantification' },
  { 
    id: 7, type: 'project', projectNum: '03', projectTag: 'CAUSAL INFERENCE',
    content: {
      problem: 'Credit models predict well (AUC > 0.80) but cannot answer causal questions. Lenders do not know whether denying based on certain features actually reduces default.',
      solution: 'Causal frameworks estimate treatment effects of lending decisions. DAG-based identification, propensity score matching, and Bayesian inference quantify posterior uncertainty.',
      impact: 'Enables fairer lending decisions by distinguishing causal drivers from proxy variables. Supports regulatory compliance (Basel III, Solvency II) through explainable causal structures.',
      source: 'FIRM e.V. (2026); Pearl (2009); Hernan & Robins (2020)',
      metrics: [
        { label: 'Effect Correction', value: '15-30%', color: '#e74c3c' },
        { label: 'Confounding Paths', value: '3-5', color: '#3498db' },
      ]
    }
  },
  { 
    id: 8, type: 'project', projectNum: '04', projectTag: 'CONFIDENCE INTERVALS',
    content: {
      problem: 'VaR is reported as a single number, but this point estimate ignores estimation error in volatility and correlation. During crises, parameter uncertainty widens dramatically.',
      solution: 'Confidence intervals around VaR quantify uncertainty in the risk measure. Bootstrap methods and Bayesian simulation generate distributions of possible VaR values.',
      impact: 'Prevents over-reliance on a single risk number; reveals when VaR estimates are too uncertain for decision-making. Supports Basel regulatory requirements with conservative risk bounds.',
      source: 'NYU V-Lab; Jorion (2006); Basel Committee on Banking Supervision',
      table: {
        headers: ['Method', 'Tail Estimate', 'CI Width'],
        rows: [
          ['Parametric', 'Normal assumption', '8-15% divergence'],
          ['Historical', 'Empirical quantiles', 'Widest interval'],
          ['Monte Carlo', '100K simulations', '+/-2% stable'],
        ]
      }
    }
  },
  { id: 9, type: 'chapter', chapterNum: '03', title: 'Market Analysis & Prediction', subtitle: 'Hypothesis Testing and MLE for Systematic Market Understanding' },
  { 
    id: 10, type: 'project', projectNum: '05', projectTag: 'HYPOTHESIS TESTING',
    content: {
      problem: 'Traders chase anomalies based on backtests without rigor. Many patterns are spurious — results of data mining and survivorship bias rather than genuine inefficiencies.',
      solution: 'Formal hypothesis testing with multiple comparison corrections (Bonferroni, FDR) separates true anomalies from false discoveries. T-tests and FDR control evaluate return spreads.',
      impact: 'Prevents allocation of capital to spurious strategies; provides statistical evidence for factor-based investing. Supports Smart Beta product development with validated factors.',
      source: 'Fama & French (1993, 2015); Harvey et al. (2016) — 150+ anomalies tested',
      table: {
        headers: ['Factor', 't-stat', 'p-value', 'Significant?'],
        rows: [
          ['Momentum', '4.20', '< 0.001', 'Yes'],
          ['Value', '3.05', '0.003', 'Yes'],
          ['Size', '2.80', '0.006', 'Yes'],
        ]
      }
    }
  },
  { 
    id: 11, type: 'project', projectNum: '06', projectTag: 'MAXIMUM LIKELIHOOD',
    content: {
      problem: 'Option pricing models require accurate parameter estimates for volatility, mean reversion, and correlation. Poor calibration leads to mispriced derivatives and arbitrage losses.',
      solution: 'MLE fits option models to market data, maximizing likelihood for precise calibration of Heston and CEV models.',
      impact: 'Enables accurate pricing of exotic options and structured products. Improves delta-hedging by capturing volatility dynamics. Supports volatility arbitrage strategies.',
      source: 'Ait-Sahalia & Kimmel (2007); Hull & White (1987)',
      metrics: [
        { label: 'RMSE vs Market IV', value: '0.8-1.2%', color: '#27ae60' },
        { label: 'Smile Explained', value: '85-92%', color: '#3498db' },
        { label: 'Error Reduction', value: '15-25%', color: '#27ae60' },
      ]
    }
  },
  { id: 12, type: 'chapter', chapterNum: '04', title: 'Advanced Simulation & Modeling', subtitle: 'Monte Carlo and Non-Parametric Methods for Complex Risk Scenarios' },
  { 
    id: 13, type: 'project', projectNum: '07', projectTag: 'MONTE CARLO SIMULATION',
    content: {
      problem: 'Risk measures rely on historical assumptions that fail in unprecedented conditions. The 2008 crisis showed normal models dramatically underestimate tail risk.',
      solution: 'Monte Carlo generates 10,000+ scenarios from fitted distributions, modeling correlated returns and liquidity shocks. The result is a full probability distribution.',
      impact: 'Captures tail risks invisible to historical methods; enables scenario analysis for policy changes and black swan events. Supports pension fund asset-liability matching.',
      source: 'Analytica (2025); Glasserman (2004)',
      metrics: [
        { label: 'Scenarios', value: '10,000+', color: '#3498db' },
        { label: 'Tail Loss (1/100)', value: '35%', color: '#e74c3c' },
        { label: 'vs Parametric', value: '+59%', color: '#27ae60' },
      ]
    }
  },
  { 
    id: 14, type: 'project', projectNum: '08', projectTag: 'NON-PARAMETRIC INFERENCE',
    content: {
      problem: 'Fraud detection assumes normal patterns, but fraudsters create outliers that violate parametric assumptions. Traditional tests lose power when distributions are skewed.',
      solution: 'Non-parametric methods detect anomalies without distributional assumptions. Kernel density estimation and isolation forests learn natural data structure.',
      impact: 'Detects novel fraud patterns not seen in training data; reduces false positives. Scales to real-time processing for payment networks with sub-100ms inference latency.',
      source: 'Liu et al. (2008); Aggarwal (2017)',
      table: {
        headers: ['Method', 'Detection', 'False Pos.', 'Key Strength'],
        rows: [
          ['Isolation Forest', '92-96%', '3-5%', 'Novel patterns'],
          ['KDE', '85-90%', '5-8%', 'Density based'],
          ['Random Forest', '88-94%', '4-6%', 'Feature interact.'],
        ]
      }
    }
  },
  { id: 15, type: 'chapter', chapterNum: '05', title: 'Asset Pricing & Forecasting', subtitle: 'Regression and Time Series Methods for Predictive Financial Intelligence' },
  { 
    id: 16, type: 'project', projectNum: '09', projectTag: 'REGRESSION ANALYSIS',
    content: {
      problem: 'The Fama-French model explains cross-sectional returns, but linear regression misses nonlinear interactions. As predictors grow, multicollinearity degrades out-of-sample performance.',
      solution: 'ML regression captures nonlinear relationships, selects relevant factors automatically, and penalizes overfitting. These scale to high-dimensional predictor sets.',
      impact: 'Enhances quantitative strategy returns through better factor modeling. Supports Smart Beta and factor investing product development. Improves risk decomposition.',
      source: 'Gu, Kelly & Xiu (2020); Fama & French Data Library',
      metrics: [
        { label: 'Max Correlation', value: '0.959', color: '#27ae60' },
        { label: 'Accuracy Gain', value: '15-30%', color: '#3498db' },
        { label: 'SVR Consistency', value: '311/828', color: '#3498db' },
      ]
    }
  },
  { 
    id: 17, type: 'project', projectNum: '10', projectTag: 'TIME SERIES INFERENCE',
    content: {
      problem: 'Economic forecasting drives strategic allocation, but ARIMA and VAR models struggle with structural breaks. Policy shifts render historical relationships obsolete.',
      solution: 'ML time series methods capture temporal dependencies and regime switching. LSTM, transformers, and state-space models infer future states from economic indicator sequences.',
      impact: 'Enables dynamic strategic allocation shifts 1-2 quarters ahead of traditional models. Improves inflation forecasting for liability-driven investment. Supports central bank decisions.',
      source: 'Nguyen & Yoon (2019); Hamilton (1989)',
      metrics: [
        { label: 'Regime Accuracy', value: '85%+', color: '#27ae60' },
        { label: 'Drawdown Reduction', value: '10-15%', color: '#27ae60' },
        { label: 'Economic States', value: '3-4', color: '#3498db' },
      ]
    }
  },
  { id: 18, type: 'summary' },
  { id: 19, type: 'final' },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
      window.scrollTo(0, 0);
    }
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(slides.length - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-white">
      {slide.type === 'cover' && <Cover />}
      {slide.type === 'toc' && <TOC currentSlide={currentSlide} totalSlides={slides.length} />}
      {slide.type === 'chapter' && <ChapterDivider chapterNum={slide.chapterNum!} title={slide.title!} subtitle={slide.subtitle!} currentSlide={currentSlide} totalSlides={slides.length} />}
      {slide.type === 'project' && <ProjectSlide projectNum={slide.projectNum!} projectTag={slide.projectTag!} content={slide.content!} currentSlide={currentSlide} totalSlides={slides.length} />}
      {slide.type === 'summary' && <Summary currentSlide={currentSlide} totalSlides={slides.length} />}
      {slide.type === 'final' && <Final currentSlide={currentSlide} totalSlides={slides.length} />}
      <Navigation 
        currentSlide={currentSlide} 
        totalSlides={slides.length} 
        onPrev={prevSlide} 
        onNext={nextSlide}
        onGoTo={goToSlide}
      />
    </div>
  );
}

export default App;
