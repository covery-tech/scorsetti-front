export default function addNewPerson ( setPersons, nPersons, values, setValues ) {
  if(!nPersons.find(p => p.name === values.name)) {
    setPersons([...nPersons, values]);
    setValues({
      name: "",
      lastname: "",
      document: "",
      province: "",
      phone: "",
      email: "",
      sub_type: "",
      price: "",
      type: ""
    })
  } else {
    alert('Esta persona ya se encuentra registrada!')
  }
};