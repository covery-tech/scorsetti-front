import { useState } from "react";
import onChange from "../../../utils/onChangeInput";
import reloadPage from "../../../utils/reloadPage";
import Validate from "./formUtils/validate";
import CarSummary from "./CarSummary";
import CarBasicInfo from "./formInstances/CarBasicInfo";
import PersonalInfo from "./formInstances/PersonalInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "./info";
import Form from "../../../components/FormContainer/FormContainer";

export default function CarsContainer() {
  const [values, setValues] = useState({
    //TipoProducto --------------
    tipo: "Auto",
    //CarBasicInfo --------------
    año: "",
    marca: "",
    modelo: "",
    cero_km: false,
    tipo_uso: "",
    vigencia: "",
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
    //CarAdvancedInfo --------------
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
        <div className="img-container w-100 w-30-l tc">
          <FontAwesomeIcon className="img" icon={icon} />
          <h1>Auto</h1>
        </div>
      )}
      <div
        className={`${
          instance === 3 ? "summary-container" : "form-container"
        } w-100`}
      >
        {(instance === 1 || instance === 2) && (
          <p className="mb3">
            Campos requeridos* ( Rellene los campos en órden →)
          </p>
        )}
        {instance === 1 && (
          <CarBasicInfo
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
          <CarSummary values={values} reloadPage={reloadPage} />
        )}
      </div>
    </Form>
  );
}
