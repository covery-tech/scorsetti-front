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
  if (!values.sex) {
    errors.sex = 'Ingrese el sexo';
  }
  if (!values.province) {
    errors.province = 'Ingrese la provincia';
  }
  if (!Object.keys(values.covert).length) {
    errors.covert = 'Ingrese cobertura';
  }
  if (!values.destiny) {
    errors.destiny = 'Ingrese destino';
  }
  if (!values.from) {
    errors.from = 'Fecha de inicio es requerida';
  } else {
    const today = new Date();
    const selectedDate = new Date(values.from);
    selectedDate.setDate(selectedDate.getDate() + 1); // Agregar un día a la fecha seleccionada    
    if (selectedDate.getTime() < today) {
      errors.from = 'La fecha de salida debe ser mayor o igual al día de hoy';
    } else if (selectedDate < today) {
      errors.from = 'La fecha de salida no puede ser anterior a la fecha actual';
    }
  }
  if (!values.to) {
    errors.to = 'Fecha de llegada es requerida';
  } else {
    const fromDate = new Date(values.from);
    const toDate = new Date(values.to);

    if (toDate < fromDate) {
      errors.to = 'La fecha de llegada debe ser mayor o igual a la fecha de inicio';
    }
  }

  return errors;
}
