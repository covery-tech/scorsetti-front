export default function addNewPerson(setPersons, nPersons, values, setValues) {
  setPersons([...nPersons, values]);
  setValues({
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
}
