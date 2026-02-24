import React, { useState } from "react";
import "./style.css";
import Resumo from "./Pages/Resumo";
import SideNav from "./Components/SideNav";
import Header from "./Components/Header";
import { DataContextProvider } from "./Context/DataContext";

const App = () => {
  return (
    <DataContextProvider>
      <div>
        <SideNav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
};

export default App;
