import ssn from "./imgs/bitmap.png";
import "./Footer.css";
import Social from "./Social";

export default function Footer() {
  return (
    <>
      <Social />
      <div className="info p-0"> {/*pb-5 mt-5*/}
        <section className="infoOrganismo">
          <div className="infoItem">
            <span>
              Nº de inscripción en SSN <br />
              <strong>87170</strong>
            </span>
          </div>
          <div className="infoItem">
            <span>
              Atención al asegurado
              <br />
              <strong>0800-666-4800</strong>
            </span>
          </div>
          <div className="infoItem">
            <span>
              Organismo de control
              <br />
              <a href="http://www.argentina.gob.ar/ssn" target="_blank">
                www.argentina.gob.ar/ssn
              </a>
            </span>
          </div>
          <div className="infoItem">
            <img className="img" src={ssn} alt="SSN" id="SSN" />
          </div>
        </section>
      </div>
    </>
  );
}
