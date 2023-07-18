export default function WeInfo({description,image,name}) {
    const URLSERVER = `${process.env.REACT_APP_URI_API}`
    return (
        <section className="simple-cta mt-5" id="who-are-we">
            <div className="container align-content-center">
                <div className="row">
                    <div className="container col-lg-5 offset-lg-1">
                        <div className="row bg-white left-image justify-content-center align-content-center rounded-4 px-0 py-5">
                            {
                                image ? <img className="bg-white col-12 align-center w-auto rounded-3" src={`${URLSERVER}/${image}`} height="300"  alt=""/>
                                : <img className="bg-white col-12 align-center w-auto p-3 rounded-3" src={`${URLSERVER}/libra.jpg`} height="250"  alt=""/>
                            }
                            
                        </div>
                    </div>
                    <div className="col-lg-5 align-self-center" style={{color:'#fff'}}>
                        <div style={{overflow:"hidden"}} className="col-12">
                            <h1 style={{fontWeight:'bold'}}>{name}</h1>
                            <br/>
                            <h1 style={{fontSize:'50px'}}>Quiénes Somos</h1>
                            <br/>
                            <p >{description ? description :""}</p>
                            <br/>
                            <div className="btn btn-light">
                                <a href="#contact-section">Contacto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}