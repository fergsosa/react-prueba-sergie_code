import PropTypes from "prop-types";

// * rafc
export const PrimerComponente = ({
  titulo,
  subtitulo = "Sección de Props",
}) => {
  // console.log(titulo);
  // console.log(subtitulo);
  // console.log(typeof subtitulo);
  return (
    <>
      <h1>Props: </h1>{" "}
      <ul>
        <li>{titulo}</li>
        <li>{subtitulo + 1}</li>
      </ul>
    </>
  );
};

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  // subtitulo: PropTypes.number.isRequired,
  subtitulo: PropTypes.string.isRequired,
};

// PrimerComponente.defaultProps = {
//   titulo: "Curso de React",
//   subtitulo: "Sección de Props",
// };

// const string = "Esto es un texto";
// const number = 123456;
// const array = ["Curso de React", "Youtuebe", 4, , 100000];
// const boolean = true;
// // const funcion = () => 1 + 1;
// const funcion = () => "String desde función";
// const objeto = { nombre: "Curso de JavaScript", duracion: 4 };
// const fecha = new Date();

// // * rafc
// export const PrimerComponente = () => {
//   return (
//     <>
//       <h3>string: {string}</h3>
//       <h3>number: {number}</h3>
//       <h3>array: {array}</h3>
//       <h3>boolean: {boolean}</h3>
//       <h3>funcion: {funcion}</h3>
//       <h3>funcion: {funcion()}</h3>
//       {/* <h3>objeto: {objeto}</h3> */}
//       <h3>objeto: {JSON.stringify(objeto)}</h3>
//       {/* <h3>fecha: {fecha}</h3> */}
//       <h3>fecha: {JSON.stringify(fecha)}</h3>
//     </>
//   );
// };

// ? ------------------------------
// * ffc
// function PrimerComponente() {
//   return <h3>Hola Mundo FFC</h3>;
// }

// export default PrimerComponente;

// * cc
// import { Component } from "react";
// class PrimerComponente extends Component {
//   state = {};
//   render() {
//     return <h3>Hola Mundo CC</h3>;
//   }
// }

// export default PrimerComponente;
