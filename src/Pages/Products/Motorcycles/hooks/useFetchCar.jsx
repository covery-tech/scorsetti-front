import axios from "axios";
import { useEffect, useState } from "react";
import useUser from "../../../../hooks/UseUser";

const codeRamo = 4; //cars
// const codeRamo = 24; //motorbikes

const fetcher = async (config) => {
  try {
    const res = await axios(config);
    if (res.data) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const useFetchCar = () => {
  // const { getTokenPasLibra, tokenPas } = useUser();
  // const [code, setCode] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [brands, setBrands] = useState([]);
  // const [models, setModels] = useState([]);
  // const [cotization, setCotization] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // // const [planCommercial, setPlanCommercial] = useState([]);

  // useEffect(() => {
  //   getTokenPasLibra();
  // }, []);

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };
  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  // const getBrands = (brands, setBrands) => {
  //   const config = {
  //     method: "POST",
  //     baseURL: `${process.env.REACT_APP_URI_API}/libra/getBrand`,
  //     data: {
  //       token: tokenPas,
  //     },
  //   };
  //   if (!brands?.length) {
  //     fetcher(config).then((res) => {
  //       if (res === 401) {
  //         getTokenPasLibra();
  //       }
  //       setBrands(res?.DatosAdicionales);
  //     });
  //   }
  // };

  // const filterBrands = (value, brands) => {
  //   const filteredBrands = brands.filter((b) =>
  //     b.Description.toUpperCase().includes(value.toUpperCase())
  //   );
  //   return filteredBrands;
  // };

  // const filterModels = (value, models) => {
  //   const filteredModels = models.filter((m) =>
  //     m.Description.trim().includes(value.toUpperCase())
  //   );
  //   return filteredModels;
  // };

  // const getModels = (year, brandCode, setModels) => {
  //   const config = {
  //     method: "POST",
  //     baseURL: `${process.env.REACT_APP_URI_API}/libra/getModelsByMarkYear`,
  //     data: {
  //       year,
  //       brandCode,
  //       token: tokenPas,
  //     },
  //   };
  //   setLoading(true);
  //   fetcher(config).then((res) => {
  //     if (res === 401) {
  //       getTokenPasLibra();
  //     }
  //     setModels(res);
  //     setLoading(false);
  //   });
  // };

  // const getConducto = (setConducto) => {
  //   const config = {
  //     method: "POST",
  //     baseURL: `${process.env.REACT_APP_URI_API}/libra/getConducto`,
  //     data: {
  //       codeRamo,
  //       codeProduct: code,
  //       token: tokenPas,
  //     },
  //   };
  //   fetcher(config).then((res) => {
  //     if (res === 401) {
  //       getTokenPasLibra();
  //     }
  //     setConducto(res.DatosAdicionales);
  //   });
  // };

  // const getPlanCommercial = (planCommercial, setPlanCommercial) => {
  //   const config = {
  //     method: "POST",
  //     baseURL: `${process.env.REACT_APP_URI_API}/libra/getPlanComercial`,
  //     data: {
  //       codeRamo,
  //       typeAget,
  //       idAgent,
  //       validTypeId,
  //       token: tokenPas,
  //     },
  //   };
  //   if (!planCommercial?.length) {
  //     fetcher(config).then((res) => {
  //       if (res === 401) {
  //         getTokenPasLibra();
  //         setPlanCommercial(["error"]);
  //       }
  //       setPlanCommercial(res?.DatosAdicionales);
  //     });
  //   } else {
  //     return;
  //   }
  // };

  const handleSubmit = ({
    e,
    values,
    setPersons,
    nPersons,
    addNewPerson,
    setValues,
    errors,
  }) => {
    e.preventDefault();
    addNewPerson(setPersons, nPersons, values, setValues);
  };

  return {
    // brands,
    // setBrands,
    // filterBrands,
    // getBrands,
    // models,
    // setModels,
    // filterModels,
    // cotization,
    // setCotization,
    // getConducto,
    // getModels,
    handleSubmit,
    // setCode,
    // loading,
    // showModal,
    // handleOpenModal,
    // handleCloseModal,
  };
};
