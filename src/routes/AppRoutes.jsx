import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "../signin/signin";
import RegisterCompany from "../cadastroEmpresa/cadastro";
import PasswordRecovery from "../recovery/recoverySenha";
import MyCardCampany from "../cardCampany/campany";
import { MainLayout } from "../layouts/mylayouts";


export const AppRouters = () => {

    return (
      <MainLayout>
   
        <Routes>
       
          <Route path="/" element={<Login/>}/>
          <Route path="/RegisterCompany" element={<RegisterCompany/>}/>
          <Route path="/PasswordRecovery" element={<PasswordRecovery/>}/>
          <Route path="/MyCardCampany" element={<MyCardCampany/>}/>

        </Routes>
      </MainLayout>
    )
}