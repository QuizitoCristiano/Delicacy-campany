import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { HomeCompany } from "./pages/home";
import { MainLayout } from "./layouts/mylayouts";
import { AppRouters } from "./routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MainLayout>
      <AppRouters/>
    </MainLayout>
  );
}

export default App;
