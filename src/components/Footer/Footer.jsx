import ssn from "./imgs/bitmap.png";
import "./Footer.css";
import Social from "./Social";

export default function Footer() {
  return (
    <>
      <Social />
      <div className="footer bg-white pa2 flex flex-column flexrow-m flex-row-l">
        <div className="flex flex-column flex-row-l justify-around-l items-center w-50m w-100-l">
          <div className="tc mv1 ph1">
            <span>
              Nº de matrícula -<strong> 0531</strong>
            </span>
          </div>
          <div className="tc mv1 ph1">
            <span>
              Atención al asegurado -<strong> 011 4964-0011</strong>
            </span>
          </div>
          <div className="tc mv1 ph1">
            <span>
              Organismo de control
              <a href="http://www.argentina.gob.ar/ssn" target="_blank">
                {" www.argentina.gob.ar/ssn"}
              </a>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center tc mv1 w-50m ph1">
          <img className="w5" src={ssn} alt="SSN" />
        </div>
      </div>
    </>
  );
}
