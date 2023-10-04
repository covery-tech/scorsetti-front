const initSession = async ({ e, values, errors, setShowErrors, login }) => {
  e.preventDefault();
  const { email, password } = values;
  const canInitSession = !(Object.keys(errors).length || values.email === "");
  setShowErrors(!canInitSession);
  if (canInitSession && email && password) {
    login({ email, password });
  }
};

export default initSession;
