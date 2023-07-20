export default function addNewPerson ( setPersons, nPersons, values, setValues ) {  
    setPersons([...nPersons, values]);
    setValues({
    name: "",
    lastname: "",
    document: "",
    birthdate: "",
    sex: "",
    province: "",
    covert: "",
    destiny: "",
    from: "",
    to: "",
    address: "",
    email: "",
    phone_number: "",
    location: "",
    type:"mpt"
    })
};