import "./index.css";

export default function WeInfo({ description, name }) {
  const URLSERVER = process.env.REACT_APP_API + "";
  return (
    <section className="weInfo d-flex" id="quienes-somos">
      <div className="weImg d-flex bg-white">
        <img src="/logo-scorsetti.png" alt="#" />
      </div>
      <div className="weDescription">
        <h1>{name}</h1>
        <h3>{description}</h3>
      </div>
    </section>
  );
}
