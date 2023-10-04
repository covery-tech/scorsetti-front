import "./index.css";

export default function WeInfo({ description, name }) {
  // const URLSERVER = process.env.REACT_APP_URI_API + "";
  return (
    <div className="weinfo tc center pt4" id="quienes-somos">
      <div className="weinfo-img bg-white center pa3">
        <img src="/logo-vertical.png" alt="#" />
      </div>
      <div className="white">
        <h1 className="ph3 center f3">{name}</h1>
        <p className="ph3 center f6 f5-l">{description}</p>
      </div>
    </div>
  );
}
