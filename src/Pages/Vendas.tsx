import React from "react";
import { UseData } from "../Context/DataContext";
import Vendaitem from "../Components/Vendaitem";

const Vendas = () => {
  const { data } = UseData();
  if (data === null) return null;

  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <Vendaitem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
