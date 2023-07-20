import SectionProducts from "../../components/SectionProducts/SectionProducts";
import WeInfo from "../../components/WhoWeAre/WeInfo";
import MapLibra from "../../components/Map/Map";
import { description } from "./info";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <SectionProducts />
      <WeInfo description={description.description}
        name={description.name}
      />
      <MapLibra
        location={description.location}
        attention_hours={description.attention_hours}
      />
    </div>
  );
}
