import React from "react";
import useFetch from "../Hooks/useFetch";

type IdataContext = {
  loading: boolean;
  error: string | null;
  data: Ivenda[] | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

export type Ivenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  data: string;
  parcelas: null | number;
};

const dataContext = React.createContext<IdataContext | null>(null);

export const UseData = () => {
  const context = React.useContext(dataContext);
  if (!context) throw new Error("UseData precisa estar em dataContextProvider");
  return context;
};

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDate(30));
  const [final, setFinal] = React.useState(getDate(0));
  const { data, loading, error } = useFetch<Ivenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );
  return (
    <dataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </dataContext.Provider>
  );
};
