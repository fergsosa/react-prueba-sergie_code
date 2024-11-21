import { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

const Item = ({ nombre, visto }) => {
  return (
    <li className="fondo">
      {nombre} {visto ? "✅" : "⛔"}
    </li>
  );
};

export const ListadoApp = () => {
  const addTask = () => {
    setArr([...arr, { nombre: "nuevo", visto: false }]);
    console.log(arr);
  };

  let listadoSecciones = [
    { id: 0, nombre: "Intalaciones Necesarias", visto: true },
    { id: 1, nombre: "Uso de Vite", visto: true },
    { id: 2, nombre: "Componentes", visto: true },
    { id: 3, nombre: "Variables en JSX", visto: true },
    { id: 4, nombre: "Props", visto: true },
    { id: 5, nombre: "Eventos", visto: true },
    { id: 6, nombre: "useState", visto: true },
    { id: 7, nombre: "Redux", visto: false },
    { id: 8, nombre: "customHooks", visto: false },
  ];

  const [arr, setArr] = useState(listadoSecciones);
  // console.log(arr);
  const onAgregarTarea = (val) => {
    let valor = val.trim();
    if (val < 1) return;
    const envio = {
      id: arr.length,
      nombre: valor,
      visto: false,
    };
    setArr([...arr, envio]);
  };

  return (
    <>
      <h1>Listado de Temas del Curso</h1>
      {/* <AgregarTarea agregarTarea={setArr} /> */}
      <AgregarTarea agregarTarea={onAgregarTarea} />
      <ol>
        {arr.map((item) => (
          <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>
        ))}
      </ol>

      {/* <button onClick={() => addTask()}>Agregar Tarea</button> */}
    </>
  );
};

const ItemsBS = ({ nombre, visto }) => {
  return (
    <li>
      {nombre} {visto ? "✅" : "⛔"}
      {/* {nombre} {visto && "✅"} */}
    </li>
  );
};

export const ListadoAppBS = () => {
  return (
    <>
      <h1>Listado de Temas del Curso</h1>
      <ol>
        <ItemsBS nombre="Intalaciones" visto={true}></ItemsBS>
        <ItemsBS nombre="Uso de Vite" visto={true}></ItemsBS>
        <ItemsBS nombre="Componentes" visto={true}></ItemsBS>
        <ItemsBS nombre="Variables en JSX" visto={true}></ItemsBS>
        <ItemsBS nombre="Props" visto={true}></ItemsBS>
        <ItemsBS nombre="Eventos" visto={true}></ItemsBS>
        <ItemsBS nombre="useState" visto={true}></ItemsBS>
        <ItemsBS nombre="Redux" visto={false}></ItemsBS>
        <ItemsBS nombre="customHooks" visto={false}></ItemsBS>
      </ol>
    </>
  );
};
