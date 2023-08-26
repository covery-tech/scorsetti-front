import './index.css';
import StyledText from "../StyledText/StyledText";

export default function ClientSummary({ children }) {
  return (
    <div className="client-summary w-90 w-75-l flex items-center flex-column mb3 mt4 center">
      <StyledText className="form-title w-100 mb3 tc">Resumen</StyledText>
      <div className="w-100 flex justify-between">
        {children}
      </div>
    </div>
  );
}
