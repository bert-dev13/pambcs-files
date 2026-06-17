import { FiInbox, FiUploadCloud } from 'react-icons/fi';
import EmployeeCard from './EmployeeCard';
import YearCard from './YearCard';
import '../styles/SectionCard.css';

const sectionConfig = {
  incoming: {
    icon: FiInbox,
    label: 'Incoming Files',
    emoji: '📥',
    description: 'Submit and access OJT & staff folders',
  },
  returned: {
    icon: FiUploadCloud,
    label: 'Returned Files',
    emoji: '📤',
    description: 'Browse archived files by year',
  },
};

function SectionCard({ variant, items, delay = 0 }) {
  const config = sectionConfig[variant];
  const Icon = config.icon;
  const CardComponent = variant === 'incoming' ? EmployeeCard : YearCard;

  return (
    <section
      className={`section-card section-card--${variant}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="section-card__glow" aria-hidden="true" />
      <div className="section-card__border-glow" aria-hidden="true" />

      <header className="section-card__header">
        <div className="section-card__header-left">
          <div className="section-card__badge">
            <Icon className="section-card__badge-icon" aria-hidden="true" />
          </div>
          <div className="section-card__header-text">
            <h2 className="section-card__title">
              <span className="section-card__emoji" aria-hidden="true">
                {config.emoji}
              </span>
              {config.label}
            </h2>
            <p className="section-card__description">{config.description}</p>
          </div>
        </div>
        <span className="section-card__count">{items.length}</span>
      </header>

      <div className="section-card__accent-line" aria-hidden="true" />

      <div className={`section-card__grid section-card__grid--${variant}`}>
        {items.map((item, index) => (
          <CardComponent
            key={item.name}
            name={item.name}
            link={item.link}
            delay={delay + 120 + index * 55}
          />
        ))}
      </div>
    </section>
  );
}

export default SectionCard;
