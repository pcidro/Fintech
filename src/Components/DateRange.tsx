import DateInput from "./DateInput";
import { UseData } from "../Context/DataContext";

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = UseData();
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
