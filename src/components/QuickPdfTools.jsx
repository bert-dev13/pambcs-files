import { FiTool } from 'react-icons/fi';
import PdfToolCard from './PdfToolCard';
import { pdfTools } from '../data/pdfTools';
import '../styles/QuickPdfTools.css';

function QuickPdfTools({ delay = 600 }) {
  return (
    <section
      className="quick-pdf-tools"
      style={{ animationDelay: `${delay}ms` }}
      aria-labelledby="quick-pdf-tools-title"
    >
      <header className="quick-pdf-tools__header">
        <div className="quick-pdf-tools__badge" aria-hidden="true">
          <FiTool className="quick-pdf-tools__badge-icon" />
        </div>
        <div className="quick-pdf-tools__header-text">
          <h2 id="quick-pdf-tools-title" className="quick-pdf-tools__title">
            <span className="quick-pdf-tools__emoji" aria-hidden="true">
              🛠
            </span>
            Quick PDF Tools
          </h2>
          <p className="quick-pdf-tools__subtitle">
            Essential PDF utilities for preparing your submissions
          </p>
        </div>
      </header>

      <div className="quick-pdf-tools__accent-line" aria-hidden="true" />

      <div className="quick-pdf-tools__grid">
        {pdfTools.map((tool, index) => (
          <PdfToolCard
            key={tool.name}
            {...tool}
            delay={delay + 140 + index * 80}
          />
        ))}
      </div>
    </section>
  );
}

export default QuickPdfTools;
