export default function deletePersons (setPersons,nPersons,values) {
    let finishPersons = nPersons.filter((p) => p.dni !== values.dni);
    setPersons(finishPersons);
}