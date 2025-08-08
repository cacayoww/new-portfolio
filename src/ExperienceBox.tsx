interface ExperienceBoxProps {
  title: string;
  company: string;
  period: string;
  className?: string;
}

const ExperienceBox: React.FC<ExperienceBoxProps> = ({ title, company, period, className = "" }) => {
  return (
    <div className={`experience-box fade-in-down-delay-1 ${className}`}>
      <div className="experience-title">
        <h3>{title}</h3>
        <p>{company}</p>
      </div>
      <p>{period}</p>
    </div>
  );
};

export default ExperienceBox;
