import Proyec00 from "./00_primer-proyecto/Proyec_00";
import { HooksApp } from "./01_hook/HooksApp";
import ReactRouter from "./02_react-router/ReactRouter";
import { CarritoApp } from "./03_carrito-compra/CarritoApp";
import "./App.css";

function App() {
  return (
    <>
      <h1> App Modificado</h1>
      <Proyec00 />
      <HooksApp />
      {/* <ReactRouter /> */}
      {/* <CarritoApp /> */}
    </>
  );
}

export default App;
