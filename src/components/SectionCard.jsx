import { FiFolderPlus, FiArchive, FiFolder, FiUsers, FiCalendar } from 'react-icons/fi';
import EmployeeCard from './EmployeeCard';
import YearCard from './YearCard';
import '../styles/SectionCard.css';

const sectionConfig = {
  incoming: {
    icon: FiFolderPlus,
    label: 'Incoming Files',
    description: 'Submit and access staff folders',
    countLabel: (count) => `${count} ${count === 1 ? 'folder' : 'folders'}`,
    countIcon: FiFolder,
  },
  returned: {
    icon: FiArchive,
    label: 'Returned Files',
    description: 'Browse archived and returned documents',
    countLabel: (count) => `${count} ${count === 1 ? 'year' : 'years'}`,
    countIcon: FiCalendar,
  },
};

function SectionCard({ variant, items, delay = 0 }) {
  const config = sectionConfig[variant];
  const Icon = config.icon;
  const CountIcon = config.countIcon;
  const CardComponent = variant === 'incoming' ? EmployeeCard : YearCard;

  return (
    <section
      className={`section-card section-card--${variant}`}
      style={{ animationDelay: `${delay}ms` }}
      aria-labelledby={`section-${variant}-title`}
    >
      <span className="section-card__surface-glow" aria-hidden="true" />
      <span className="section-card__top-shine" aria-hidden="true" />

      <header className="section-card__header">
        <div className="section-card__header-left">
          <div className={`section-card__icon-wrap section-card__icon-wrap--${variant}`} aria-hidden="true">
            <Icon className="section-card__icon section-card__icon--main" />
            {variant === 'incoming' && (
              <FiUsers className="section-card__icon section-card__icon--sub" />
            )}
            {variant === 'returned' && (
              <FiCalendar className="section-card__icon section-card__icon--sub section-card__icon--sub-archive" />
            )}
          </div>
          <div className="section-card__header-text">
            <h2 id={`section-${variant}-title`} className="section-card__title">
              {config.label}
            </h2>
            <p className="section-card__description">{config.description}</p>
          </div>
        </div>
        <span className="section-card__count">
          <CountIcon className="section-card__count-icon" aria-hidden="true" />
          {config.countLabel(items.length)}
        </span>
      </header>

      <div className="section-card__divider" aria-hidden="true">
        <span className="section-card__accent" />
        <span className="section-card__divider-line" />
      </div>

      <div className={`section-card__panel section-card__panel--${variant}`}>
        <div className={`section-card__grid section-card__grid--${variant}`}>
          {items.map((item, index) => (
            <CardComponent
              key={item.name}
              name={item.name}
              link={item.link}
              delay={delay + 80 + index * 55}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionCard;
