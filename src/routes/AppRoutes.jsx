import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "../signin/signin";
import RegisterCompany from "../cadastroEmpresa/cadastro";
import {PasswordRecovery} from "../recovery/recoverySenha";
import MyCardCampany from "../cardCampany/campany";
import { MainLayout } from "../layouts/mylayouts";
import { Pedidos } from "../pages/pedidos";
import { CreateProductItem } from "../assets/createProducts ";


export const AppRouters = () => {

    return (
      <MainLayout>
      <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/MyCardCampany" element={<MyCardCampany />} />
          <Route path="/RegisterCompany" element={<RegisterCompany />} />
          <Route path="/Pedidos" element={<Pedidos />} />
          <Route path="/CreateProductItem" element={<CreateProductItem />} />
          <Route path="*" element={<Login />} />
      </Routes>
  </MainLayout>
    )
}