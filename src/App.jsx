
import React from "react";
import "./App.css";
import { MainLayout } from "./layouts/mylayouts";
import { AppRouters } from "./routes/AppRoutes";

function App() {
 

  return (
    <MainLayout>
      <AppRouters/>
    </MainLayout>
  );
}

export default App;
