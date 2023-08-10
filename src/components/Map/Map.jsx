import "./Map.css";

export default function MapLibra({ location, attention_hours }) {
  return (
    <section id="contacto">
      <div className="mapContainer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16444.594435132585!2d-60.643964795123516!3d-32.945100110231664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2a45a971b2d%3A0x7eafd2b0bb092454!2sScorsetti%20Seguros!5e0!3m2!1ses!2sar!4v1689813312236!5m2!1ses!2sar"
          width="600"
          height="450"
          style={{"border":0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="infoContact">
          <p>
          </p>
          <p>
          </p>
        </div>
      </div>
    </section>
  );
}
