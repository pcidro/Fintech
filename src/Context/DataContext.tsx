import React from "react";
import useFetch from "../Hooks/useFetch";

type IdataContext = {
  loading: boolean;
  error: string | null;
  data: Ivenda[] | null;
};

type Ivenda = {
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

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<Ivenda[]>(
    "https://data.origamid.dev/vendas/",
  );
  return (
    <dataContext.Provider value={{ data, loading, error }}>
      {children}
    </dataContext.Provider>
  );
};
