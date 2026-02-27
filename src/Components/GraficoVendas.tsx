import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Ivenda } from "../Context/DataContext";

const dadosGrafico = [
  {
    data: "2026-01-04",
    pago: 30000,
    processando: 3000,
    falha: 1000,
  },
  {
    data: "2026-01-03",
    pago: 40000,
    processando: 2000,
    falha: 6000,
  },

  {
    data: "2026-01-05",
    pago: 70000,
    processando: 2000,
    falha: 6000,
  },
];

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

type Acc = {
  [key: string]: VendaDia;
};

function transformData(data: Ivenda[]): VendaDia[] {
  const dias = data.reduce((acc: Acc, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const GraficoVendas = ({ data }: { data: Ivenda[] }) => {
  const transformedData = transformData(data);
  return (
    <ResponsiveContainer width={"99%"} height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
