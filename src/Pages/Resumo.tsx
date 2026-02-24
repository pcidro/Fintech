import React from "react";
import { UseData } from "../Context/DataContext";

const Resumo = () => {
  const { data } = UseData();
  console.log(data);
  return <div>Resumo</div>;
};

export default Resumo;
