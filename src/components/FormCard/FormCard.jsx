// import React, { useState } from "react";

// export default function FormCard() {
//   const [numberCard, setNumberCard] = useState("");

//   function handleInput(e) {
//     const inputNumber = e.target.value.replace(/\s/g, "");
//     setNumberCard(inputNumber);

//     const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
//     const mastercardPattern = /^5[1-5][0-9]{14}$/;
//     const amexPattern = /^3[47][0-9]{13}$/;
//     const discoverPattern = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

//     if (visaPattern.test(inputNumber)) {
//       setCardType("Visa");
//     } else if (mastercardPattern.test(inputNumber)) {
//       setCardType("Mastercard");
//     } else if (amexPattern.test(inputNumber)) {
//       setCardType("American Express");
//     } else if (discoverPattern.test(inputNumber)) {
//       setCardType("Discover");
//     } else {
//       setCardType(null);
//     }
//   }

//   const [cardType, setCardType] = useState(null);

//   return (
//     <>
//       <input
//         type="text"
//         onInput={handleInput}
//         name="numberCard"
//         value={numberCard}
//       />
//       {cardType && <p>{cardType}</p>}
//     </>
//   );
// }
// import React from "react";
// import Cards from "react-credit-cards";
// import { useState } from "react";
// import "react-credit-cards/es/styles-compiled.css";

// export default function FormCard() {
//   const [state, setState] = useState({
//     cvc: "",
//     expiry: "",
//     focus: "",
//     name: "",
//     number: "",
//   });

//   const handleInputFocus = (e) => {
//     setState({ ...state, focus: e.target.name });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setState({ ...state, [name]: value });
//   };

//   return (
//     <div className="container mt-5 justify-content-center align-content-center p-2 bg-light rounded-4 text-center">
//       <h3 className="my-3">
//         Cargá tu <em style={{ color: "orangered" }}>tarjeta </em>
//       </h3>
//       <div
//         className="row justify-content-center align-content-center mx-auto text-center my-5"
//         id="PaymentForm"
//       >
//         <div className="col align-items-center my-auto">
//           <div>
//             <Cards
//               cvc={state.cvc}
//               expiry={state.expiry}
//               focused={state.focus}
//               name={state.name}
//               number={state.number}
//             />
//           </div>
//         </div>
//         <div className="col align-items-center my-auto">
//           <form className="form-group my-auto">
//             <input
//               className="form-control mt-2"
//               type="number"
//               name="number"
//               placeholder="Número de Tarjeta"
//               onChange={handleInputChange}
//               onFocus={handleInputFocus}
//             />
//             <input
//               className="form-control mt-2"
//               type="text"
//               name="name"
//               placeholder="Nombre"
//               onChange={handleInputChange}
//               onFocus={handleInputFocus}
//             />
//             <input
//               className="form-control mt-2"
//               type="text"
//               name="expiry"
//               placeholder="Vencimiento"
//               onChange={handleInputChange}
//               onFocus={handleInputFocus}
//             />
//             <input
//               className="form-control mt-2"
//               type="number"
//               name="cvc"
//               placeholder="cvc"
//               onChange={handleInputChange}
//               onFocus={handleInputFocus}
//             />
//           </form>
//         </div>
//       </div>
//       <div className="row justify-content-center mb-3">
//         <button className="btn btn-success w-25">Continuar</button>
//       </div>
//     </div>
//   );
// }
