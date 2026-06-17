import { FiUser, FiFolder, FiExternalLink } from 'react-icons/fi';
import '../styles/EmployeeCard.css';

function EmployeeCard({ name, link, delay = 0 }) {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button
      type="button"
      className="employee-card"
      onClick={handleClick}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Open ${name} Google Drive folder`}
    >
      <span className="employee-card__border" aria-hidden="true" />
      <span className="employee-card__glow" aria-hidden="true" />

      <span className="employee-card__icon-wrap" aria-hidden="true">
        <span className="employee-card__icon employee-card__icon--user">
          <FiUser />
        </span>
        <span className="employee-card__icon employee-card__icon--folder">
          <FiFolder />
        </span>
      </span>

      <span className="employee-card__content">
        <span className="employee-card__name">{name}</span>
        <span className="employee-card__hint">Open folder</span>
      </span>

      <span className="employee-card__arrow" aria-hidden="true">
        <FiExternalLink />
      </span>
    </button>
  );
}

export default EmployeeCard;
