export default function onSubmit(e, errors, values, setShowErrors, addNewPerson, setPersons, nPersons, setValues) {
  e.preventDefault();
  if (Object.keys(errors).length || values.name === "") {
    setShowErrors(true);
  } else {
    setShowErrors(false);
    addNewPerson(setPersons, nPersons, values, setValues);
    let finishPersons = [...nPersons];
    finishPersons.push(values);
  }
}
