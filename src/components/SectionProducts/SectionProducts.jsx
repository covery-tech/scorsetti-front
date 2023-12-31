import { useEffect, useState } from "react";
import PrincipalText from "../Principal-Text/Principaltext";
import ProductCard from "./ProductCard";
import { infoProducts, listProducts } from "./products";
import axios from "axios";
import { Link } from "react-router-dom";
import "./sectionProducts.css";
import useUser from "../hooks/UseUser";

export default function SectionProducts({ route }) {
  const [userPas, setUserPas] = useState([]);
  const { getRoute } = useUser();
  useEffect(() => {
    if(route) {
      const config2 = {
        method: "GET",
        baseURL:
          process.env.REACT_APP_URI_API + `/product/getProductsPas/${route}`,
      };
      axios(config2)
        .then((res) => {
          getRoute(route);
          setUserPas(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [getRoute, route]);
  // SWITCH
  const [clientSection, setClientSection] = useState("Persona");
  const changeClient = () => {
    clientSection === "Persona"
      ? setClientSection("Empresa")
      : setClientSection("Persona");
  };
  // PUBLICACIÓN DE CARD PRODUCT
  const returnCardProduct = (p, i) => {
    return (
      <Link key={i} to={`/producto/${p}`} className="aProducts">
        <ProductCard props={infoProducts[p]} />
      </Link>
    );
  };

  return (
    <div id="SectionProducts-container" className="container bg-white mt-5 p-5">
      <PrincipalText />
      <ul className="item-selector-content px-0">
        <li className="item-selector">
          <span
            className={`buttonChange ${
              clientSection === "Persona" && "selected"
            }`}
            onClick={changeClient}
          >
            Persona
          </span>
        </li>
        <li className="item-selector">
          <span
            className={`buttonChange ${
              clientSection === "Empresa" && "selected"
            }`}
            onClick={changeClient}
          >
            Empresa
          </span>
        </li>
      </ul>
      <div id="CadsPanelSelected" className="row justify-content-around">
        {route ? (
          <div className="content">
            {userPas.products?.map((p, i) => {
              if (clientSection === infoProducts[p]?.client) {
                return (
                  <Link to={"producto/" + p} key={i}>
                    <ProductCard props={infoProducts[p]} />
                  </Link>
                );
              }
            })}
          </div>
        ) : (
          <div className="content">
            {listProducts.map((p, i) => {
              if (clientSection === infoProducts[p].client) {
                return returnCardProduct(p, i);
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
}
