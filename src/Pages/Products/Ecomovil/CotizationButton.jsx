import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { infoProducts } from "../../../components/SectionProducts/products";
import {toast} from "react-toastify"

export const CotizationButton = ({ allPerson }) => {
  const { userId } = useParams();
  const [recipientEmail, setRecipientEmail] = useState("");  

  useEffect(() => {
    if (userId) {
      axios
        .get(`${process.env.REACT_APP_URI_API}/user/getPasById/${userId}`)
        .then((response) => {
          setRecipientEmail(response.data.email);
        })
        .catch((error) => {
          console.error("Error al obtener el usuario:", error);
          setRecipientEmail("santiagosito@gmail.com");
        });
    } else {
      console.error("user not found");
      setRecipientEmail("santiagosito@gmail.com");
    }
  }, [userId]);

  
  const createCotization = async () => {
    try {
      await sendMailCLient();
      await sendMailPas();
      await postProduct(userId);
    } catch (error) {
      // console.error("Error al enviar el correo electrónico:", error);      
      toast.error('Error en el sistema, intentelo nuevamente más tarde.', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };

  const sendMailPas = async () => {    
    const config = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_URI_API}/mail/sendEmail`,
      data: {
        recipient_email: recipientEmail,
        inner_mail: `
        <head>
          <title>Nueva cotización pendiente</title>
        </head>
        <body>
        <header>
        <h1 style="font-size: 30px; font-weight: bold; margin-bottom: 20px; color: #ff6600;">Libra Seguros</h1>
        </header>
          <main>
            <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">Tienes una nueva cotización pendiente:</h1>
            <p style="font-size: 16px; line-height: 1.5;">
              Tienes una nueva cotización pendiente de:
              <span style="color: #ff6600; font-weight: bold;" id="name">${allPerson[0].name}</span>
              <span style="color: #ff6600; font-weight: bold;" id="lastname">${allPerson[0].lastname}</span>
              para un producto
              <span style="color: #ff6600; font-weight: bold;" id="type">${allPerson[0].type}</span>.
              Ingresa a tu perfil para ver los detalles y poder realizar correctamente la cotización y ponerte en contacto con tu cliente.
            </p>
          </main>
        </body>
        `,
        subject: "Nueva cotización en tu market",
        attachFile: false,
      },
    };

    try {
      const response = await axios(config);
      console.log("Email enviado al PAS");
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
      alert("Error de sistema. Intente de nuevo más tarde.");
    }
  };

  const sendMailCLient = async () => {    
    const conf = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_URI_API}/mail/sendEmail`,
      data: {
        recipient_email: allPerson[0].email,
        inner_mail:
          "Su cotización está siendo procesada por su productor, aguarde a recibir la respuesta",
        subject: "Su cotización está siendo procesada",
        attachFile: false,
      },
    };

    try {
      const res = await axios(conf);
      toast.success('Solicitud de cotización enviada!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
      alert("Error de sistema. Intente de nuevo más tarde.");
    }
  };

  const postProduct = async () =>{
    let idUser = 0
    if (userId !== undefined) {
      idUser = userId
    } else {
      idUser = "covery"
    }
    const config = {
      method: "POST",
      url: `${process.env.REACT_APP_URI_API}/product/postCotizationJson`,
      data: {
        idPas: idUser,
        data: allPerson[0],
        jsonData: {
          name: allPerson[0].name,
          description: allPerson[0].email,
          price: parseFloat(allPerson[0].price),
        }
      },
    };
    try {
      const response = await axios(config);
      console.log(response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Error de sistema.", error);
    }
  }
  return (
    <div className="list-group-item">
      <button className="btn btn-primary" onClick={createCotization}>
        Cotizar!
      </button>
    </div>
  );
};
