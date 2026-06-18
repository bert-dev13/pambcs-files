import { FiTool, FiGrid, FiZap } from 'react-icons/fi';
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
      <span className="quick-pdf-tools__surface-glow" aria-hidden="true" />
      <span className="quick-pdf-tools__top-shine" aria-hidden="true" />

      <header className="quick-pdf-tools__header">
        <div className="quick-pdf-tools__header-left">
          <div className="quick-pdf-tools__icon-wrap" aria-hidden="true">
            <FiTool className="quick-pdf-tools__icon quick-pdf-tools__icon--main" />
            <FiZap className="quick-pdf-tools__icon quick-pdf-tools__icon--sub" />
          </div>
          <div className="quick-pdf-tools__header-text">
            <h2 id="quick-pdf-tools-title" className="quick-pdf-tools__title">
              Quick PDF Tools
            </h2>
            <p className="quick-pdf-tools__subtitle">
              Essential PDF utilities for preparing your submissions
            </p>
          </div>
        </div>
        <span className="quick-pdf-tools__count">
          <FiGrid className="quick-pdf-tools__count-icon" aria-hidden="true" />
          {pdfTools.length} tools
        </span>
      </header>

      <div className="quick-pdf-tools__divider" aria-hidden="true">
        <span className="quick-pdf-tools__accent" />
        <span className="quick-pdf-tools__divider-line" />
      </div>

      <div className="quick-pdf-tools__panel">
        <div className="quick-pdf-tools__grid">
          {pdfTools.map((tool, index) => (
            <PdfToolCard
              key={tool.name}
              {...tool}
              delay={delay + 80 + index * 60}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickPdfTools;
