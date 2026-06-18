import { FiFolder, FiExternalLink } from 'react-icons/fi';
import '../styles/EmployeeCard.css';

const AVATAR_THEMES = ['blue', 'indigo', 'sky', 'cyan'];

function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function EmployeeCard({ name, link, delay = 0, index = 0 }) {
  const initials = getInitials(name);
  const theme = AVATAR_THEMES[index % AVATAR_THEMES.length];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`employee-card employee-card--${theme}`}
      style={{
        animationDelay: `${delay}ms`,
        '--employee-card-index': index,
      }}
      aria-label={`Open ${name} Google Drive folder`}
    >
      <span className="employee-card__glow" aria-hidden="true" />
      <span className="employee-card__accent-bar" aria-hidden="true" />

      <span className="employee-card__avatar-wrap" aria-hidden="true">
        <span className="employee-card__avatar">{initials}</span>
        <span className="employee-card__folder-badge">
          <FiFolder className="employee-card__folder-icon" />
        </span>
      </span>

      <span className="employee-card__content">
        <span className="employee-card__name">{name}</span>
      </span>

      <span className="employee-card__action" aria-hidden="true">
        <FiExternalLink className="employee-card__action-icon" />
      </span>
    </a>
  );
}

export default EmployeeCard;
