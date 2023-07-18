import SectionProducts from "../../components/SectionProducts/SectionProducts";
import WeInfo from "../../components/WhoWeAre/WeInfo";
import Help from "../../components/Help/Help";
import MapLibra from "../../components/Map/MapLibra";
import { libra_description } from "./infoLibra";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <SectionProducts />
      <WeInfo description={libra_description.description}
        name={libra_description.name}/>
      <MapLibra
        location={libra_description.location}
        attention_hours={libra_description.attention_hours}
      />
      <Help />
    </div>
  );
}
