import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";

// const usuario = {
//   nombre: "Fer Sosa",
//   tecnologia: "React",
//   email: "fer.sosa.info@gmail.com",
//   redes: "fersosa",
// };

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  return (
    // <UsuarioContext.Provider value={{ usuario }}>
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
