import { FiArchive, FiExternalLink } from 'react-icons/fi';
import '../styles/YearCard.css';

function YearCard({ name, link, delay = 0 }) {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button
      type="button"
      className="year-card"
      onClick={handleClick}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Open ${name} archived files folder`}
    >
      <span className="year-card__border" aria-hidden="true" />
      <span className="year-card__glow" aria-hidden="true" />
      <span className="year-card__pulse" aria-hidden="true" />

      <span className="year-card__icon-wrap" aria-hidden="true">
        <FiArchive className="year-card__icon" />
      </span>

      <span className="year-card__year">{name}</span>
      <span className="year-card__label">Archive</span>

      <span className="year-card__arrow" aria-hidden="true">
        <FiExternalLink />
      </span>
    </button>
  );
}

export default YearCard;
