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

  // if (!values.postal_code) {
  //   errors.postal_code = 'Ingrese el código postal';
  // }

  if (!values.province) {
    errors.province = 'Ingrese la provincia';
  }
  if (!values.phone) {
    errors.phone = 'Ingrese número de teléfono';
  }
  if (!values.email) {
    errors.email = 'Ingrese email';
  }
  if (!values.sub_type) {
      errors.sub_type = 'Ingrese el tipo de ecomóvil';
    }
  if (!values.price) {
    errors.price = 'Ingrese la suma asegurada'
  } else if (values.price < 35000 || values.price > 200000) {
    errors.price = 'El precio debe estar entre 35000 y 200000';
  }

  return errors;
}
