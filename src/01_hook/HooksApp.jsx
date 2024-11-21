import { CalculosPesados } from "./components/CalculosPesados";
import { CallBackComponent } from "./components/CallBackComponent";
import { ContadorComponent } from "./components/ContadorComponent";
import { FormularioComponent } from "./components/FormularioComponent";
import { ListaTareas } from "./components/ListaTareas";
import { UsuariosComponent } from "./components/UsuariosComponent";

const estilos = {
  backgroundColor: "#222",
  color: "#ddd",
  padding: "1rem",
};

export const HooksApp = () => {
  return (
    <div style={estilos}>
      <h1>Aplicación de Hooks</h1>
      <hr />
      <ListaTareas />
      <hr />
      <CallBackComponent />
      <hr />
      <CalculosPesados />
      <hr />
      <UsuariosComponent />
      <hr />
      <FormularioComponent />
      <hr />
      <ContadorComponent />
    </div>
  );
};
