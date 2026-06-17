import { FiExternalLink } from 'react-icons/fi';
import '../styles/PdfToolCard.css';

function PdfToolCard({ name, description, url, icon: Icon, variant, delay = 0 }) {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button
      type="button"
      className={`pdf-tool-card pdf-tool-card--${variant}`}
      onClick={handleClick}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Open ${name} tool in a new tab`}
    >
      <span className="pdf-tool-card__glow" aria-hidden="true" />

      <span className="pdf-tool-card__icon-wrap" aria-hidden="true">
        <span className="pdf-tool-card__icon">
          <Icon />
        </span>
      </span>

      <span className="pdf-tool-card__name">{name}</span>
      <span className="pdf-tool-card__description">{description}</span>

      <span className="pdf-tool-card__link" aria-hidden="true">
        <FiExternalLink className="pdf-tool-card__link-icon" />
        Open Tool
      </span>
    </button>
  );
}

export default PdfToolCard;
