import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./globalsAuthContext/index";
import { Login } from "./signin/signin";
import { AppRouters } from "./routes/AppRoutes";
import { MeuCadastro } from "./lib/libcontate";
function App() {
  const { user } = useAuth() || {};

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<MeuCadastro />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
