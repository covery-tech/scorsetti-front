import { useEffect, useState } from "react";
import PrincipalText from "../Principal-Text/Principaltext";
import ProductCard from "./ProductCard";
import { infoProducts, listProducts } from "./products";
import axios from "axios";
import { Link } from "react-router-dom";
import "./sectionProducts.css";
import useUser from "../../hooks/UseUser";
import Container from "../Container/Container";

export default function SectionProducts({ route }) {
  const [userPas, setUserPas] = useState([]);
  const { getRoute } = useUser();
  useEffect(() => {
    if (route) {
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
  const ProductCardComponent = (p, i) => {
    return (
      <Link key={i} to={`/producto/${p}`} className="no-underline">
        <ProductCard props={infoProducts[p]} />
      </Link>
    );
  };

  return (
    <Container>
      <PrincipalText />
      <div className="flex flex-wrap justify-center pb3">
        <span
          className={`item-selector pv2 ph3 ${
            clientSection === "Persona" && "selected"
          }`}
          onClick={changeClient}
        >
          Persona
        </span>
        <span
          className={`item-selector pa2 ${
            clientSection === "Empresa" && "selected"
          }`}
          onClick={changeClient}
        >
          Empresa
        </span>
      </div>
      <div className="flex flex-wrap justify-center">
        {route ? (
          <>
            {userPas.products?.forEach((p, i) => {
              if (clientSection === infoProducts[p]?.client) {
                return ProductCardComponent(p, i);
              }
            })}
          </>
        ) : (
          <>
            {listProducts.forEach((p, i) => {
              if (clientSection === infoProducts[p].client) {
                return ProductCardComponent(p, i);
              }
            })}
          </>
        )}
      </div>
    </Container>
  );
}
