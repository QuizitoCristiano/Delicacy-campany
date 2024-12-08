import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../signin/signin";
import RegisterCompany from "../cadastroEmpresa/cadastro";
import { PasswordRecovery } from "../recovery/recoverySenha";
import MyCardCampany from "../cardCampany/campany";
import { MainLayout } from "../layouts/mylayouts";
import { Pedidos } from "../pages/pedidos";
import { MeuCadastro } from "../lib/libcontate";
// import { CreateProductItem } from "../assets/createProducts";

export const AppRouters = () => {
  return (
    <Routes>
      {/* Rotas sem layout */}
      <Route path="/" element={<Login />} />
      {/* <Route path="/RegisterCompany" element={<RegisterCompany />} /> */}
      <Route path="/MeuCadastro" element={<MeuCadastro />} />
      <Route path="/PasswordRecovery" element={<PasswordRecovery />} />


      
      {/* Rotas com MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/MyCardCampany" element={<MyCardCampany />} />
        <Route path="/Pedidos" element={<Pedidos />} />
      </Route>
      
      {/* Rota padrão para não encontrados */}
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
