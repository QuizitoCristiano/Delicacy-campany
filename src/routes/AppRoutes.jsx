import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "../signin/signin";
import RegisterCompany from "../cadastroEmpresa/cadastro";
import PasswordRecovery from "../recovery/recoverySenha";


export const AppRouters = () => {

    return (
      <BrowserRouter>
        <Routes>
       
          <Route path="/" element={<Login/>}/>
          <Route path="/RegisterCompany" element={<RegisterCompany/>}/>
          <Route path="/PasswordRecovery" element={<PasswordRecovery/>}/>
        </Routes>
      </BrowserRouter>
    )
}