
import React from "react";
import "./App.css";
import { MainLayout } from "./layouts/mylayouts";
import { AppRouters } from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
 

  return (
    <BrowserRouter>
      <AppRouters/>
    </BrowserRouter>
  );
}

export default App;
