/* eslint-disable react/prop-types */
import { useState } from "react";

export const AgregarTarea = ({ agregarTarea }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChage = (e) => {
    setInputValue(e.target.value);
    // console.log(inputValue);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    agregarTarea(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingresá tarea nueva"
        value={inputValue}
        onChange={onInputChage}
      />
    </form>
  );
};
