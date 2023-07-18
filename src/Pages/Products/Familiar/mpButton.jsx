import React from "react";
import axios from "axios";
import useUser from "../../../components/hooks/UseUser";
export const MpButton = ({
  allPerson,
  quantity,
  name,
  lastName,
  phoneNumber,
  email,
}) => {
  const { user } = useUser();
  const createPay = () => {
    const config = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_URI_API}/mp/create-plan`,
      data: {
        quantity,
        pas_id: "covery",
        amount: 100,
        type: "Mpt",
        name,
        phoneNumber,
        lastName,
        email,
        allPerson,
        usersId: user?.id || "not loggin",
      },
    };
    axios(config)
      .then((res) => {
        // window.location.href = res.data
        return res.data;
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
