export default function addNewPerson ( setPersons, nPersons, values, setValues ) {
  if(!nPersons.find(p => p.name === values.name)) {
    setPersons([...nPersons, values]);
    setValues({
      name: "",
      lastname: "",
      document: "",
      birthdate: "",
      fiscal_cond: "",
      home_address: "",
      home_number: "",
      home_floor: "",
      postal_code: "",
      locality: "",
      province: "",
      nationality: "",
      phone: "",
      email: "",
      house_type: "",
      house_use: "",
      risk_location: "",
      meters: "",
      material_type: "",
      roof_type: "",
      fire_measures: [],
      other_fire_measures: "",
      theft_measures: [],
      other_theft_measures: "",
      type: ""
    })
  } else {
    alert('Esta persona ya se encuentra registrada!')
  }
};