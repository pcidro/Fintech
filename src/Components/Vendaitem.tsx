import React from "react";
import type { Ivenda } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

const Vendaitem = ({ venda }: { venda: Ivenda }) => {
  return (
    <div className="venda box">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default Vendaitem;
