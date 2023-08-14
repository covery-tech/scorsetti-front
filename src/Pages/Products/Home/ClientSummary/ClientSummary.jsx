import axios from "axios";
import StyledText from "../../../../components/StyledText/StyledText";
import SummaryCard from "./SummaryCard";
import "./index.css";

export default function ClientSummary({ values, reloadPage }) {
    const {
        tipo,
        tipo_de_vivienda,
        uso,
        ubicacion_del_riesgo,
        metros_cuadrados,
        material,
        tipo_de_cubierta,
        medidas_contra_fuego,
        otras_medidas_contra_fuego,
        medidas_contra_robos,
        otras_medidas_contra_robos,
        nombre,
        apellido,
        tipo_documento,
        numero_documento,
        sexo,
        fecha_nacimiento,
        domicilio,
        ciudad,
        provincia,
        email,
        telefono,
    } = values;

    const sendCotization = async (e) => {
        e.preventDefault();
        const values = {
            tipo,
            description: {
                tipo_de_vivienda,
                uso,
                ubicacion_del_riesgo,
                metros_cuadrados,
                material,
                tipo_de_cubierta,
                medidas_contra_fuego,
                otras_medidas_contra_fuego,
                medidas_contra_robos,
                otras_medidas_contra_robos,
            },
            client: {
                nombre,
                apellido,
                tipo_documento,
                numero_documento,
                sexo,
                fecha_nacimiento,
                domicilio,
                ciudad,
                provincia,
                email,
                telefono,
            },
        };
        const medidasContraFuegoDescriptions =
            values.description.medidas_contra_fuego.map(
                (medida) => medida.description
            );
        const medidasContraFuegoText =
            medidasContraFuegoDescriptions.join(", ");

        const medidasContraRoboDescriptions =
            values.description.medidas_contra_robos.map(
                (medida) => medida.description
            );
        const medidasContraRoboText = medidasContraRoboDescriptions.join(", ");
        console.log(values.description.medidas_contra_fuego);
        const sendCotization = {
            method: "POST",
            baseURL: `${process.env.REACT_APP_URI_API}/product/postOrdersBack`,
            data: {
                values: {
                    ...values,
                    description: {
                        ...values.description,
                        medidas_contra_fuego: medidasContraFuegoText,
                        medidas_contra_robos: medidasContraRoboText,
                    },
                },
            },
        };
        console.log(
            "medidas_contra_fuego después de la asignación:",
            sendCotization.data.values.description.medidas_contra_fuego
        );
        try {
            const res = await axios(sendCotization);
            if (res) {
                alert("Tu consulta se enviará a tu email!");
            }
        } catch (err) {
            console.warn(err);
        }

        const sendEmailtoPAS = {
            method: "POST",
            baseURL: `${process.env.REACT_APP_URI_API}/mail/sendEmailCoti`,
            data: {
                values: {
                    ...values,
                    description: {
                        ...values.description,
                        medidas_contra_fuego: medidasContraFuegoText,
                        medidas_contra_robos: medidasContraRoboText,
                    },
                },
            },
        };
        try {
            await axios(sendEmailtoPAS);
        } catch (err) {
            console.warn(err);
        }

        const sendEmailtoClient = {
            method: "POST",
            baseURL: `${process.env.REACT_APP_URI_API}/mail/sendEmailCotiClient`,
            data: {
                values: {
                    ...values,
                    description: {
                        ...values.description,
                        medidas_contra_fuego: medidasContraFuegoText,
                        medidas_contra_robos: medidasContraRoboText,
                    },
                },
            },
        };
        try {
            await axios(sendEmailtoClient);
        } catch (err) {
            console.warn(err);
        }
    };

    return (
        <div className="client-summary d-flex align-items-center flex-column mb-3 mt-4">
            <StyledText className="form-title w-50 mb-3 text-center">
                Resumen
            </StyledText>
            <div className="d-flex justify-content-center">
                <SummaryCard>
                    <StyledText className="dark-text f-lighter">
                        Datos del hogar
                    </StyledText>
                    <hr />
                    <div className="d-flex flex-column">
                        <h5>Tipo: {tipo_de_vivienda}</h5>
                        <h5>
                            Uso: {uso}, {ubicacion_del_riesgo}
                        </h5>
                        <h5>Metros cuadrados: {metros_cuadrados}</h5>
                        <h5>Material: {material}</h5>
                        <h5>Vigencia: {tipo_de_cubierta}</h5>{" "}
                        <h5>
                            Medidas contra Fuego:{" "}
                            {medidas_contra_fuego.length
                                ? medidas_contra_fuego.map(
                                      (a) => a.description + ", "
                                  )
                                : "No seleccionado"}
                        </h5>
                        <h5>
                            {otras_medidas_contra_fuego.length > 0 ? (
                                <h5>
                                    Otras medidas contra fuego:{" "}
                                    {otras_medidas_contra_fuego}
                                </h5>
                            ) : (
                                <></>
                            )}
                        </h5>
                        <h5>
                            Medidas contra Robo:{" "}
                            {medidas_contra_robos.length
                                ? medidas_contra_robos.map(
                                      (a) => a.description + ", "
                                  )
                                : "No seleccionado"}
                        </h5>
                        <h5>
                            {otras_medidas_contra_robos.length > 0 ? (
                                <>Otras medidas: {otras_medidas_contra_robos}</>
                            ) : (
                                <></>
                            )}
                        </h5>
                    </div>
                </SummaryCard>
                <SummaryCard>
                    <StyledText className="dark-text f-lighter">
                        Datos personales
                    </StyledText>
                    <hr />
                    <div className="d-flex flex-column">
                        <h5>
                            {nombre}, {apellido}
                        </h5>
                        <h5>
                            {tipo_documento} {numero_documento}
                        </h5>
                        <h5>{sexo}</h5>
                        <h5>{fecha_nacimiento}</h5>
                        <h5>{domicilio}</h5>
                        <h5>{provincia},</h5>
                        <h5>{ciudad}</h5>
                        <h5>
                            {email}, {telefono}
                        </h5>
                    </div>
                </SummaryCard>
            </div>
            <div className="mt-3 d-flex justify-content-center">
                <button
                    className="button main-button"
                    onClick={(e) => sendCotization(e)}
                >
                    Cotizar
                </button>
                <button
                    className="button back-button"
                    onClick={() => reloadPage()}
                >
                    Atrás
                </button>
            </div>
        </div>
    );
}
