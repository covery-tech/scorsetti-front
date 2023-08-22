import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProductCard({ props }) {
    return (
        <div className="item align-content-center p-3"  >
            <div className="service" data-toggle="tooltip" data-placement="top" title={props?.title2}>
                <div className="icon">
                    <FontAwesomeIcon className='img' icon={props?.img} />
                </div>
                <h4>{props?.title}</h4>
            </div>
        </div>
    )
}
