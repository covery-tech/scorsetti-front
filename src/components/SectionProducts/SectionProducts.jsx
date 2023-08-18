import { useEffect, useState } from "react";
import PrincipalText from "../Principal-Text/Principaltext";
import ProductCard from "./ProductCard";
import { infoProducts, listProducts } from "./products";
import axios from "axios";
import { Link } from "react-router-dom";
import "./sectionProducts.css";
import useUser from "../hooks/UseUser";

export default function SectionProducts({ userId }) {
  const [userPas, setUserPas] = useState([]);
  const { getRoute } = useUser();
  useEffect(() => {
    if (userId === undefined) {
      const config = {
        method: "GET",
        baseURL: process.env.REACT_APP_URI_API + `/product/getProductCard`,
      };
      axios(config)
        .then((res) => {
          if (res.data) {
            setUserPas(res.data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      const config2 = {
        method: "GET",
        baseURL:
          process.env.REACT_APP_URI_API + `/product/getProductsPas/${userId}`,
      };
      axios(config2)
        .then((res) => {
          getRoute(userId);
          setUserPas(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [userId]);

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
    <div className="w-75-m w-75-l w-90 center bg-white pa3 mv5">
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
        {userId ? (
          <>
            {userPas.products?.map((p, i) => {
              if (clientSection === infoProducts[p]?.client) {
                return ProductCardComponent(p, i);
              }
            })}
          </>
        ) : (
          <>
            {listProducts.map((p, i) => {
              if (clientSection === infoProducts[p].client) {
                return ProductCardComponent(p, i);
              }
            })}
          </>
        )}
      </div>
    </div>
  );
}
