import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductCard({ props }) {
  return (
    <div className="product-card">
      <div className="h-50 pt2 flex justify-center items-center">
        <FontAwesomeIcon icon={props?.img} />
      </div>
      <p className="f6-m f7 tc ph2">{props?.title}</p>
    </div>
  );
}
