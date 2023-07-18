import axios from "axios";
import { useEffect, useState } from "react";
import useUser from "../../../../components/hooks/UseUser";

const codeRamo = 24; //motorbikes

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

export const useFetchMoto = () => {
  const { getTokenPasLibra, tokenPas } = useUser();
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [cotization, setCotization] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getTokenPasLibra();
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getBrands = (brands, setBrands) => {
    const config = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_URI_API}/libra/getMotoBrands`,
      data: {
        token: tokenPas,
      },
    };

    if (!brands?.length) {
      fetcher(config).then((res) => {
        if (res === 401) {
          getTokenPasLibra();
        }
        const brandList = res && Array.isArray(res) ? res.map((item) => ({
          brand: item.brand,
          cod_brand: item.cod_brand,
        })) : [];              
        setBrands(brandList);
        console.log(brandList);
      });
    }
  };

  const filterBrands = (value, brands) => {
    const filteredBrands = brands.filter(
      (b) => b.brand.includes(value.toUpperCase())
    );
    console.log(filteredBrands);
    return filteredBrands;
  };

  const filterModels = (value, models) => {
    const filteredModels = models.filter(
      (m) => m.model.includes(value.toUpperCase())
      );
    console.log(filteredModels);
    return filteredModels;
  };

  const getModels = (markCode, setModels) => {
    const url = `${process.env.REACT_APP_URI_API}/libra/getMotoModels?cod_brand=${markCode}`;
    axios
      .post(url)
      .then((res) => {
        if (res.status === 401) {
          getTokenPasLibra();
        }
        const modelList = res.data && Array.isArray(res.data) ? res.data.map((item) => ({
          model: item.model,
          cod_model: item.cod_model,
        })) : [];
        setModels(modelList);
      })
      .catch((err) => console.log(err));
  };
  

  const getConducto = (setConducto) => {
    const config = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_URI_API}/libra/getConducto`,
      data: {
        codeRamo,
        codeProduct: code,
        token: tokenPas,
      },
    };
    fetcher(config).then((res) => {
      if (res === 401) {
        getTokenPasLibra();
      }
      setConducto(res.DatosAdicionales);
    });
  };

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
    setCotization,
    setPersons,
    setShowErrors,
    nPersons,
    addNewPerson,
    setValues,
    errors,
  }) => {
    e.preventDefault();
    if (Object.keys(errors).length || values.year === "") {
      setShowErrors(true);
    } else {
      setShowErrors(false);
      addNewPerson(setPersons, nPersons, values, setValues);
      const config = {
        method: "POST",
        baseURL: `${process.env.REACT_APP_URI_API}/libra/getCotizationMoto`,
        data: {
          values,
          token: tokenPas,
          codeRamo,
        },
      };
      setLoading(true);
      fetcher(config)
        .then((res) => {
          setLoading(false);
          setCotization(res);
        })
        .catch((e) => {
          setLoading(false);
        });
    }
  };

  return {
    brands,
    setBrands,
    filterBrands,
    getBrands,
    models,
    setModels,
    filterModels,
    cotization,
    setCotization,
    getConducto,
    getModels,
    handleSubmit,
    setCode,
    loading,
    showModal,
    handleOpenModal,
    handleCloseModal,
    // planCommercial,
    // setPlanCommercial,
    // getPlanCommercial,
  };
};
