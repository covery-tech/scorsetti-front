import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faMotorcycle, faHome, faShip, faUserInjured, faHeart, faBuilding, faStore, faUmbrellaBeach, faHandHoldingUsd, faHandshake, faHeartbeat, faUserMd, faPeopleCarry, faPaw, faRestroom, faMoneyBillAlt, faAngellist, faShoppingCart, faAddressBook, faHourglassEnd, faUserPlus, faIdCard } from '@fortawesome/free-solid-svg-icons';


export default function ProductCard({ props }) {

    return (
        <div className="item align-content-center p-3"  >
            <div className="service" data-toggle="tooltip" data-placement="top" title="Descripción reducida y precio">
                <div className="icon">
                    <FontAwesomeIcon icon={props?.img} />
                    {/* <img className='img' src={props?.img}  alt={props?.title}/> */}
                </div>
                <h4>{props?.title}</h4>
                <h6>{props?.text}</h6>
            </div>
        </div>
    )
}