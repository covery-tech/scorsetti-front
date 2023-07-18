export const addNewPerson = (setPersons,nPersons,values,resetForm) => {
  if(!nPersons.find(p => p.dni === values.dni)) {
    setPersons([...nPersons, values]);
    resetForm();
  } else {
    alert("Esta persona ya se encuentra registrada!")
  }
};