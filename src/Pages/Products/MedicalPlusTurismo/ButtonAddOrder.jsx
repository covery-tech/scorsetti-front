import axios from "axios";
import React from "react";
import useUser from "../../../components/hooks/UseUser";
// postOrderFlecha
export const ButtonAddOrder = ({
  name,
  last_name,
  email,
  from,
  to,
  destiny,
  phone_number,
  location,
  address,
  birthdate,
  province,
  sex,
  document,
  covert,
}) => {
  const { jwt } = useUser();
  const handleSubmit = () => {
    const config = {
      method: "POST",
      baseURL: process.env.REACT_APP_URI_API + `/product/postOrderFlecha`,
      data: {
        name,
        last_name,
        email,
        from,
        to,
        phone_number,
        type: "mpt",
        province,
        sex,
        birthdate,
        destiny,
        contract: covert,
        document,
        location,
        address,
      },
      headers: { token: jwt },
    };
    axios(config).then((res) => {
      if (res.data) window.open(process.env.REACT_APP_URI_API + "/" + res.data);
      else alert("ocurrio un error al generar la orden");
    }).catch((err) => console.log(err));
  };
  return (
    <button className="btn btn-primary" onClick={handleSubmit}>
      Enviar Certificado
    </button>
  );
};
