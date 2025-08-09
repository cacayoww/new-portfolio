interface ExperienceBoxProps {
  title: string;
  company: string;
  period: string;
  logo: string;
  className?: string;
}

const ExperienceBox: React.FC<ExperienceBoxProps> = ({ title, company, period, logo, className = "" }) => {
  return (
    <div className={`experience-box fade-in-down-delay-1 ${className}`}>
      <div className="experience-logo">
        <img src={`${logo}`} alt="" draggable="false" onContextMenu={(e) => e.preventDefault()} />
      </div>
      <div className="experience-info">
        <div className="experience-title">
          <h3>{title}</h3>
          <p>{company}</p>
        </div>
        <p>{period}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;
