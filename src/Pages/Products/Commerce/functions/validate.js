export default function Validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Ingrese el nombre';
  }
  if (!values.lastname) {
    errors.lastname = 'Ingrese el apellido';
  }
  if (!values.document) {
    errors.document = 'Ingrese el documento';
  } else {
    const regex = /^(?:\d{7,8}|[A-Z]{1}[A-Z\d]{2,8})$/;
    if (!regex.test(values.document)) {
      errors.document = 'Ingrese un DNI argentino o un pasaporte válido';
    }
  }
  if (!values.birthdate) {
    errors.birthdate = "Fecha de nacimiento es req.";
  } else {
    const today = new Date();
    const selectedDate = new Date(values.birthdate);

    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 18); // Restar 18 años a la fecha actual

    if (selectedDate > today) {
      errors.birthdate =
        'Ingrese una fecha válida';
    } else if (selectedDate > minDate) {
      errors.birthdate = 'Debes tener al menos 18 años de edad';
    }
  }
  if (!values.fiscal_cond) {
    errors.fiscal_cond = 'Ingrese la condición fiscal';
  }
  if (!values.home_address) {
    errors.home_address = 'Ingrese la dirección';
  }
  if (!values.postal_code) {
    errors.postal_code = 'Ingrese el código postal';
  }
  if (!values.locality) {
    errors.locality = 'Ingrese la localidad';
  }
  if (!values.province) {
    errors.province = 'Ingrese la provincia';
  }
  if (!values.nationality) {
    errors.nationality = 'Ingrese la nacionalidad';
  }
  if (!values.phone) {
    errors.phone = 'Ingrese número de teléfono';
  }
  if (!values.email) {
    errors.email = 'Ingrese email';
  }
  if (!values.risk_location) {
    errors.risk_location = 'Ingrese la dirección del riesgo';
  }
  if (!values.meters) {
    errors.meters = 'Ingrese los mts² cubiertos';
  }

  return errors;
}
