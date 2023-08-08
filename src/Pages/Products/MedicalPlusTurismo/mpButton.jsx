import React, { useEffect } from "react";
import axios from "axios";
import useUser from "../../../components/hooks/UseUser";
export const MpButton = ({
  allPerson,
}) => {
  const { user } = useUser();
  const createPay = () => {
    const config = {
      method: "POST",
      baseURL: process.env.REACT_APP_URI_API + `/mp/create-plan`,
      data: {
        pas_id: "covery",
        type: "mpt",
        name:allPerson[0].name,
        phone_number:allPerson[0].phone_number,
        last_name:allPerson[0].lastname,
        email:allPerson[0].email,
        to:allPerson[0].to,
        from:allPerson[0].from,
        address:allPerson[0].address,
        destiny:allPerson[0].destiny,
        location:allPerson[0].location,
        province:allPerson[0].province,
        document:allPerson[0].document,
        birthdate:allPerson[0].birthdate,
        sex:allPerson[0].sex,
        covert:allPerson[0].covert,
        usersId: user?.id || "not loggin",
      },
    };
    axios(config)
      .then((res) => {
        window.location.href = res.data
        // return res.data;
      })
      .catch((e) => {
        alert("error de sistema intente mas tarde");
      });
  };
  return (
    <div className="list-group-item">
      <button className="btn btn-primary" onClick={createPay}>
        Ir a pagar!
      </button>
    </div>
  );
};
