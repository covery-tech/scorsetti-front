import './index.css';

export default function SummaryCard({children, className}) {
  return (
    <div className={`summary-card ${className}`}>
      {children}
    </div>
  );
}
