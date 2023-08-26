import { useState } from "react";
import onChange from "../defaultFunctions/onChange";
import reloadPage from "../defaultFunctions/reloadPage";
import Validate from "./functions/validate";
import HomeSummary from "./HomeSummary";
import HomeBasicInfo from "./Forms/HomeBasicInfo";
import PersonalInfo from "./Forms/PersonalInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "./info";
import Form from "../../../components/FormContainer/FormContainer";

export default function HomeContainer() {
  const [values, setValues] = useState({
    //TipoProducto --------------
    tipo: "Hogar",
    //HomeBasicInfo --------------
    tipo_de_vivienda: "",
    uso: "",
    ubicacion_del_riesgo: "",
    metros_cuadrados: "",
    material: "",
    tipo_de_cubierta: "",
    medidas_contra_fuego: [],
    otras_medidas_contra_fuego: "",
    medidas_contra_robos: [],
    otras_medidas_contra_robos: "",
    //PersonalInfo --------------
    nombre: "",
    apellido: "",
    tipo_documento: "",
    numero_documento: "",
    sexo: "",
    fecha_nacimiento: "",
    domicilio: "",
    ciudad: "",
    provincia: "",
    email: "",
    telefono: "",
    //HomeAdvancedInfo --------------
    // patente: "",
    // numero_chasis: "",
    // numero_motor: "",
  });
  const [instance, setInstance] = useState(1);
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  // const [filteredBrands, setFilteredBrands] = useState([]);
  // const [filteredModels, setFilteredModels] = useState([]);
  // const {
  // brands,
  // setBrands,
  // filterBrands,
  // getBrands,
  // models,
  // setModels,
  // filterModels,
  // cotization,
  // setCotization,
  // getModels,
  // handleSubmit,
  // loading,
  // showModal,
  // handleOpenModal,
  // handleCloseModal,
  // } = useFetchCar();

  // useEffect(() => {
  //   getBrands(brands, setBrands);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   setFilteredBrands(filterBrands(values.brand.description, brands));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [values.brand.description]);

  // useEffect(() => {
  //   getModels(values.year, values.brand.markCode, setModels);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [values.brand.markCode]);

  // useEffect(() => {
  //   setFilteredModels(filterModels(values.model.description, models));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [values.model.description]);

  // const disabledFields = (inputKey) => {
  //   let inputsConditions = {
  //     model: values.brand.markCode === "" || loading,
  //   };
  //   return inputsConditions[inputKey];
  // };

  const nextInstance = ({
    e,
    errors,
    values,
    setShowErrors,
    setInstance,
    instance,
  }) => {
    e.preventDefault();
    let canNextInstance = false;
    if (instance === 1) {
      canNextInstance = !(Object.keys(errors).length || values.año === "");
    } else if (instance === 2) {
      canNextInstance = !(Object.keys(errors).length || values.nombre === "");
    }
    setShowErrors(!canNextInstance);
    if (canNextInstance) setInstance(instance + 1);
  };

  return (
    <Form>
      {(instance === 1 || instance === 2) && (
        <div className="img-container tc">
          <FontAwesomeIcon className="img" icon={icon} />
          <h1>Hogar</h1>
        </div>
      )}
      <div className={instance === 3 ? "summary-container" : "form-container"}>
        {(instance === 1 || instance === 2) && (
          <p className="mb3">
            Campos requeridos* ( Rellene los campos en órden →)
          </p>
        )}
        {instance === 1 && (
          <HomeBasicInfo
            values={values}
            setShowErrors={setShowErrors}
            setValues={setValues}
            errors={errors}
            onChange={onChange}
            setErrors={setErrors}
            showErrors={showErrors}
            Validate={Validate}
            nextInstance={nextInstance}
            instance={instance}
            setInstance={setInstance}
          />
        )}
        {instance === 2 && (
          <PersonalInfo
            values={values}
            setShowErrors={setShowErrors}
            setValues={setValues}
            errors={errors}
            onChange={onChange}
            setErrors={setErrors}
            showErrors={showErrors}
            Validate={Validate}
            nextInstance={nextInstance}
            instance={instance}
            setInstance={setInstance}
          />
        )}
        {instance === 3 && (
          <HomeSummary values={values} reloadPage={reloadPage} />
        )}
      </div>
    </Form>
  );
}
