import { FiExternalLink } from 'react-icons/fi';
import '../styles/PdfToolCard.css';

const TOOL_THEMES = ['blue', 'indigo', 'sky', 'cyan'];

function PdfToolCard({ name, description, url, icon: Icon, delay = 0, index = 0 }) {
  const theme = TOOL_THEMES[index % TOOL_THEMES.length];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`pdf-tool-card pdf-tool-card--${theme}`}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Open ${name} tool in a new tab`}
    >
      <span className="pdf-tool-card__glow" aria-hidden="true" />
      <span className="pdf-tool-card__accent-bar" aria-hidden="true" />

      <span className="pdf-tool-card__icon-wrap" aria-hidden="true">
        <Icon className="pdf-tool-card__icon" />
      </span>

      <span className="pdf-tool-card__name">{name}</span>
      <span className="pdf-tool-card__description">{description}</span>

      <span className="pdf-tool-card__action" aria-hidden="true">
        <span className="pdf-tool-card__action-text">Open Tool</span>
        <span className="pdf-tool-card__action-icon-wrap">
          <FiExternalLink className="pdf-tool-card__action-icon" />
        </span>
      </span>
    </a>
  );
}

export default PdfToolCard;
