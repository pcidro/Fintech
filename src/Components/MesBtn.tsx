import React from "react";
import { UseData } from "../Context/DataContext";

const styleButtonMes: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(color-1)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function nomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  const nome = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(date);
  return nome;
}

function formateDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

const MesBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = UseData();
  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formateDate(firstDay));
    setFinal(formateDate(lastDay));
  }
  return (
    <button onClick={() => setMes(n)} style={styleButtonMes}>
      {nomeMes(n)}
    </button>
  );
};

export default MesBtn;
