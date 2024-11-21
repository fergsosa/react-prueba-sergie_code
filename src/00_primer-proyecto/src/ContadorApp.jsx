import { useState } from "react";

export const ContadorApp = ({ value }) => {
  const [contador, setContador] = useState(value);

  const handleClick = () => {
    setContador(contador + 1);
    // console.log(value);
  };
  return (
    <div>
      <h1>Contador Hook userState:</h1>
      <h1>{contador}</h1>
      <button onClick={handleClick}>Soy un Botón</button>
    </div>
  );
};

const Button = () => {
  return <button>Button</button>;
};

//*2 function handleClick(e, arg) {
//   console.log(e);
//   console.log(arg);
// }

//*3 const Button = () => {
//   return <button onClick={handleClick}>Soy un Botón</button>;
// };

//*4 const handleClick = (e) => console.log(e);

//*5 const handleClick = (value) => {
//   value += 1;
//   console.log(value);
// };

export const ContadorAppBasico = ({ value }) => {
  const handleClick = () => {
    value += 1;
    console.log(value);
  };

  return (
    <div>
      <h1>Contador:</h1>
      <h1>{value}</h1>
      <button onClick={handleClick}>Soy un Botón</button>
      <button onClick={() => handleClick(value)}>Botón 2</button>
      <button onClick={handleClick}> Botón 3</button>
      <Button />
      <button onClick={(e) => handleClick(e, "Otro Argumento")}>Botón 4</button>
      <Button>btn</Button>
    </div>
  );
};
