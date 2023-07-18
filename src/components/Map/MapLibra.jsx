import "./Map.css";

export default function MapLibra({ location, attention_hours }) {
  return (
    <section className="contact-us container1 mt-5" id="contact-section">
      <div className="container">
        <div className="row container2">
          <div className="col-lg-8">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93652.89537735288!2d-58.498339671199346!3d-34.57744282931999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb432f638a7b5%3A0x5b49064664b698d!2sLibra%20Compa%C3%B1ia%20Argentina%20De%20Seguros%20Sa!5e0!3m2!1ses-419!2sar!4v1658334789939!5m2!1ses-419!2sar"
                width="100%"
                height="420px"
                frameBorder="0"
                style={{
                  border: 0,
                  borderRadius: "15px",
                  position: "relative",
                  zIndex: 2,
                }}
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
          <div className="col-lg-4 information">
            <div
              className="justify-content-center"
              id="contact"
              action=""
              method="post"
            >
              <div className="section-heading">
                <h6>¿Cómo encontrarnos?</h6>
                <p>{location}</p>
                <h6>Horario de atención</h6>
                <p>{attention_hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
