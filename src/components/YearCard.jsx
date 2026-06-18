import { FiArchive, FiArrowRight, FiLock } from 'react-icons/fi';
import '../styles/YearCard.css';

function YearCard({ name, link, delay = 0, index = 0 }) {
  const isUnavailable = link === '#';

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`year-card${isUnavailable ? ' year-card--unavailable' : ''}`}
      style={{
        animationDelay: `${delay}ms`,
        '--year-card-index': index,
      }}
      aria-label={`Open ${name} archived files folder`}
      {...(isUnavailable ? { 'aria-disabled': true } : {})}
    >
      <span className="year-card__glow" aria-hidden="true" />

      <span className="year-card__icon-wrap" aria-hidden="true">
        {isUnavailable ? (
          <FiLock className="year-card__icon" />
        ) : (
          <FiArchive className="year-card__icon" />
        )}
      </span>

      <span className="year-card__year">{name}</span>
      <span className="year-card__label">
        {isUnavailable ? 'Coming soon' : 'Returned documents'}
      </span>

      <span className="year-card__action" aria-hidden="true">
        <span className="year-card__action-text">View archive</span>
        <span className="year-card__action-icon-wrap">
          <FiArrowRight className="year-card__action-icon" />
        </span>
      </span>
    </a>
  );
}

export default YearCard;
