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
    if (!userId) {
      const config2 = {
        method: "GET",
        baseURL: process.env.REACT_APP_URI_API + `/product/getProductsPas/${userId}`,
      };
      axios(config2).then((res) => {
        setUserPas(res.data);
      }).catch((err)=>{
        console.error(err);
      });
    }
  }, [userId]);

  return (
    <div className="container bg-white mt-5 p-5">
      <PrincipalText />
      <div className="row justify-content-around">
        {userId ? (
          <div className="content">
            {userPas.products?.map((p) => (
              <Link to={'producto/' + p}>
                <ProductCard props={infoProducts[p]} />
              </Link>
            ))}
          </div>
          
        ) : (
          <div className="content">
            {listProducts.map((p, i) => {
              return (
                <Link key={i} to={`/producto/${p}`} className="aProducts">
                  <ProductCard props={infoProducts[p]} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
