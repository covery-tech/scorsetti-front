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
  const changeClientToEmpresa = () => (clientSection === 'Persona') && setClientSection('Empresa')
  const changeClientToPersona = () => (clientSection === 'Empresa') && setClientSection('Persona')
  // PUBLICACIÓN DE CARD PRODUCT
  const returnCardProduct = (p, i) => {
    return (
      <Link key={i} to={`/producto/${p}`} className="aProducts">
        <ProductCard props={infoProducts[p]} />
      </Link>
    );
  }

  return (
    <div id="SectionProducts-container" className="container bg-white mt-5 p-5">
      <PrincipalText />
      <ul className="item-selector-content">
        <li className="item-selector">
          <a className={`buttonChange ${(clientSection==="Persona")&& 'selected'}`} onClick={changeClientToPersona}>Persona</a>
        </li>
        <li className="item-selector">
          <a className={`buttonChange ${(clientSection==="Empresa")&& 'selected'}`} onClick={changeClientToEmpresa}>Empresa</a>
        </li>
      </ul>
      <div id="CadsPanelSelected" className="row justify-content-around">
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
