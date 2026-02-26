import React from "react";
import { UseData } from "../Context/DataContext";
import DateRange from "./DateRange";
import Meses from "./Meses";

const Header = () => {
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <Meses />
    </header>
  );
};

export default Header;
