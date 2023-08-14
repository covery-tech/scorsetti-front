export default function Validate(values, instance) {
    let errors = {};
    const errorMsg = "Campo requerido.";
    if (instance === 1) {
        if (!values.tipo) {
            errors.tipo = errorMsg;
        }
        if (!values.tipo_de_vivienda) {
            errors.tipo_de_vivienda = errorMsg;
        }
        if (!values.uso) {
            errors.uso = errorMsg;
        }
        if (!values.ubicacion_del_riesgo) {
            errors.ubicacion_del_riesgo = errorMsg;
        }
        if (!values.metros_cuadrados) {
            errors.metros_cuadrados = errorMsg;
        }
        if (!values.material) {
            errors.material = errorMsg;
        }
        if (!values.tipo_de_cubierta) {
            errors.tipo_de_cubierta = errorMsg;
        }
    }
    if (instance === 2) {
        if (!values.nombre) {
            errors.nombre = errorMsg;
        }
        if (!values.apellido) {
            errors.apellido = errorMsg;
        }
        if (!values.tipo_documento) {
            errors.tipo_documento = errorMsg;
        }
        if (!values.numero_documento) {
            errors.numero_documento = errorMsg;
        }
        if (!values.sexo) {
            errors.sexo = errorMsg;
        }
        if (!values.fecha_nacimiento) {
            errors.fecha_nacimiento = errorMsg;
        }
        if (!values.domicilio) {
            errors.domicilio = errorMsg;
        }
        if (!values.ciudad) {
            errors.ciudad = errorMsg;
        }
        if (!values.provincia) {
            errors.provincia = errorMsg;
        }
        if (!values.email) {
            errors.email = errorMsg;
        }
        if (!values.telefono) {
            errors.telefono = errorMsg;
        }
    }
    return errors;
}
