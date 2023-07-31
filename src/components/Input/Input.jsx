import "./index.css";

export default function Input({
  placeholder,
  type,
  name,
  onChange,
  values,
  setValues,
  errors,
  setErrors,
  showErrors,
  classes,
  styles,
  options,
  validate,
  boolean,
}) {
  return (
    <>
      {type === "select" ? (
        <div style={styles} className="selectContainer">
          <select
            name={name}
            onChange={(e) =>
              onChange({ e, values, setValues, setErrors, validate })
            }
            style={{
              width: "100%",
            }}
          >
            <option value="disabled">{placeholder}</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {showErrors && errors[name] && (
            <p className="errorMessage" style={{ marginTop: "0.5rem" }}>
              {errors[name]}
            </p>
          )}
        </div>
      ) : (
        <div
          className={`d-flex ${
            type === "checkbox" ? "checkboxContainer" : "inputContainer"
          } ${classes}`}
          style={styles}
        >
          {type === "date" && <label>{placeholder}</label>}
          <input
            type={type}
            name={name}
            onChange={(e) => {
              onChange({ e, values, setValues, setErrors, validate, boolean });
            }}
            placeholder={placeholder}
            value={type === "checkbox" ? placeholder : values[name]}
          />
          {type === "checkbox" && <label>{placeholder}</label>}
          {showErrors && errors[name] && (
            <p className="errorMessage" style={{ marginTop: "0.5rem" }}>
              {errors[name]}
            </p>
          )}
        </div>
      )}
    </>
  );
}
