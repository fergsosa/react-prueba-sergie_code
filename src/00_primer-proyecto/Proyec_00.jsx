import React from "react";
import "./src/styles.css";
import { PrimerComponente } from "./src/PrimerComponente";
import { ContadorApp, ContadorAppBasico } from "./src/ContadorApp";
import { ListadoApp, ListadoAppBS } from "./src/ListadoApp";
import { UsersApp } from "./src/UsersApp";

const Proyec00 = () => {
  return (
    <div className="proyec_00">
      <h1>Probando modificar con react</h1>
      <UsersApp />
      <hr />
      <ListadoApp />
      <hr />
      <ListadoAppBS />
      <hr />
      <ContadorApp value={0} />
      <hr />
      <ContadorAppBasico value={0} />
      <hr />
      <PrimerComponente
        titulo="Esta sección es de props"
        subtitulo="Curso de React"
        // subtitulo="4"
        // subtitulo={4}
      />
    </div>
  );
};

export default Proyec00;
