import ssn from "./imgs/bitmap.png"
import "./Footer.css"
import Social from "./Social"


export default function Footer(){
    return(
        <div className="container info p-0">
        <section className="rounded-1" id="info_organismo">
            <div className="my-auto"><span>Nº de inscripción en SSN <br/>
              <strong>87170</strong></span>            
            </div>               
            <div className=" my-auto"><span>Atención al asegurado 
              <br/>
              <strong>0800-666-4800</strong></span>
            </div>
            <div className="my-auto"><span>Organismo de control 
              <br/>
              <a href="http://www.argentina.gob.ar/ssn" target="_blank">www.argentina.gob.ar/ssn</a></span>
            </div>        
            <div className="d-flex align-center justify-center md:justify-end my-auto" ><img className="img" src={ssn} alt="SSN"/>
            </div>
        </section>  
        <Social/>
    </div>
    )
}