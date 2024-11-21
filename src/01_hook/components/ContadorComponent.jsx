import { UserCounter } from "../hooks/UserCounter";

export const ContadorComponent = () => {
  const { contador, incrementar, decrementar, resetear } = UserCounter(0);
  return (
    <>
      <h1>Contador: {contador}</h1>
      <button className="btn btn-primary" onClick={() => incrementar()}>
        +1
      </button>
      <button className="btn btn-danger" onClick={() => resetear()}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrementar()}>
        -1
      </button>
    </>
  );
};
