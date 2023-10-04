import './index.css';

export default function StyledText({children, styles, className, fontClasses}) {
    return (
          <div className={`styled-text ${className}`} style={styles}>
            <h3 className={fontClasses}>{children}</h3>
          </div>
    )
}