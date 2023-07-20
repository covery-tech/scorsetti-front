import { useEffect, useState } from "react";
import PrincipalText from "../Principal-Text/Principaltext";
import ProductCard from "./ProductCard";
import { infoProducts, listProducts } from "./products";
import axios from "axios";
import { Link } from "react-router-dom";
import "./sectionProducts.css";

export default function SectionProducts({ userId }) {
  const [userPas, setUserPas] = useState([]);
  useEffect(() => {
    if (userId === undefined) {
      const config = {
        method: "GET",
        baseURL: process.env.REACT_APP_API + `/product/getProductCard`,
      };
      axios(config).then((res) => {
        if (res.data) {
          setUserPas(res.data);
        }
      }).catch((err) => {
        console.error(err);
      });
    } else {
      const config2 = {
        method: "GET",
        baseURL: process.env.REACT_APP_API + `/product/getProductsPas/${userId}`,
      };
      axios(config2).then((res) => {
        setUserPas(res.data);
      }).catch((err) => {
        console.error(err);
      });
    }
  }, [userId]);
  // SWITCH
  const [clientSection, setClientSection] = useState('Persona');
  const changeClient = () => {
    (clientSection === 'Persona')
      ? setClientSection('Empresa')
      : setClientSection('Persona');
  }
  // PUBLICACIÓN DE CARD PRODUCT
  const returnCardProduct = (p, i) => {
    return (
      <Link key={i} to={`/producto/${p}`} className="aProducts">
        <ProductCard props={infoProducts[p]} />
      </Link>
    );
  }

  return (
    <div className="container bg-white mt-5 p-5">
      <PrincipalText />
      <button onClick={changeClient}>{clientSection}</button>
      <div className="row justify-content-around">
        {
          userId ? (
            <div className="content">
              {userPas.products?.map((p) => (
                <Link to={'producto/' + p}>
                  if(true){
                    <ProductCard props={infoProducts[p]} />
                  }
                </Link>
              ))}
            </div>
          ) : (
            <div className="content">
              {listProducts.map((p, i) => {
                if (clientSection==='Persona' && i<18) {
                  return returnCardProduct(p, i);
                } else if(clientSection==='Empresa' && i>=18){
                  return returnCardProduct(p, i);
                }
              })}
            </div>
          )}
      </div>
    </div>
  );
}
