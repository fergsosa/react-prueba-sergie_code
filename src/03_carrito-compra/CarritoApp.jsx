import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";
import { NavBar } from "./components/NavBar";
import { ComprasPage } from "./pages/ComprasPage";
import { CarritoPage } from "./pages/CarritoPage";

export const CarritoApp = () => {
  return (
    <BrowserRouter>
      <ProductosProvider>
        <CarritoProvider>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<ComprasPage />} />
              <Route path="/carrito" element={<CarritoPage />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </CarritoProvider>
      </ProductosProvider>
    </BrowserRouter>
  );
};
