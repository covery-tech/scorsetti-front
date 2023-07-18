import './index.css';

export default function StyledText({text, styles}) {
    return (
          <div className="styled-text" style={styles}>
            <h3>{text}</h3>
          </div>
    )
}