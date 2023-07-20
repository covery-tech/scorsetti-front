import './ProductCard.css';
export default function ProductCard({ props }) {

    return (
        <div className="item align-content-center p-3"  >
            <div className="service" data-toggle="tooltip" data-placement="top" title={props?.title2}>
                <div className="icon">
                    <img className='img' src={props?.img}  alt={props?.title}/>
                </div>
                <h4>{props?.title}</h4>
            </div>
        </div>
    )
}