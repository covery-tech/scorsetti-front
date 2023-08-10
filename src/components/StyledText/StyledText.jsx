import './index.css';

export default function StyledText({children, styles, className}) {
    return (
          <div className={`styled-text ${className}`} style={styles}>
            <h3>{children}</h3>
          </div>
    )
}