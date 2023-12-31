import React from "react";
import axios from "axios";
import useUser from "../../../components/hooks/UseUser";
import { useParams } from "react-router-dom";

export const MpButton = ({
  allPerson,
  quantity,
  name,
  lastName,
  phoneNumber,
  email,
  cotization
}) => {
  const { userId } = useParams();
  const { user } = useUser();
  const createPay = () => {
    const config = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_URI_API}/mp/create-plan`,
      data: {
        pas_id: userId ? userId : "covery",
        type: cotization.PlanTecnico + " | Auto",
        // name:allPerson[0].name,
        // phone_number:allPerson[0].phone_number,
        // last_name:allPerson[0].lastname,
        // email:allPerson[0].email,
        amount:cotization.Premio,
        plan:cotization.PlanTecnico + " | Auto",
        // from:allPerson[0].from,
        // address:allPerson[0].address,
        // destiny:allPerson[0].destiny,
        // location:allPerson[0].location,
        // province:allPerson[0].province,
        // document:allPerson[0].document,
        // birthdate:allPerson[0].birthdate,
        // sex:allPerson[0].sex,        
        frequency_type: "months",
        billing_day_proportional: true,
        repetitions: allPerson[0].validity === "Trimestral" ? 3 : 1,
        currency_id: "ARS",
        covert:allPerson[0].covert,
        usersId: user?.id || 1,
      },
    };
    axios(config)
      .then((res) => {
        console.log(res.data)
        window.location.href = res.data.init_point
        // return res.data;
      })
      .catch((e) => {
        alert("error de sistema intente mas tarde "+e);
      });
  };
  return (    
      <button className="btn btn-primary" onClick={createPay}>
        Ir a pagar!
      </button>   
  );
};
