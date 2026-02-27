import React from "react";
import type { Ivenda } from "../Context/DataContext";

const Vendaitem = ({ venda }: { venda: Ivenda }) => {
  return (
    <div className="venda box">
      <a style={{ fontFamily: "monospace" }} href="">
        {venda.id}
      </a>
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
