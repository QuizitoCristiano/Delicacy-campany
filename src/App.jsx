import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, useAuth } from "./globalsAuthContext/index";
import { AppRouters } from "./routes/AppRoutes";
import MyCardCampany from "./cardCampany/campany";

function App() {
  const { user } = useAuth() || {};

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouters />
   
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;





