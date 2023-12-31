import "./Map.css"

export default function MapForPas({pas}){
    let {coords} = pas
    return(
        <section className="contact-us container1 mt-5" id="contacto">
        <div className="container">
          <div className="row container2">
            <div className="col-lg-8">
              <div id="map">
                <iframe src={`https://maps.google.com/maps?q=${coords?.long}, ${coords?.lat}&z=15&output=embed`} width="100%" height="420px" frameBorder="0" style={{border:0, position: 'relative', zIndex: 2}} allowFullScreen=""></iframe>
                <div className="row gap-3"  >
                  <div className="col-lg-4 offset-lg-1 infoContact bg-white p-2">
                    <div className="contact-info">
                      <div className="icon">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <h4>E-Mail</h4>
                      <span>{pas.email}</span>
                    </div>
                  </div>
                  <div className="col-lg-4 infoContact bg-white p-2">
                    <div className="contact-info">
                      <div className="icon">
                        <i className="fa fa-whatsapp"></i>
                      </div>
                      <h4>Whatsapp</h4>
                      <a href="https://wa.me/?text=Hola!%20Quiero%20contratar%20un%20seguro%20OnDemand" target="_blank" rel="noopener noreferrer"><span>{pas?.phone_number}</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" >
              <div className="justify-content-center" id="contact" style={{background:"#FFF",padding:30}}>
                  <div className="section-heading">
                    <h4>¿Cómo encontrarnos?</h4>                
                    <h6 >Dirección</h6>    
                    <span>Calle {pas?.calle} en {pas?.location}</span>            
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}