import React from "react";
import { UseData } from "../Context/DataContext";

const Header = () => {
  const { data } = UseData();
  console.log(data);
  return <div></div>;
};

export default Header;
