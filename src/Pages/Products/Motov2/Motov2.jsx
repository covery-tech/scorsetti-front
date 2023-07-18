import { useEffect, useState } from "react";
import icon from "./img/icon.png";
import PrincipalText from "../../../components/Principal-Text/Principaltext";
import StyledText from "../../../components/StyledText/StyledText";
import Input from "../../../components/Input/Input";
import addNewPerson from "./functions/addNewPerson";
import onChange from "../defaultFunctions/onChange";
import reloadPage from "../defaultFunctions/reloadPage";
import Validate from "./functions/validate";
import ClientSummary from "./ClientSummary/ClientSummary";
import { useFetchMoto } from "./hooks/useFetchMoto";
import { use, adjustment, validity } from "./accessories";
import ModalPortal from "../../../components/modal";
import ModalCotizacionesMoto from "../ModalCotizaciones/ModalCotizacionesMoto";
import { onSelectBrand, onSelectModel } from "./functions/onSelects";
import { onChangeBrands, onChangeModels } from "./functions/onChangeMoto";

export default function MotoRedesign() {
  const [nPersons, setPersons] = useState([]);
  const [values, setValues] = useState({
    year: "",
    brand: {
      markCode: "",
      description: "",
    },
    model: {
      modelCode: "",
      descriptionType: "",
      description: "",
      originDescription: "",
      price: "",
    },
    zerokm: false,
    use: "",
    adjustment: "",
    tracker: false,
    validity: "",
    accessories: [],
  });
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);
  const {
    brands,
    setBrands,
    filterBrands,
    getBrands,
    models,
    setModels,
    filterModels,
    cotization,
    setCotization,
    getModels,
    handleSubmit,
    loading,
    showModal,
    handleOpenModal,
    handleCloseModal,
  } = useFetchMoto();

  useEffect(() => {
    getBrands(brands, setBrands);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.year]);

  useEffect(() => {
    setFilteredBrands(filterBrands(values.brand.description, brands));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.brand.description]);

  useEffect(() => {
    getModels(values.brand.markCode, setModels);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.brand.markCode]);

  useEffect(() => {
    setFilteredModels(filterModels(values.model.description, models));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.model.description]);

  return (
    <div className="container text-center justify-content-center bg-white rounded-5 p-4 mt-5 my-5">
      <PrincipalText />
      <div className="d-flex row justify-content-center">
        <div className="imgContainer">
          <img className="formIcon" src={icon} alt="Car" />
          <h1 className="mt-3">Moto</h1>
        </div>
        <div className="formContainer py-5">
          {!nPersons.length && (
            <>
              <p className="mb-3">
                Campos requeridos* ( Rellene los campos en órden →)
              </p>
              <form
                onSubmit={(e) =>
                  handleSubmit({
                    e,
                    values,
                    setCotization,
                    setPersons,
                    setShowErrors,
                    nPersons,
                    addNewPerson,
                    setValues,
                    errors,
                  })
                }
              >
                {/* DATOS DEL VEHICULO */}
                <div className="vehicleData">
                  <StyledText
                    text={"Datos del vehiculo"}
                    styles={{
                      backgroundColor: "#ef7927",
                      borderRadius: "8px",
                      paddingLeft: "5px",
                    }}
                  />
                  <div className="inputCouple d-flex">
                    <Input
                      placeholder={"Año *"}
                      onChange={onChange}
                      values={values}
                      setValues={setValues}
                      errors={errors}
                      setErrors={setErrors}
                      showErrors={showErrors}
                      styles={{
                        marginRight: "0.5rem",
                        marginBottom: "2rem",
                      }}
                      type={"number"}
                      name={"year"}
                      validate={Validate}
                    />
                    <Input
                      placeholder={"Tipo de úso *"}
                      onChange={onChange}
                      values={values}
                      setValues={setValues}
                      errors={errors}
                      setErrors={setErrors}
                      showErrors={showErrors}
                      styles={{
                        marginBottom: "2rem",
                        width: "50%",
                      }}
                      type={"select"}
                      name={"use"}
                      options={use}
                      validate={Validate}
                    />
                  </div>
                  <div className="inputCouple d-flex">
                    <div
                      className={`d-flex inputContainer ${values.year.length === 0 && "disabledInput"}`}
                      style={{
                        marginBottom: "2rem",
                        marginRight: "0.5rem",
                        width: "50%",
                      }}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          onChangeBrands({
                            e,
                            values,
                            setValues,
                            setErrors,
                            validate: Validate,
                          });
                        }}
                        placeholder={"Marca *"}
                        value={values.brand.description}
                        disabled={values.year.length === 0}
                      />
                      {showErrors && errors.brand && (
                        <p
                          className="errorMessage"
                          style={{ marginTop: "0.5rem" }}
                        >
                          {errors.brand}
                        </p>
                      )}
                      {filteredBrands.length &&
                      values.brand.description !== "" &&
                      values.brand.markCode === "" ? (
                        <div className="filteredContainer">
                          {filteredBrands?.map((b) => (
                            <div
                              onClick={(e) => {
                                onSelectBrand({
                                  e,
                                  brand: b,
                                  values,
                                  setValues,
                                  setErrors,
                                  validate: Validate,
                                });
                              }}
                            >
                              <p>{b.brand}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div
                      className={`d-flex inputContainer ${values.brand.markCode === "" && "disabledInput"}`}
                      style={{
                        marginBottom: "2rem",
                        width: "50%"
                      }}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          onChangeModels({
                            e,
                            values,
                            setValues,
                            setErrors,
                            validate: Validate,
                          });
                        }}
                        placeholder={"Modelo *"}
                        value={values.model.description}
                        disabled={values.brand.markCode === ""}
                      />
                      {showErrors && errors.model && (
                        <p
                          className="errorMessage"
                          style={{ marginTop: "0.5rem" }}
                        >
                          {errors.model}
                        </p>
                      )}
                    {filteredModels.length &&
                    values.model.description !== "" &&
                    values.model.modelCode === "" ? (
                      <div className="filteredContainer">
                        {filteredModels?.map((m) => (
                          <div
                            onClick={(e) => {
                              onSelectModel({
                                e,
                                model: m,
                                values,
                                setValues,
                                setErrors,
                                validate: Validate,
                              });
                            }}
                          >
                            <p>{m.model}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                    </div>
                  </div>
                  <div className="inputCouple d-flex">
                    <Input
                      placeholder={"Vigencia *"}
                      onChange={onChange}
                      values={values}
                      setValues={setValues}
                      errors={errors}
                      setErrors={setErrors}
                      showErrors={showErrors}
                      styles={{
                        marginBottom: "2rem",
                        width: "50%",
                        marginRight: "0.5rem",
                      }}
                      type={"select"}
                      name={"validity"}
                      options={validity}
                      validate={Validate}
                    />
                    <Input
                      placeholder={"Ajuste automático *"}
                      onChange={onChange}
                      values={values}
                      setValues={setValues}
                      errors={errors}
                      setErrors={setErrors}
                      showErrors={showErrors}
                      styles={{
                        marginBottom: "2rem",
                        width: "50%",
                      }}
                      type={"select"}
                      name={"adjustment"}
                      options={adjustment}
                      validate={Validate}
                    />
                  </div>
                  <div className="inputCouple d-flex">
                    <Input
                      placeholder={"0 km"}
                      onChange={onChange}
                      values={values}
                      setValues={setValues}
                      errors={errors}
                      setErrors={setErrors}
                      showErrors={showErrors}
                      styles={{
                        marginBottom: "2rem",
                        width: "20%",
                      }}
                      type={"checkbox"}
                      name={"zerokm"}
                      validate={Validate}
                      boolean
                    />
                  </div>
                </div>
                <button
                  className="btn mt-2 mx-auto"
                  style={{ backgroundColor: "#ef7927", color: "#fff" }}
                  type="submit"
                >
                  <b>Siguiente</b>
                </button>
              </form>
            </>
          )}

          {nPersons.length !== 0 && (
            <div>
              <div>
                {nPersons.map((p) => {
                  return <ClientSummary client={p} />;
                })}
              </div>

              <div className="mt-3 d-flex">
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#ef7927",
                    color: "#fff",
                    marginRight: "1rem",
                  }}
                  onClick={() => handleOpenModal()}
                >
                  Cotizar
                </button>
                {loading && <div>Cargando cotizaciones...</div>}
                <button className="btn btn-danger" onClick={() => reloadPage()}>
                  Atrás
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {showModal && (
        <ModalPortal onClose={handleCloseModal}>
          <ModalCotizacionesMoto cotization={cotization} nPersons={nPersons} />
        </ModalPortal>
      )}
    </div>
  );
}
