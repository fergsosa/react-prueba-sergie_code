import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { UsuarioProvider } from "./routes/context/UsuarioProvider";
import { NavBar } from "./routes/components/NavBar";
import { HomeScreen } from "./routes/pages/HomeScreen";
import { LoginScreen } from "./routes/pages/LoginScreen";
import { AbautScreen } from "./routes/pages/AbautScreen";
import { ContactScreen } from "./routes/pages/ContactScreen";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <div>ReactRouter</div>
      <hr />
      <UsuarioProvider>
        <NavBar />
        <hr />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/about" element={<AbautScreen />}></Route>
          <Route path="/contact" element={<ContactScreen />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </UsuarioProvider>
      <hr />
    </BrowserRouter>
  );
};

export default ReactRouter;
