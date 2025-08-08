interface CertificateBoxProps {
  image: string;
  title: string;
  className?: string;
}

const CertificateBox: React.FC<CertificateBoxProps> = ({ image, title, className = "" }) => {
  return (
    <div className={`box fade-in-down-delay-4 ${className}`}>
      <div className="box-img">
        <img src={image} alt={title} draggable="false" onContextMenu={(e) => e.preventDefault()} />
      </div>
      <div className="box-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default CertificateBox;
