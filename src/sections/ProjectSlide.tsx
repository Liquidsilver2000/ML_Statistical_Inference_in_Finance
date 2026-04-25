import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface ProjectSlideProps {
  projectNum: string;
  projectTag: string;
  content: {
    problem: string;
    solution: string;
    impact: string;
    source: string;
    metrics?: { label: string; value: string; color?: string }[];
    framework?: string[];
    table?: { headers: string[]; rows: string[][] };
  };
  currentSlide: number;
  totalSlides: number;
}

export default function ProjectSlide({ projectNum, projectTag, content, currentSlide }: ProjectSlideProps) {
  return (
    <div className="slide-container">
      <div className="top-line" />
      
      {/* Action Title */}
      <h2 className="font-serif-display text-2xl text-black leading-snug mb-3 pr-4">
        {content.solution.substring(0, content.solution.indexOf('.') + 1)}
      </h2>
      <div className="w-full h-[1px] bg-[#dee2e6] mb-6" />
      
      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        {/* Left Column */}
        <div className="lg:w-[55%] space-y-5">
          <div>
            <span className="label-tag block mb-2">BUSINESS PROBLEM</span>
            <p className="font-sans-body text-base text-[#495057] leading-relaxed">{content.problem}</p>
          </div>
          
          <div>
            <span className="label-tag block mb-2">SOLUTION</span>
            <p className="font-sans-body text-base text-[#495057] leading-relaxed">{content.solution}</p>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="lg:w-[45%] space-y-5">
          {content.framework && (
            <div>
              <span className="label-tag block mb-3">FRAMEWORK</span>
              <div className="flex gap-2">
                {content.framework.map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className="step-circle text-black">{i + 1}</div>
                    <span className="text-xs text-[#495057] text-center font-sans-body">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {content.metrics && (
            <div>
              <span className="label-tag block mb-3">KEY METRICS</span>
              <div className="grid grid-cols-3 gap-3">
                {content.metrics.map((m, i) => (
                  <div key={i} className="stat-box">
                    <span className="stat-label">{m.label}</span>
                    <span className="stat-value" style={{ color: m.color || '#000' }}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {content.table && (
            <div>
              <span className="label-tag block mb-3">{content.table.headers.length === 3 ? 'METHOD COMPARISON' : 'FACTOR VALIDATION'}</span>
              <Table>
                <TableHeader>
                  <TableRow className="bg-black hover:bg-black">
                    {content.table.headers.map((h, i) => (
                      <TableHead key={i} className="text-white font-sans-body text-xs">{h}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {content.table.rows.map((row, ri) => (
                    <TableRow key={ri} className={ri % 2 === 1 ? 'bg-[#f8f9fa]' : ''}>
                      {row.map((cell, ci) => (
                        <TableCell key={ci} className="font-sans-body text-sm text-[#495057]">{cell}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
      
      {/* Impact Section */}
      <div className="mt-6 pt-4 border-t border-[#dee2e6]">
        <span className="label-tag block mb-2">BUSINESS IMPACT</span>
        <p className="font-sans-body text-base text-[#495057] leading-relaxed">{content.impact}</p>
      </div>
      
      {/* Source */}
      <p className="mt-3 text-xs text-[#6c757d] font-sans-body">Source: {content.source}</p>
      
      {/* Bottom */}
      <div className="absolute bottom-16 left-[60px] right-[60px] flex justify-between items-center">
        <span className="label-tag">PROJECT {projectNum} — {projectTag}</span>
        <span className="label-tag">{currentSlide + 1 < 10 ? `0${currentSlide + 1}` : currentSlide + 1}</span>
      </div>
    </div>
  );
}
