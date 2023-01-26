import "./LogFilter.css";
const LogFilter = ({ year, onYearChange }) => {
  const changeHandler = (e) => {
    onYearChange(+e.target.value);
  };
  return (
    <div>
      <span className="filter-year">Year:</span>
      <select value={year} onChange={changeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};

export default LogFilter;
